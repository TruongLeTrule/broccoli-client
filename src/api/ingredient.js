import axios from 'axios';
import { cleanCreateIngredientBody } from '../utils/cleanRequestBody';

const baseUrl = 'http://localhost:3000/api/v1/ingredients';

export const getAllIngredients = () =>
  axios.get(baseUrl).then((response) => response.data.ingredients);

export const getIngredientSpecific = (id) =>
  axios.get(`${baseUrl}/${id}`).then((response) => response.data);

export const createIngredient = (ingredient, nutrients) =>
  axios
    .post(baseUrl, cleanCreateIngredientBody(ingredient, nutrients))
    .then((response) => response.data);

export const updateIngredient = (id, ingredient, nutrients) =>
  axios
    .patch(`${baseUrl}/${id}`, cleanCreateIngredientBody(ingredient, nutrients))
    .then((response) => response.data);
