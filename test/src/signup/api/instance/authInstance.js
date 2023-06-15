import axios from 'axios';

const authAPI = (url, options) => {
  const token = '';
  return axios.create({
    baseURL: url,
    headers: {
      Authorization: `JWT ${token}`,
    },
    ...options,
  });
};

export const authInstance = authAPI(process.env.REACT_APP_BASE_URL);
