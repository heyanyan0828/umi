import { request } from 'umi';
export const getRemoteList = async (params: any) => {
  return (
    request('http://public-api-vi_aspirantzhang.com/users', {
      method: 'get',
    })
      // 成功
      .then(function (response: any) {
        return response;
      })
      // 失败
      .catch(function (error: any) {
        console.log(error);
      })
  );
};
