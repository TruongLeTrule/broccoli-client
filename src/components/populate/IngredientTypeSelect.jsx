import { ingredientTypes } from '../../utils/renderArr';

const IngredientTypeSelect = ({ setIngredientType, ingredientType }) => {
  return (
    <select
      name="ingredientType"
      id="ingredientType"
      className="focus:outline-none"
      value={ingredientType}
      onChange={(e) => setIngredientType(e.target.value)}
    >
      {ingredientTypes.map((ingredientType) => (
        <option value={ingredientType} key={ingredientType}>
          {ingredientType}
        </option>
      ))}
    </select>
  );
};

export default IngredientTypeSelect;
