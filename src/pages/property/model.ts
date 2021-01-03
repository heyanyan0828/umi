import { Effect, Reducer, Subscription } from 'umi';

export interface PropertyModelState {
  data: any;
}

export interface PropertyModelType {
  namespace: string;
  state: PropertyModelState;
  effects: {
    query: Effect;
  };
  reducers: {
    save: Reducer<PropertyModelState>;
    // 启用 immer 之后
    // save: ImmerReducer<PropertyModelState>;
  };
  subscriptions: { setup: Subscription };
}

const PropertyModel: PropertyModelType = {
  namespace: 'property',

  state: {
    data: [
      { id: 1, name: '体育西路三房', Create_Time: '2021-01-03' },
      { id: 2, name: '林和西四房', Create_Time: '2021-01-04' },
      { id: 3, name: 'xxx', Create_Time: '2021-01-05' },
    ],
  },

  effects: {
    *query({ payload }, { call, put }) {},
  },
  reducers: {
    save(state, action) {
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
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname === '/') {
          dispatch({
            type: 'query',
          });
        }
      });
    },
  },
};

export default PropertyModel;
