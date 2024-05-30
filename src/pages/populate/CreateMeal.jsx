import { useEffect, useState } from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { getAllIngredients } from '../../api/ingredient';
import { createMeal } from '../../api/meal';
import { useDebounce } from 'use-debounce';
import removeAccent from '../../utils/removeAccent';
import {
  InputDropDown,
  CustomAlert,
  IngredientList,
  SubmitBtn,
} from '../../components/populate';

const CreateMeal = () => {
  const [meal, setMeal] = useState({
    mealName: '',
    mealType: 'food',
  });
  const [listVisible, setListVisible] = useState(false);
  const [fetchedIngredientList, setFetchedIngredientList] = useState([]);
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

  const handleIngredientClick = (ingredientName, ingredientId) => {
    setCurrentIngredient({
      ...currentIngredient,
      ingredientName,
      ingredientId,
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
    const filteredList = fetchedIngredientList.filter(({ ingredientName }) =>
      removeAccent(ingredientName)
        .toLowerCase()
        .includes(removeAccent(debounceInputIngredient).toLowerCase())
    );
    setIngredientFilteredList(filteredList);
  }, [debounceInputIngredient]);

  useEffect(() => {
    fetchIngredients();
  }, []);

  return (
    <main className="h-screen flex items-center justify-center flex-col">
      <h1 className="text-2xl font-bold">Create new meal</h1>
      <p className="text-xl font-bold">
        or{' '}
        <Link className="underline text-emerald-400" to="update">
          edit meal
        </Link>
      </p>

      {/* Form  */}
      <form className="block mt-8">
        {/* Meal name */}
        <InputDropDown
          label="Meal name"
          setCurrentValue={setMeal}
          currentValue={meal}
          textInputName="mealName"
          selectName="mealType"
        />
        {/* Ingredient */}
        <div className="mt-4 w-80">
          <label className="block font-semibold mb-2">Ingredient</label>
          <div className="flex items-center relative pb-2">
            {/* Name */}
            <input
              onFocus={() => setListVisible(true)}
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
              className="inline font-semibold p-4 cursor-pointer text-emerald-400"
              onClick={handleAddBtnClick}
              type="button"
            >
              Add
            </button>
            {/* Fetched ingredient list */}
            {listVisible && (
              <IngredientList
                setListVisible={setListVisible}
                renderList={ingredientFilteredList}
                onIngredientClick={handleIngredientClick}
                createIngredientDir="../ingredient"
                openInOtherTab
              />
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
      {successAlertShow && <CustomAlert msg={successAlertMsg} type="success" />}
      <SubmitBtn onClick={handleCreateBtnClick} title="Create" />
    </main>
  );
};
export default CreateMeal;
