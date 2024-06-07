export const ingredientTypes = [
  'meat',
  'vegetable',
  'milk',
  'nut',
  'fruit',
  'oil',
  'seafood',
  'spice',
  'candy',
  'beverage',
  'bread',
  'other',
];

export const ingredientUnits = ['g', 'tbsp', 'tsp', 'cup', 'dash'];

export const mealTypes = ['food', 'fruit', 'drink', 'snack'];

export const loggedInNavItems = [
  {
    name: 'Món ăn',
    path: '/meal',
  },
  {
    name: 'Kế hoạch',
    path: '/planner',
  },
  {
    name: 'Hồ sơ',
    path: '/user',
  },
];

export const defaultNavItems = [
  {
    name: 'Trang chủ',
    path: '/',
  },
  {
    name: 'Món ăn',
    path: '/meal',
  },
  {
    name: 'Kế hoạch',
    path: '/planner',
  },
  {
    name: 'Đăng nhập',
    path: '/login',
  },
];

import img1 from '../assets/mealList/1-pho-bo-dac-biet.jpg';
import img2 from '../assets/mealList/2-banh-mi-thit-nuong.jpg';
import img3 from '../assets/mealList/3-bun-cha-ha-noi.jpg';
import img4 from '../assets/mealList/4-goi-con.jpg';
export const mealImgs = [img1, img2, img3, img4];

export const mealTimes = [
  {
    key: 'breakfast',
    renderName: 'Bữa sáng',
  },
  {
    key: 'lunch',
    renderName: 'Bữa trưa',
  },
  {
    key: 'dinner',
    renderName: 'Bữa tối',
  },
  {
    key: 'snack',
    renderName: 'Bữa phụ',
  },
];
