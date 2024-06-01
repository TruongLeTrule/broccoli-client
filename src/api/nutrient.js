import axios from 'axios';

const baseUrl = 'http://localhost:3000/api/v1/nutrients';

export const getAllNutrients = () =>
  axios.get(baseUrl).then((response) => response.data);
