import customAxios from '../utils/customAxios';
import { cleanCreateIngredientBody } from '../utils/cleanRequestBody';

export const getAllIngredients = () =>
  customAxios.get('ingredients').then((response) => response.data.ingredients);

export const getIngredientSpecific = (id) =>
  customAxios.get(`ingredients/${id}`).then((response) => response.data);

export const createIngredient = (ingredient, nutrients) =>
  customAxios
    .post('ingredients', cleanCreateIngredientBody(ingredient, nutrients))
    .then((response) => response.data);

export const updateIngredient = (id, ingredient, nutrients) =>
  customAxios
    .patch(
      `ingredients/${id}`,
      cleanCreateIngredientBody(ingredient, nutrients)
    )
    .then((response) => response.data);
