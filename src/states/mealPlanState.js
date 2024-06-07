import { create } from 'zustand';

const useMealPlanStore = create((set) => ({
  nutrients: null,
  chosenMeals: null,
  target: null,
  setChosenMeals: (chosenMeals) => set({ chosenMeals }),
  setNutrients: (nutrients) => set({ nutrients }),
  setTarget: (target) => set({ target }),
}));

export default useMealPlanStore;
