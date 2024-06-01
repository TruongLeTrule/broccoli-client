const NutrientForm = ({ nutrients, onInputChange, nutrientForm }) => {
  return (
    <div className="grid-cols-2 grid gap-y-4 gap-x-10 my-4">
      {nutrients.map(({ nutrientId, nutrientName, nutrientUnit }) => (
        <div key={nutrientId}>
          <label className="font-semibold capitalize">{nutrientName}</label>
          <div className="block w-32 border-2 p-2 rounded-md mt-2 flex">
            <input
              name={nutrientId}
              className="focus:outline-none w-full"
              value={nutrientForm[nutrientId]}
              onChange={onInputChange}
              placeholder={nutrientName}
            />
            {nutrientUnit}
          </div>
        </div>
      ))}
    </div>
  );
};
export default NutrientForm;
