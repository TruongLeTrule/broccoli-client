import { Link } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { getAllNutrients } from '../api/nutrient';
import {
  getAllIngredients,
  getIngredientSpecific,
  updateIngredient,
} from '../api/ingredient';
import Alert from '@mui/material/Alert';
import { FaPlus } from 'react-icons/fa';
import { useDebounce } from 'use-debounce';
import removeAccent from '../utils/removeAccent';

const UpdateIngredient = () => {
  const ingredientListRef = useRef();

  const [ingredient, setIngredient] = useState({
    ingredientName: '',
  });
  const [fetchedNutrient, setFetchedNutrient] = useState([]);
  const [nutrientForm, setNutrientForm] = useState();
  const [successAlertMsg, setSuccessAlertMsg] = useState('');
  const [successAlertShow, setSuccessAlertShow] = useState(false);

  const [fetchedIngredientList, setFetchedIngredientList] = useState([]);
  const [ingredientFilteredList, setIngredientFilteredList] = useState([]);
  const [debounceInputIngredient] = useDebounce(ingredient.ingredientName, 500);
  const [listVisible, setListVisible] = useState(false);

  const fetchNutrient = async () => {
    const { nutrients } = await getAllNutrients();
    const filteredNutrients = nutrients.filter(
      ({ nutrientType }) => nutrientType === 'macro'
    );
    initNutrientForm(filteredNutrients);
    setFetchedNutrient(filteredNutrients);
  };

  const fetchIngredients = async () => {
    const ingredients = await getAllIngredients();
    setFetchedIngredientList(ingredients);
    setIngredientFilteredList(ingredients);
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

  const handleIngredientClick = async (
    ingredientName,
    ingredientId,
    ingredientType
  ) => {
    const nutrients = {};
    const { ingredient } = await getIngredientSpecific(ingredientId);
    ingredient.nutrients.forEach(
      ({ nutrientId, nutrientValueOn100g }) =>
        (nutrients[nutrientId] = nutrientValueOn100g)
    );

    setNutrientForm({
      ...nutrientForm,
      ...nutrients,
    });
    setIngredient({
      ingredientName,
      ingredientId,
      ingredientType,
    });
    setListVisible(false);
  };

  const handleUpdateBtnClick = async () => {
    const { msg } = await updateIngredient(
      ingredient.ingredientId,
      ingredient,
      nutrientForm
    );

    initNutrientForm(fetchedNutrient);
    setSuccessAlertMsg(msg);
    setSuccessAlertShow(true);
    setTimeout(() => {
      setSuccessAlertShow(false);
    }, 3000);
  };

  const handleOutsideClick = (e) => {
    if (
      ingredientListRef.current &&
      !ingredientListRef.current.contains(e.target)
    ) {
      setListVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  });

  useEffect(() => {
    const filteredList = fetchedIngredientList.filter(({ ingredientName }) =>
      removeAccent(ingredientName)
        .toLowerCase()
        .includes(removeAccent(debounceInputIngredient).toLowerCase())
    );
    setIngredientFilteredList(filteredList);
  }, [debounceInputIngredient]);

  useEffect(() => {
    fetchNutrient();
    fetchIngredients();
  }, []);

  return (
    <main className="h-screen flex items-center justify-center flex-col">
      <h1 className="text-2xl font-bold">Edit ingredient</h1>
      <p className="text-xl font-bold">
        or{' '}
        <Link className="underline text-emerald-400" to="../">
          create new ingredient
        </Link>
      </p>

      {/* Form  */}
      <form className="block mt-8">
        {/* Ingredient name */}
        {ingredient && (
          <div className="relative">
            <label className="font-semibold">Ingredient name</label>
            <div className="flex w-full border-2 p-2 rounded-md mt-2 ">
              <input
                onFocus={() => setListVisible(true)}
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
            {/* Fetched ingredient list */}
            {listVisible && (
              <div
                ref={ingredientListRef}
                className="absolute bg-white -bottom-40 left-0 w-full h-40 rounded-md shadow-lg overflow-scroll"
              >
                {ingredientFilteredList.map(
                  ({ ingredientName, ingredientId, ingredientType }) => (
                    <div
                      key={ingredientId}
                      className="hover:bg-emerald-200 rounded-md w-full py-2 px-3 cursor-pointer"
                      onClick={() =>
                        handleIngredientClick(
                          ingredientName,
                          ingredientId,
                          ingredientType
                        )
                      }
                    >
                      {ingredientName}
                    </div>
                  )
                )}
                <Link
                  target="blank"
                  to="../"
                  className="hover:bg-emerald-200 rounded-md w-full p-2 flex items-center gap-2"
                >
                  <FaPlus className="text-xs" /> Add new ingredient
                </Link>
              </div>
            )}
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
          onClick={handleUpdateBtnClick}
        >
          Update
        </button>
      </form>
    </main>
  );
};
export default UpdateIngredient;
