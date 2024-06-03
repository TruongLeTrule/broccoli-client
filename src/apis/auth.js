import customAxios from '../utils/customAxios';

export const login = ({ username, password }) =>
  customAxios
    .post('/auth/login', { username, password })
    .then((response) => response.data);

export const register = ({ username, password }) =>
  customAxios
    .post('/auth/register', { username, password })
    .then((response) => response.data);

export const logOut = () =>
  customAxios.get('/auth/logout').then((response) => response.data);
