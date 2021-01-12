import { Effect, ImmerReducer, Reducer, Subscription } from 'umi';
import { getRemoteList } from '@/pages/users/service';

export interface UsersModelState {
  user: any;
}

export interface UsersModelType {
  namespace: 'users';
  state: any;
  effects: {
    // query: Effect;
    getRemote: Effect;
  };
  reducers: {
    getList: Reducer<UsersModelState>;
    // save: Reducer<UsersModelState>;
    // 启用 immer 之后
    // save: ImmerReducer<UsersModelState>;
  };
  subscriptions: { setup: Subscription };
}

const UsersModel: UsersModelType = {
  namespace: 'users',

  state: {},

  effects: {
    *getRemote(action: any, { call, put }: any) {
      const user = yield call(getRemoteList);
      // console.log(data);
      yield put({
        type: 'getList',
        payload: user, // {payload: user}
      });
    },
  },
  reducers: {
    //Reducer
    getList(state, { payload }) {
      return payload;
    },

    // save(state: any, action: any) {
    //   return {
    //     ...state,
    //     ...action.payload,
    //   };
    // },
    // 启用 immer 之后
    // save(state, action) {
    //   state.name = action.payload;
    // },
  },
  subscriptions: {
    setup({ dispatch, history }: any) {
      return history.listen(({ pathname }: any) => {
        if (pathname === '/users') {
          dispatch({
            type: 'getRemote',
          });
        }
      });
    },
  },
};

export default UsersModel;
