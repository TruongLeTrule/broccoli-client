import {
  ingredientTypes,
  ingredientUnits,
  mealTypes,
} from '../../utils/renderArr';

const InputDropDown = ({
  label,
  onFocus,
  selectName,
  textInputName,
  currentValue,
  setCurrentValue,
}) => {
  const resolveArray = () => {
    switch (selectName) {
      case 'ingredientType':
        return ingredientTypes;
      case 'ingredientUnit':
        return ingredientUnits;
      case 'mealType':
        return mealTypes;
    }
  };

  return (
    <div>
      {label && <label className="font-semibold">{label}</label>}
      <div className="flex w-full border-2 p-2 rounded-md justify-center">
        <input
          onFocus={onFocus}
          value={currentValue[textInputName]}
          onChange={(e) =>
            setCurrentValue({
              ...currentValue,
              [textInputName]: e.target.value,
            })
          }
          className="w-full focus:outline-none"
          placeholder={label}
        />
        <select
          name={selectName}
          id={selectName}
          className="focus:outline-none"
          value={currentValue[selectName]}
          onChange={(e) =>
            setCurrentValue({
              ...currentValue,
              [selectName]: e.target.value,
            })
          }
        >
          {resolveArray().map((value) => (
            <option value={value} key={value}>
              {value}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
export default InputDropDown;
