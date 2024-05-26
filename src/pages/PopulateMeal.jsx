import { fakeIngredients } from '../utils/fakeData';
import { useEffect, useRef, useState } from 'react';
import { useDebounce } from 'use-debounce';
import { FaPlus, FaRegTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const PopulateMeal = () => {
  const [mealName, setMealName] = useState();
  const [listVisible, setListVisible] = useState(false);
  const [ingredientList, setIngredientList] = useState([]);
  const [inputIngredient, setInputIngredient] = useState();
  const [currentIngredient, setCurrentIngredient] = useState({
    ingredientName: '',
    quantity: 0,
    ingredientUnit: 'g',
  });
  const [debouncedIngredient] = useDebounce(inputIngredient, 1000);
  const [selectedIngredient, setSelectedIngredient] = useState([]);

  const handleAddBtnClick = () => {
    const { ingredientName, quantity } = currentIngredient;
    if (!ingredientName || !quantity) return;
    setSelectedIngredient([...selectedIngredient, currentIngredient]);
    setCurrentIngredient({
      ingredientName: '',
      quantity: 0,
      ingredientUnit: 'g',
    });
    setInputIngredient('');
  };

  const fetchIngredients = async () => {
    const fetchedIngredients = fakeIngredients.filter(({ ingredientName }) =>
      ingredientName.includes(debouncedIngredient)
    );
    setIngredientList(fetchedIngredients);
  };

  useEffect(() => {
    fetchIngredients();
  }, [debouncedIngredient]);

  // Handle outside click
  const ingredientListRef = useRef();
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

  // Handle pick ingredient
  const handleChange = (e) => {
    setCurrentIngredient({
      ...currentIngredient,
      [e.target.name]: e.target.value,
    });
  };

  const handleIngredientClick = (ingredientName) => {
    setInputIngredient(ingredientName);
    setCurrentIngredient({
      ...currentIngredient,
      ingredientName,
    });
    setListVisible(false);
  };

  const removeFromList = (removeIngredient) => {
    const newList = selectedIngredient.filter(
      ({ ingredientName }) => ingredientName != removeIngredient
    );
    setSelectedIngredient(newList);
  };

  const handleCreateBtnClick = () => {
    console.log({
      mealName,
      ingredients: selectedIngredient,
    });
  };

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
              onClick={() => setListVisible(true)}
              className="block w-full border-2 p-2 rounded-md flex-1 focus:outline-none"
              placeholder="Ingredient name"
              value={inputIngredient}
              onChange={(e) => setInputIngredient(e.target.value)}
            />
            {/* Quantity & unit */}
            <div className="border-2 flex w-2/5 ml-2 p-2 rounded-md">
              <input
                value={currentIngredient.quantity}
                onChange={handleChange}
                name="quantity"
                placeholder="Quantity"
                className="w-full focus:outline-none"
              />
              <select
                name="ingredientUnit"
                id="ingredientUnit"
                className="focus:outline-none"
                value={currentIngredient.ingredientUnit}
                onChange={handleChange}
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
                {ingredientList.map(({ ingredientName }) => (
                  <div
                    key={ingredientName}
                    className="hover:bg-emerald-200 rounded-md w-full py-2 px-3 cursor-pointer"
                    onClick={() => handleIngredientClick(ingredientName)}
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
            {selectedIngredient.length > 0 && (
              <button
                className="underline text-red-400"
                onClick={() => setSelectedIngredient([])}
                type="button"
              >
                Clear all
              </button>
            )}
            <div className="max-h-52 overflow-scroll no-scrollbar">
              {selectedIngredient.map(
                ({ ingredientName, quantity, ingredientUnit }) => (
                  <div
                    key={ingredientName}
                    className="flex justify-between py-2"
                  >
                    <span>
                      {ingredientName}: {quantity} {ingredientUnit}
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
