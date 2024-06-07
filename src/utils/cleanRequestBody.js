export const cleanCreateMealBody = (meal, ingredients, mealTimes) => {
  const { mealName, mealType } = meal;
  return {
    mealName,
    mealType,
    ingredients: ingredients.map(
      ({ ingredientId, ingredientValue, ingredientUnit }) => ({
        ingredientId: parseInt(ingredientId),
        ingredientValue: parseFloat(ingredientValue),
        ingredientUnit,
      })
    ),
    mealTimes: mealTimes.map(({ value }) => value),
  };
};

export const cleanCreateIngredientBody = (ingredient, nutrients) => {
  return {
    ...ingredient,
    nutrients: Object.keys(nutrients).map((key) => ({
      nutrientId: parseInt(key),
      nutrientValueOn100g: parseFloat(nutrients[key]),
    })),
  };
};
