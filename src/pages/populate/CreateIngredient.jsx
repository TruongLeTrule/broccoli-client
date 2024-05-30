import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getAllNutrients } from '../../api/nutrient';
import { createIngredient } from '../../api/ingredient';
import {
  CustomAlert,
  InputDropDown,
  NutrientForm,
  SubmitBtn,
} from '../../components/populate';

const CreateIngredient = () => {
  const [ingredient, setIngredient] = useState({
    ingredientName: '',
    ingredientType: 'meat',
  });
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
          <InputDropDown
            setCurrentValue={setIngredient}
            currentValue={ingredient}
            textInputName="ingredientName"
            selectName="ingredientType"
            label="Ingredient"
          />
        )}
        {/* Nutrients input */}
        {nutrientForm && (
          <NutrientForm
            nutrients={fetchedNutrient}
            nutrientForm={nutrientForm}
            onInputChange={handleInputChange}
          />
        )}
        {successAlertShow && (
          <CustomAlert msg={successAlertMsg} type="success" />
        )}
        <SubmitBtn title="Create" onClick={handleCreateBtnClick} />
      </form>
    </main>
  );
};
export default CreateIngredient;
