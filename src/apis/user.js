import customAxios from '../utils/customAxios';

export const getCurrentUser = () =>
  customAxios.get(`/user/current-user`).then((response) => response.data);
export const getUserTarget = () =>
  customAxios.get(`/user/target`).then((response) => response.data);
export const updateUserTarget = (nutrients) =>
  customAxios
    .patch(`/user/target`, nutrients)
    .then((response) => response.data);
