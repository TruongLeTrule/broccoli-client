import axios from 'axios';
import { cleanCreateMealBody } from '../utils/cleanRequestBody';

const baseUrl = 'http://localhost:3000/api/v1/meals';

export const createMeal = (meal, ingredients) =>
  axios
    .post(baseUrl, cleanCreateMealBody(meal, ingredients))
    .then((response) => response);

export const updateMeal = (meal, ingredients) =>
  axios
    .patch(`${baseUrl}/${meal.mealId}`, cleanCreateMealBody(meal, ingredients))
    .then((response) => response);

export const getMealSpecific = (id) =>
  axios.get(`${baseUrl}/${id}`).then((response) => response.data);

export const getAllMeals = () =>
  axios.get(baseUrl).then((response) => response.data.meals);
