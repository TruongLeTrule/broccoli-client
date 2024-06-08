import dayjs from 'dayjs';
import { create } from 'zustand';

const useMealPlanStore = create((set) => ({
  nutrients: null,
  chosenMeals: null,
  target: null,
  appliedDate: dayjs(),
  setChosenMeals: (chosenMeals) => set({ chosenMeals }),
  setNutrients: (nutrients) => set({ nutrients }),
  setTarget: (target) => set({ target }),
  setAppliedDate: (appliedDate) => set({ appliedDate }),
}));

export default useMealPlanStore;
