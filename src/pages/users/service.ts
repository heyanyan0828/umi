import { request } from 'umi';
export const getRemoteList = async (params: any) => {
  return (
    request('/api/users', {
      method: 'get',
    })
      // 成功
      .then(function (response: any) {
        console.log(response);
        return response;
      })
      // 失败
      .catch(function (error: any) {
        console.log(error);
      })
  );
};
