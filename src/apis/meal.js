import customAxios from '../utils/customAxios';
import { cleanCreateMealBody } from '../utils/cleanRequestBody';

export const createMeal = (meal, ingredients, mealTimes) =>
  customAxios
    .post('meals', cleanCreateMealBody(meal, ingredients, mealTimes))
    .then((response) => response);

export const updateMeal = (meal, ingredients, mealTimes) =>
  customAxios
    .patch(
      `meals/${meal.mealId}`,
      cleanCreateMealBody(meal, ingredients, mealTimes)
    )
    .then((response) => response);

export const getMealSpecific = (id) =>
  customAxios.get(`meals/${id}`).then((response) => response.data);

export const getAllMeals = () =>
  customAxios.get('meals').then((response) => response.data.meals);
