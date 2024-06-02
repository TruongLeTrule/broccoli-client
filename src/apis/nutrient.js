import customAxios from '../utils/customAxios';

export const getAllNutrients = () =>
  customAxios.get('nutrients').then((response) => response.data);
