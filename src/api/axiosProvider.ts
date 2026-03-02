import axios from 'axios';

const axiosInstance = axios.create({ baseURL: import.meta.env.VITE_PLAY_SHOP_BACKEND });

export { axiosInstance as axios };
