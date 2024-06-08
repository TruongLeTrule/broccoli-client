import customAxios from '../utils/customAxios';

export const createMealPlanAPI = (
  appliedDate = new Date(new Date().setHours(0, 0, 0, 0)),
  existMeals = {}
) =>
  customAxios
    .post('/planner/create', {
      appliedDate,
      existMeals,
    })
    .then((response) => response.data);

export const updateMealPlanAPI = (
  appliedDate = new Date(new Date().setHours(0, 0, 0, 0)),
  existMeals = {}
) =>
  customAxios
    .patch('/planner/update', {
      appliedDate,
      existMeals,
    })
    .then((response) => response.data);

export const updateOneMealAPI = (
  mealId,
  mealTime,
  appliedDate = new Date(new Date().setHours(0, 0, 0, 0)),
  existMeals = {}
) =>
  customAxios
    .patch('/planner/update-meal', {
      appliedDate,
      existMeals,
      mealId,
      mealTime,
    })
    .then((response) => response.data);

export const getMealPlanAPI = (
  appliedDate = new Date(new Date().setHours(0, 0, 0, 0))
) => {
  return customAxios
    .post('/planner', { appliedDate })
    .then((response) => response.data);
};
