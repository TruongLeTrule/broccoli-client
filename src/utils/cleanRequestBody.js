export const cleanCreateMealBody = (mealName, ingredients) => {
  return {
    mealName,
    ingredients: ingredients.map(({ id, ingredientValue, ingredientUnit }) => ({
      id: parseInt(id),
      ingredientValue: parseFloat(ingredientValue),
      ingredientUnit,
    })),
  };
};
