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

export const cleanCreateIngredientBody = (ingredient, nutrients) => {
  return {
    ...ingredient,
    nutrients: Object.keys(nutrients).map((key) => ({
      nutrientId: parseInt(key),
      nutrientValueOn100g: parseFloat(nutrients[key]),
    })),
  };
};
