import axios from  'axios';

export const getUser = () => {
    return axios
      .get(`/users?name=hengzeng`)
      .then((res) => {
        if (res.status === 200) {
          const { data } = res;
          return data;
        }
        return res.status;
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  };
  