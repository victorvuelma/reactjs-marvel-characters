import axios from 'axios';

console.log(process.env);

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE,
});

api.interceptors.request.use((config) => {
  config.params = { ...config.params, apikey: process.env.REACT_APP_API_KEY };

  return config;
});

export default api;
