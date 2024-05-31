import { FaRegTrashAlt } from 'react-icons/fa';

const SelectedIngredients = ({ ingredients, removeIngredient }) => {
  return (
    <div className="max-h-52 overflow-scroll no-scrollbar">
      {ingredients.map(
        ({ ingredientName, ingredientValue, ingredientUnit }) => (
          <div key={ingredientName} className="flex justify-between py-2">
            <span>
              {ingredientName}: {ingredientValue} {ingredientUnit}
            </span>
            <FaRegTrashAlt
              className="text-highlightColor text-sm cursor-pointer"
              onClick={() => removeIngredient(ingredientName)}
            />
          </div>
        )
      )}
    </div>
  );
};
export default SelectedIngredients;
