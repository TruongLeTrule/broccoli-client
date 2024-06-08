import React, { useState, useEffect } from 'react';
import img1 from '../assets/mealList/1-pho-bo-dac-biet.jpg';
import img2 from '../assets/mealList/2-banh-mi-thit-nuong.jpg';
import img3 from '../assets/mealList/3-bun-cha-ha-noi.jpg';
import img4 from '../assets/mealList/4-goi-con.jpg';
import img5 from '../assets/mealList/5-com-tam.jpg';
import img6 from '../assets/mealList/6-banh-xeo.jpg';
import img7 from '../assets/mealList/7-bun-bo-hue.jpg';
import img8 from '../assets/mealList/8-ca-kho-to.jpg';
import img9 from '../assets/mealList/10-bun-rieu.jpg';
import img10 from '../assets/mealList/1-pho-bo-dac-biet.jpg';
import img11 from '../assets/mealList/11-banh-cuon.jpg';
import img12 from '../assets/mealList/12-ga-nuong-mam.png';
import img13 from '../assets/mealList/13-banh-canh-ca-loc.jpg';
import img14 from '../assets/mealList/14-nem-nuong.jpg';
import img15 from '../assets/mealList/15-mi-quang.jpg';
import img16 from '../assets/mealList/16-hu-tieu-go.jpeg';
import img17 from '../assets/mealList/17-bo-kho.jpg';
import img18 from '../assets/mealList/18-banh-beo.jpg';
import img19 from '../assets/mealList/19-cha-gio.png';
import img20 from '../assets/mealList/20-banh-trang-tron.jpg';
import img21 from '../assets/mealList/21-chao-long.jpg';
import img22 from '../assets/mealList/22-banh-da-cua.jpg';
import img23 from '../assets/mealList/23-canh-chua.jpg';
import img24 from '../assets/mealList/24-banh-it.jpg';
import img25 from '../assets/mealList/25-bun-thit-nuong.png';
import img26 from '../assets/mealList/26-cha-ca-la-vong.jpg';
import img27 from '../assets/mealList/27-bun-mam.jpg';
import img28 from '../assets/mealList/28-banh-bot-loc.jpg';
import img29 from '../assets/mealList/29-che-buoi.jpg';
import img30 from '../assets/mealList/30-nom-bo-kho.jpeg';
import { getMealSpecific } from '../apis/meal';

const FoodRecipe = ({ mealId }) => {
  const MealListImg = [
    { imgId: 1, img: img1 },
    { imgId: 2, img: img2 },
    { imgId: 3, img: img3 },
    { imgId: 4, img: img4 },
    { imgId: 5, img: img5 },
    { imgId: 6, img: img6 },
    { imgId: 7, img: img7 },
    { imgId: 8, img: img8 },
    { imgId: 9, img: img9 },
    { imgId: 10, img: img10 },
    { imgId: 11, img: img11 },
    { imgId: 12, img: img12 },
    { imgId: 13, img: img13 },
    { imgId: 14, img: img14 },
    { imgId: 15, img: img15 },
    { imgId: 16, img: img16 },
    { imgId: 17, img: img17 },
    { imgId: 18, img: img18 },
    { imgId: 19, img: img19 },
    { imgId: 20, img: img20 },
    { imgId: 21, img: img21 },
    { imgId: 22, img: img22 },
    { imgId: 23, img: img23 },
    { imgId: 24, img: img24 },
    { imgId: 25, img: img25 },
    { imgId: 26, img: img26 },
    { imgId: 27, img: img27 },
    { imgId: 28, img: img28 },
    { imgId: 29, img: img29 },
    { imgId: 30, img: img30 },
    { imgId: 31, img: '../assets/mealList/31-bun-bo-nam-bo.jpg' },
    { imgId: 32, img: '../assets/mealList/32-bun-oc.jpg' },
    { imgId: 33, img: '../assets/mealList/33-banh-flan.jpg' },
    { imgId: 34, img: '../assets/mealList/34-nuoc-mia.jpg' },
    { imgId: 35, img: '../assets/mealList/35-banh-tom-tay-ho.jpg' },
    { imgId: 36, img: '../assets/mealList/36-bun-dau-mam-tom.jpg' },
    { imgId: 37, img: '../assets/mealList/37-banh-trang-cuon.jpg' },
    { imgId: 38, img: '../assets/mealList/38-bun-cha-ca.jpg' },
    { imgId: 39, img: '../assets/mealList/39-banh-trang-nuong.jpg' },
    { imgId: 40, img: '../assets/mealList/40-mi-xao.jpg' },
    { imgId: 41, img: '../assets/mealList/41-goi-ga.jpeg' },
    { imgId: 42, img: '../assets/mealList/42-chao-ga.jpg' },
    { imgId: 43, img: '../assets/mealList/43-com-chay.jpg' },
    { imgId: 44, img: '../assets/mealList/44-banh-ran.jpg' },
    { imgId: 45, img: '../assets/mealList/45-bun-mam-chung.jpg' },
    { imgId: 46, img: '../assets/mealList/46-goi-ngo-sen.jpg' },
    { imgId: 47, img: '../assets/mealList/47-banh-duc.jpg' },
    { imgId: 48, img: '../assets/mealList/48-banh-canh-cua.jpg' },
  ];

  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchMealIngredient = async () => {
    const { meal } = await getMealSpecific(mealId);
    setMeal(meal);
    setLoading(false);
  };

  useEffect(() => {
    fetchMealIngredient();
  }, [mealId]);

  const getImageById = (id) =>
    MealListImg.find(({ imgId }) => imgId == id)?.img;

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!meal) {
    return <div>No meal data available</div>;
  }

  return (
    <div className="mx-32">
      <div className="flex flex-row items-center gap-20">
        <div className="w-1/2">
          {getImageById(mealId) ? (
            <img
              className="rounded-lg"
              src={getImageById(mealId)}
              alt={meal.mealName}
            />
          ) : (
            <div>No image available</div>
          )}
        </div>
        <div className="px-5 py-5 flex flex-col gap-5 bg-secondaryColor rounded-3xl border border-primaryColor">
          <div className="px-5 py-5 bg-bgColor rounded-2xl border border-primaryColor w-[500px]">
            <p className="font-dancing text-2xl text-btnColor pb-2">
              Tên món ăn:
            </p>
            <p>{meal.mealName}</p>
            <p className="font-dancing text-2xl text-btnColor pt-5 pb-2">
              Nguyên liệu và gia vị:
            </p>
            <ul className="pb-5">
              {meal &&
                meal?.ingredients.map((ingredient, index) => (
                  <li key={index} className="leading-loose">
                    {ingredient.ingredientName}: {ingredient.ingredientValue}
                    {ingredient.ingredientUnit}
                  </li>
                ))}
            </ul>
          </div>
          {/* <div className="px-5 py-5 bg-bgColor rounded-2xl border border-primaryColor">
            <p className="font-dancing text-2xl text-btnColor pb-2">
              Chế biến:
            </p>
            <p>{meal.mealType}</p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default FoodRecipe;
