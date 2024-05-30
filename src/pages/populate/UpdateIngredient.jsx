import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getAllNutrients } from '../../api/nutrient';
import {
  getAllIngredients,
  getIngredientSpecific,
  updateIngredient,
} from '../../api/ingredient';
import { useDebounce } from 'use-debounce';
import removeAccent from '../../utils/removeAccent';
import {
  IngredientInput,
  IngredientList,
  NutrientForm,
  CustomAlert,
  SubmitBtn,
} from '../../components/populate';

const UpdateIngredient = () => {
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
    setFetchedNutrient(filteredNutrients);
    initNutrientForm(filteredNutrients);
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
        {/* Ingredient input */}
        {ingredient && (
          <div className="relative">
            <IngredientInput
              onFocus={() => setListVisible(true)}
              setIngredient={setIngredient}
              ingredient={ingredient}
              label="Ingredient"
            />
            {/* Fetched ingredient list */}
            {listVisible && (
              <IngredientList
                setListVisible={setListVisible}
                renderList={ingredientFilteredList}
                onIngredientClick={handleIngredientClick}
              />
            )}
          </div>
        )}
        {/* Nutrients input */}
        {nutrientForm && (
          <NutrientForm
            nutrients={fetchedNutrient}
            onInputChange={handleInputChange}
            nutrientForm={nutrientForm}
          />
        )}
        {successAlertShow && (
          <CustomAlert msg={successAlertMsg} type="success" />
        )}
        <SubmitBtn onClick={handleUpdateBtnClick} title="Update" />
      </form>
    </main>
  );
};
export default UpdateIngredient;
