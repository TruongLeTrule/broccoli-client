import { useEffect, useRef, useState } from 'react';
import { FaPlus, FaRegTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { getAllIngredients } from '../api/ingredient';
import { createMeal } from '../api/meal';
import { useDebounce } from 'use-debounce';
import Alert from '@mui/material/Alert';
import removeAccent from '../utils/removeAccent';

const PopulateMeal = () => {
  const ingredientListRef = useRef();

  const [mealName, setMealName] = useState('');
  const [listVisible, setListVisible] = useState(false);
  const [fetchedIngredientList, setFetchedIngredientList] = useState([]);
  const [ingredientFilteredList, setIngredientFilteredList] = useState([]);
  const [selectedIngredientList, setSelectedIngredientList] = useState([]);
  const [successAlertShow, setSuccessAlertShow] = useState(false);
  const [successAlertMsg, setSuccessAlertMsg] = useState('');
  const [currentIngredient, setCurrentIngredient] = useState({
    id: 0,
    ingredientName: '',
    ingredientValue: 0,
    ingredientUnit: 'g',
  });
  const [debounceInputIngredient] = useDebounce(
    currentIngredient.ingredientName,
    500
  );

  const handleAddBtnClick = () => {
    const { ingredientName, ingredientValue } = currentIngredient;
    if (!ingredientName || !ingredientValue) return;
    setSelectedIngredientList([...selectedIngredientList, currentIngredient]);
    setCurrentIngredient({
      id: 0,
      ingredientName: '',
      ingredientValue: 0,
      ingredientUnit: 'g',
    });
  };

  const fetchIngredients = async () => {
    const ingredients = await getAllIngredients();
    setFetchedIngredientList(ingredients);
    setIngredientFilteredList(ingredients);
  };

  const handleOutsideClick = (e) => {
    if (
      ingredientListRef.current &&
      !ingredientListRef.current.contains(e.target)
    ) {
      setListVisible(false);
    }
  };

  const handleInputChange = (e) => {
    setCurrentIngredient({
      ...currentIngredient,
      [e.target.name]: e.target.value,
    });
  };

  const handleIngredientClick = (ingredientName, id) => {
    setCurrentIngredient({
      ...currentIngredient,
      ingredientName,
      id,
    });
    setListVisible(false);
  };

  const removeFromList = (removeIngredient) => {
    const newList = selectedIngredientList.filter(
      ({ ingredientName }) => ingredientName != removeIngredient
    );
    setSelectedIngredientList(newList);
  };

  const handleCreateBtnClick = async () => {
    const response = await createMeal(mealName, selectedIngredientList);
    setMealName('');
    setSelectedIngredientList([]);
    setSuccessAlertMsg(response.data.msg);
    setSuccessAlertShow(true);
    setTimeout(() => {
      setSuccessAlertShow(false);
    }, 3000);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  });

  useEffect(() => {
    // Fetch all if ingredients list length = 0
    if (fetchedIngredientList.length === 0) fetchIngredients();

    const filteredList = fetchedIngredientList.filter(({ ingredientName }) =>
      removeAccent(ingredientName)
        .toLowerCase()
        .includes(removeAccent(debounceInputIngredient).toLowerCase())
    );
    setIngredientFilteredList(filteredList);
  }, [debounceInputIngredient]);

  return (
    <main className="h-screen flex items-center justify-center flex-col">
      <h1 className="text-2xl font-bold">Create new meal</h1>
      <form className="block mt-8">
        {/* Meal name */}
        <div>
          <label className="font-semibold">Meal name</label>
          <input
            value={mealName}
            onChange={(e) => setMealName(e.target.value)}
            className="block w-full border-2 p-2 rounded-md mt-2 focus:outline-none"
            placeholder="Meal name"
          />
        </div>
        {/* Ingredient */}
        <div className="mt-4 w-80">
          <label className="block font-semibold mb-2">Ingredient</label>

          <div className="flex items-center relative pb-2">
            {/* Name */}
            <input
              onFocus={() => setListVisible(true)}
              className="block w-full border-2 p-2 rounded-md flex-1 focus:outline-none"
              name="ingredientName"
              placeholder="Ingredient name"
              value={currentIngredient.ingredientName}
              onChange={handleInputChange}
            />
            {/* Quantity & unit */}
            <div className="border-2 flex w-1/3 ml-2 p-2 rounded-md">
              <input
                value={currentIngredient.ingredientValue}
                onChange={handleInputChange}
                name="ingredientValue"
                className="w-full focus:outline-none"
              />
              <select
                name="ingredientUnit"
                id="ingredientUnit"
                className="focus:outline-none"
                value={currentIngredient.ingredientUnit}
                onChange={handleInputChange}
              >
                <option value="g">g</option>
                <option value="mg">mg</option>
                <option value="tbs">tbs</option>
              </select>
            </div>
            <button
              className="inline font-semibold p-4 cursor-pointer text-emerald-400"
              onClick={handleAddBtnClick}
              type="button"
            >
              Add
            </button>
            {/* Fetched ingredient list */}
            {listVisible && (
              <div
                ref={ingredientListRef}
                className="absolute bg-white -bottom-40 left-0 w-full h-40 rounded-md shadow-lg overflow-scroll"
              >
                {ingredientFilteredList.map(({ ingredientName, id }) => (
                  <div
                    key={ingredientName}
                    className="hover:bg-emerald-200 rounded-md w-full py-2 px-3 cursor-pointer"
                    onClick={() => handleIngredientClick(ingredientName, id)}
                  >
                    {ingredientName}
                  </div>
                ))}
                <Link
                  target="blank"
                  to="../ingredient"
                  className="hover:bg-emerald-200 rounded-md w-full p-2 flex items-center gap-2"
                >
                  <FaPlus className="text-xs" /> Add new ingredient
                </Link>
              </div>
            )}
          </div>
          {/* Selected ingredient */}
          <div className="my-4">
            {selectedIngredientList.length > 0 && (
              <button
                className="underline text-red-400"
                onClick={() => setSelectedIngredientList([])}
                type="button"
              >
                Clear all
              </button>
            )}
            <div className="max-h-52 overflow-scroll no-scrollbar">
              {selectedIngredientList.map(
                ({ ingredientName, ingredientValue, ingredientUnit }) => (
                  <div
                    key={ingredientName}
                    className="flex justify-between py-2"
                  >
                    <span>
                      {ingredientName}: {ingredientValue} {ingredientUnit}
                    </span>
                    <FaRegTrashAlt
                      className="text-red-400 text-sm cursor-pointer"
                      onClick={() => removeFromList(ingredientName)}
                    />
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </form>
      {successAlertShow && <Alert severity="success">{successAlertMsg}</Alert>}
      <button
        className="block mt-6 mx-auto cursor-pointer w-24 h-12 bg-emerald-400 text-white rounded-md"
        onClick={handleCreateBtnClick}
      >
        Create
      </button>
    </main>
  );
};
export default PopulateMeal;
