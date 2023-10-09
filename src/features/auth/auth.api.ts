import axios from 'axios';

const BASE_URL = '';

export const publicAxios = axios.create({
  baseURL: BASE_URL,
});

export const authAxios = axios.create({
  baseURL: BASE_URL,
});
