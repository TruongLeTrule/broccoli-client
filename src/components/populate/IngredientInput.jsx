import IngredientTypeSelect from './IngredientTypeSelect';

const IngredientInput = ({ setIngredient, ingredient, label, onFocus }) => {
  return (
    <div>
      <label className="font-semibold">{label}</label>
      <div className="flex w-full border-2 p-2 rounded-md mt-2 ">
        <input
          onFocus={onFocus}
          value={ingredient.ingredientName}
          onChange={(e) =>
            setIngredient({
              ...ingredient,
              ingredientName: e.target.value,
            })
          }
          className="w-full focus:outline-none"
          placeholder={label}
        />
        <IngredientTypeSelect
          setIngredient={(e) =>
            setIngredient({
              ...ingredient,
              ingredientType: e.target.value,
            })
          }
          ingredientType={ingredient.ingredientType}
        />
      </div>
    </div>
  );
};
export default IngredientInput;
