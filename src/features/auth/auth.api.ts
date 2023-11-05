import axios from 'axios';

export const BASE_URL = 'http://localhost:8080';

export const publicAxios = axios.create({
  baseURL: BASE_URL,
});

export const authAxios = axios.create({
  baseURL: BASE_URL,
});
