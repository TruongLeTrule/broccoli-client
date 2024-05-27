import axios from 'axios';

export const getAllIngredients = () =>
  axios
    .get('http://localhost:3000/api/v1/ingredients')
    .then((response) => response.data.ingredients);
