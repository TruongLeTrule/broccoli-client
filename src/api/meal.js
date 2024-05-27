import axios from 'axios';
import { cleanCreateMealBody } from '../utils/cleanRequestBody';

const baseUrl = 'http://localhost:3000/api/v1/meals';

export const createMeal = (mealName, ingredients) =>
  axios
    .post(baseUrl, cleanCreateMealBody(mealName, ingredients))
    .then((response) => response);
