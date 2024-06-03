import customAxios from '../utils/customAxios';

export const getCurrentUser = () =>
  customAxios.get(`/user/current-user`).then((response) => response.data);
