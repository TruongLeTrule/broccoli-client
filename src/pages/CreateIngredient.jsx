import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getAllNutrients } from '../api/nutrient';
import { createIngredient } from '../api/ingredient';
import Alert from '@mui/material/Alert';

const CreateIngredient = () => {
  const [ingredient, setIngredient] = useState();
  const [fetchedNutrient, setFetchedNutrient] = useState([]);
  const [nutrientForm, setNutrientForm] = useState();
  const [successAlertMsg, setSuccessAlertMsg] = useState('');
  const [successAlertShow, setSuccessAlertShow] = useState(false);

  const fetchNutrient = async () => {
    const { nutrients } = await getAllNutrients();
    const filteredNutrients = nutrients.filter(
      ({ nutrientType }) => nutrientType === 'macro'
    );
    initNutrientForm(filteredNutrients);
    setFetchedNutrient(filteredNutrients);
  };

  const handleInputChange = (e) => {
    setNutrientForm({
      ...nutrientForm,
      [e.target.name]: e.target.value,
    });
  };

  const initNutrientForm = (nutrients) => {
    const initNutrientForm = {};
    nutrients.forEach(({ nutrientId }) => (initNutrientForm[nutrientId] = 0));
    setNutrientForm(initNutrientForm);
    setIngredient({
      ingredientName: '',
      ingredientType: 'meat',
    });
  };

  const handleCreateBtnClick = async () => {
    const { msg } = await createIngredient(ingredient, nutrientForm);

    initNutrientForm(fetchedNutrient);
    setSuccessAlertMsg(msg);
    setSuccessAlertShow(true);
    setTimeout(() => {
      setSuccessAlertShow(false);
    }, 3000);
  };

  useEffect(() => {
    fetchNutrient();
  }, []);

  return (
    <main className="h-screen flex items-center justify-center flex-col">
      <h1 className="text-2xl font-bold">Create new ingredient</h1>
      <p className="text-xl font-bold">
        or{' '}
        <Link className="underline text-emerald-400" to="update">
          edit ingredient
        </Link>
      </p>

      {/* Form  */}
      <form className="block mt-8">
        {/* Ingredient name */}
        {ingredient && (
          <div>
            <label className="font-semibold">Ingredient name</label>
            <div className="flex w-full border-2 p-2 rounded-md mt-2 ">
              <input
                value={ingredient.ingredientName}
                onChange={(e) =>
                  setIngredient({
                    ...ingredient,
                    ingredientName: e.target.value,
                  })
                }
                className="w-full focus:outline-none"
                placeholder="Ingredient name"
              />
              <select
                name="ingredientType"
                id="ingredientType"
                className="focus:outline-none"
                value={ingredient.ingredientType}
                onChange={(e) =>
                  setIngredient({
                    ...ingredient,
                    ingredientType: e.target.value,
                  })
                }
              >
                <option value="meat">meat</option>
                <option value="vegetable">vegetable</option>
                <option value="milk">milk</option>
                <option value="nut">nut</option>
                <option value="fruit">fruit</option>
                <option value="oil">oil</option>
                <option value="seafood">seafood</option>
                <option value="spice">spice</option>
                <option value="candy">candy</option>
                <option value="beverage">beverage</option>
                <option value="bread">bread</option>
                <option value="other">other</option>
              </select>
            </div>
          </div>
        )}
        {/* Nutrients input */}
        {nutrientForm && (
          <div className="grid-cols-2 grid gap-y-4 gap-x-10 my-4">
            {fetchedNutrient.map(
              ({ nutrientId, nutrientName, nutrientUnit }) => (
                <div key={nutrientId}>
                  <label className="font-semibold capitalize">
                    {nutrientName}
                  </label>
                  <div className="block w-32 border-2 p-2 rounded-md mt-2 flex">
                    <input
                      name={nutrientId}
                      className="focus:outline-none w-full"
                      value={nutrientForm[nutrientId]}
                      onChange={handleInputChange}
                      placeholder={nutrientName}
                    />
                    {nutrientUnit}
                  </div>
                </div>
              )
            )}
          </div>
        )}
        {successAlertShow && (
          <Alert severity="success">{successAlertMsg}</Alert>
        )}
        <button
          type="button"
          className="block mt-6 mx-auto cursor-pointer w-24 h-12 bg-emerald-400 text-white rounded-md"
          onClick={handleCreateBtnClick}
        >
          Create
        </button>
      </form>
    </main>
  );
};
export default CreateIngredient;
