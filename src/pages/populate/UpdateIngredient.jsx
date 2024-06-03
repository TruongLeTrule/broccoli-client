import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllNutrients } from "../../apis/nutrient";

import {
  getAllIngredients,
  getIngredientSpecific,
  updateIngredient,
} from "../../apis/ingredient";
import { useDebounce } from "use-debounce";
import removeAccent from "../../utils/removeAccent";

import {
  FetchedList,
  NutrientForm,
  CustomAlert,
  SubmitBtn,
  InputDropDown,
} from "../../components/populate";

const UpdateIngredient = () => {
  const [ingredient, setIngredient] = useState({
    ingredientName: "",
  });
  const [fetchedNutrient, setFetchedNutrient] = useState([]);
  const [nutrientForm, setNutrientForm] = useState();
  const [alert, setAlert] = useState({
    msg: "",
    isShow: "",
  });
  const [fetchedIngredientList, setFetchedIngredientList] = useState([]);
  const [ingredientFilteredList, setIngredientFilteredList] = useState([]);
  const [debounceInputIngredient] = useDebounce(ingredient.ingredientName, 500);
  const [listVisible, setListVisible] = useState(false);

  const fetchNutrient = async () => {
    const { nutrients } = await getAllNutrients();
    const filteredNutrients = nutrients.filter(
      ({ nutrientType }) => nutrientType === "macro"
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
      ingredientName: "",
      ingredientType: "meat",
    });
  };

  const handleIngredientClick = async ({
    ingredientName,
    ingredientId,
    ingredientType,
  }) => {
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
    setAlert({ isShow: true, msg });
    setTimeout(() => {
      setAlert({ isShow: false });
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
        or{" "}
        <Link className="underline text-primaryColor" to="../">
          create new ingredient
        </Link>
      </p>
      {/* Form  */}
      <form className="block mt-8">
        {/* Ingredient input */}
        {ingredient && (
          <div className="relative">
            <InputDropDown
              onFocus={() => setListVisible(true)}
              setCurrentValue={setIngredient}
              currentValue={ingredient}
              textInputName="ingredientName"
              selectName="ingredientType"
              label="Ingredient"
            />
            {/* Fetched ingredient list */}
            {listVisible && (
              <FetchedList
                type="ingredient"
                setListVisible={setListVisible}
                renderList={ingredientFilteredList}
                onItemClick={handleIngredientClick}
                createIngredientDir="../"
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
        {alert.isShow && <CustomAlert msg={alert.msg} type="success" />}
        <SubmitBtn onClick={handleUpdateBtnClick} title="Update" />
      </form>
    </main>
  );
};
export default UpdateIngredient;
