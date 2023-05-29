import axios from  'axios';

export const getTweets = () => {
    return axios
      .get(`/tweets`)
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
  