import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllIngredients } from '../../apis/ingredient';
import { updateMeal, getMealSpecific, getAllMeals } from '../../apis/meal';
import { useDebounce } from 'use-debounce';
import removeAccent from '../../utils/removeAccent';
import {
  InputDropDown,
  CustomAlert,
  FetchedList,
  SubmitBtn,
  SelectedIngredients,
} from '../../components/populate';

const UpdateMeal = () => {
  const [meal, setMeal] = useState({
    mealName: '',
    mealType: 'food',
  });
  const [ingredientListVisible, setIngredientListVisible] = useState(false);
  const [mealListVisible, setMealListVisible] = useState(false);
  const [fetchedIngredientList, setFetchedIngredientList] = useState([]);
  const [fetchedMealList, setFetchedMealList] = useState([]);
  const [mealFilteredList, setMealFilteredList] = useState([]);
  const [ingredientFilteredList, setIngredientFilteredList] = useState([]);
  const [selectedIngredientList, setSelectedIngredientList] = useState([]);
  const [successAlertShow, setSuccessAlertShow] = useState(false);
  const [successAlertMsg, setSuccessAlertMsg] = useState('');
  const [currentIngredient, setCurrentIngredient] = useState({
    ingredientId: 0,
    ingredientName: '',
    ingredientValue: 0,
    ingredientUnit: 'g',
  });
  const [debounceInputIngredient] = useDebounce(
    currentIngredient.ingredientName,
    500
  );
  const [debounceInputMeal] = useDebounce(meal.mealName, 500);

  const handleAddBtnClick = () => {
    const { ingredientId, ingredientValue } = currentIngredient;
    if (!ingredientId || !ingredientValue) return;
    setSelectedIngredientList([...selectedIngredientList, currentIngredient]);
    setCurrentIngredient({
      ingredientId: 0,
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

  const handleInputChange = (e) => {
    setCurrentIngredient({
      ...currentIngredient,
      [e.target.name]: e.target.value,
    });
  };

  const handleIngredientClick = ({ ingredientName, ingredientId }) => {
    setCurrentIngredient({
      ...currentIngredient,
      ingredientName,
      ingredientId,
    });
    setIngredientListVisible(false);
  };

  const removeFromList = (removeIngredient) => {
    const newList = selectedIngredientList.filter(
      ({ ingredientName }) => ingredientName != removeIngredient
    );
    setSelectedIngredientList(newList);
  };

  const handleUpdateBtnClick = async () => {
    const response = await updateMeal(meal, selectedIngredientList);
    setMeal({
      mealName: '',
      mealType: 'food',
    });
    setSelectedIngredientList([]);
    setSuccessAlertMsg(response.data.msg);
    setSuccessAlertShow(true);
    setTimeout(() => {
      setSuccessAlertShow(false);
    }, 3000);
  };

  const fetchMeals = async () => {
    const meals = await getAllMeals();
    setFetchedMealList(meals);
    setMealFilteredList(meals);
  };

  const handleMealClick = async ({ mealName, mealId, mealType }) => {
    setMeal({ mealName, mealId, mealType });
    const { meal } = await getMealSpecific(mealId);
    setSelectedIngredientList(meal.ingredients);
    setMealListVisible(false);
  };

  useEffect(() => {
    const filteredList = fetchedIngredientList.filter(({ ingredientName }) =>
      removeAccent(ingredientName)
        .toLowerCase()
        .includes(removeAccent(debounceInputIngredient).toLowerCase())
    );
    setIngredientFilteredList(filteredList);
  }, [debounceInputIngredient]);

  useEffect(() => {
    const filteredList = fetchedMealList.filter(({ mealName }) =>
      removeAccent(mealName)
        .toLowerCase()
        .includes(removeAccent(debounceInputMeal).toLowerCase())
    );
    setMealFilteredList(filteredList);
  }, [debounceInputMeal]);

  useEffect(() => {
    fetchIngredients();
    fetchMeals();
  }, []);

  return (
    <main className="h-screen flex items-center justify-center flex-col">
      <h1 className="text-2xl font-bold">Edit meal</h1>
      <p className="text-xl font-bold">
        or{' '}
        <Link className="underline text-primaryColor" to="../">
          create new meal
        </Link>
      </p>

      {/* Form  */}
      <form className="block mt-8">
        {/* Meal name */}
        <div className="relative">
          <InputDropDown
            onFocus={() => setMealListVisible(true)}
            label="Meal name"
            setCurrentValue={setMeal}
            currentValue={meal}
            textInputName="mealName"
            selectName="mealType"
          />
          {/* Fetched meals list */}
          {mealListVisible && (
            <FetchedList
              type="meal"
              setListVisible={setMealListVisible}
              renderList={mealFilteredList}
              onItemClick={handleMealClick}
              createItemDir="../"
            />
          )}
        </div>
        {/* Ingredient */}
        <div className="mt-4 w-80">
          <label className="block font-semibold mb-2">Ingredient</label>
          <div className="flex gap-x-2 items-center relative pb-2">
            {/* Name */}
            <input
              onFocus={() => setIngredientListVisible(true)}
              className="block w-full border-2 p-2 rounded-md focus:outline-none"
              name="ingredientName"
              placeholder="Ingredient name"
              value={currentIngredient.ingredientName}
              onChange={handleInputChange}
            />
            {/* Quantity & unit */}
            <InputDropDown
              setCurrentValue={setCurrentIngredient}
              currentValue={currentIngredient}
              textInputName="ingredientValue"
              selectName="ingredientUnit"
            />
            <button
              className="inline font-semibold p-4 cursor-pointer text-primaryColor"
              onClick={handleAddBtnClick}
              type="button"
            >
              Add
            </button>
            {/* Fetched ingredient list */}
            {ingredientListVisible && (
              <FetchedList
                type="ingredient"
                setListVisible={setIngredientListVisible}
                renderList={ingredientFilteredList}
                onItemClick={handleIngredientClick}
                createItemDir="../../ingredient"
                openInOtherTab
              />
            )}
          </div>
          {/* Selected ingredient */}
          <div className="my-4">
            {selectedIngredientList.length > 0 && (
              <button
                className="underline text-highlightColor"
                onClick={() => setSelectedIngredientList([])}
                type="button"
              >
                Clear all
              </button>
            )}
            <SelectedIngredients
              removeIngredient={removeFromList}
              ingredients={selectedIngredientList}
            />
          </div>
        </div>
      </form>
      {successAlertShow && <CustomAlert msg={successAlertMsg} type="success" />}
      <SubmitBtn onClick={handleUpdateBtnClick} title="Update" />
    </main>
  );
};
export default UpdateMeal;
