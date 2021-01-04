import { Effect, ImmerReducer, Reducer, Subscription } from 'umi';
import { getRemoteList } from '@/pages/users/service';

export interface UsersModelState {
  data: any;
}

export interface UsersModelType {
  namespace: 'users';
  state: UsersModelState;
  effects: {
    query: Effect;
  };
  reducers: {
    save: Reducer<UsersModelState>;
    // 启用 immer 之后
    // save: ImmerReducer<UsersModelState>;
  };
  subscriptions: { setup: Subscription };
}

const UsersModel: UsersModelType = {
  namespace: 'users',

  state: {
    data: [
      { id: 1, name: 'zhangsan3', Create_Time: '2021-01-03' },
      { id: 2, name: 'lisi', Create_Time: '2021-01-04' },
      { id: 3, name: 'wangwu', Create_Time: '2021-01-05' },
    ],
  },

  effects: {
    *getRemote(action: any, { call, put }: any) {
      const data = yield call(getRemoteList);
      console.log(data);
      yield put({
        type: 'getList',
        payload: {
          data,
        },
      });
    },
  },
  reducers: {
    save(state: any, action: any) {
      return {
        ...state,
        ...action.payload,
      };
    },
    // 启用 immer 之后
    // save(state, action) {
    //   state.name = action.payload;
    // },
  },
  subscriptions: {
    setup({ dispatch, history }: any) {
      return history.listen(({ pathname }: any) => {
        if (pathname === '/') {
          dispatch({
            type: 'query',
          });
        }
      });
    },
  },
};

export default UsersModel;
