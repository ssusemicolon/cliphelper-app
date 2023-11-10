import axios from 'axios';

export const BASE_URL = 'http://localhost:8080';

export const publicAxios = axios.create({
  baseURL: BASE_URL,
});

export const authAxios = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBY2Nlc3NUb2tlbiIsIm1lbWJlcklkIjoiMSIsImF1dGhvcml0aWVzIjoiUk9MRV9VU0VSIiwidHlwZSI6IkJlYXJlciIsImV4cCI6MTgwMDAwMDAwMH0.xO1lylRftb3brOw-SOu1XX425ylw9XIwGnYmmRkm5J-J3NLqvCFtbk0mFyKnjK57pVdsZNGrotGG3vk1eWfpTA',
  },
});
