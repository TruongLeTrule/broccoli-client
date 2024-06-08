import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const baseUrl = "http://localhost:3000/api/v1/meals";

const FoodRecipe = () => {
  const MealListImg = [
    { imgId: 1, img: "src/assets/mealList/1-pho-bo-dac-biet.jpg" },
    { imgId: 2, img: "src/assets/mealList/2-banh-mi-thit-nuong.jpg" },
    { imgId: 3, img: "src/assets/mealList/3-bun-cha-ha-noi.jpg" },
    { imgId: 4, img: "src/assets/mealList/4-goi-con.jpg" },
    { imgId: 5, img: "src/assets/mealList/5-com-tam.jpg" },
    { imgId: 6, img: "src/assets/mealList/6-banh-xeo.jpg" },
    { imgId: 7, img: "src/assets/mealList/7-bun-bo-hue.jpg" },
    { imgId: 8, img: "src/assets/mealList/8-ca-kho-to.jpg" },
    { imgId: 9, img: "src/assets/mealList/9-bo-nuong-la-lot.jpg" },
    { imgId: 10, img: "src/assets/mealList/10-bun-rieu.jpg" },
    { imgId: 11, img: "src/assets/mealList/11-banh-cuon.jpg" },
    { imgId: 12, img: "src/assets/mealList/12-ga-nuong-mam.png" },
    { imgId: 13, img: "src/assets/mealList/13-banh-canh-ca-loc.jpg" },
    { imgId: 14, img: "src/assets/mealList/14-nem-nuong.jpg" },
    { imgId: 15, img: "src/assets/mealList/15-mi-quang.jpg" },
    { imgId: 16, img: "src/assets/mealList/16-hu-tieu-go.jpeg" },
    { imgId: 17, img: "src/assets/mealList/17-bo-kho.jpg" },
    { imgId: 18, img: "src/assets/mealList/18-banh-beo.jpg" },
    { imgId: 19, img: "src/assets/mealList/19-cha-gio.png" },
    { imgId: 20, img: "src/assets/mealList/20-banh-trang-tron.jpg" },
    { imgId: 21, img: "src/assets/mealList/21-chao-long.jpg" },
    { imgId: 22, img: "src/assets/mealList/22-banh-da-cua.jpg" },
    { imgId: 23, img: "src/assets/mealList/23-canh-chua.jpg" },
    { imgId: 24, img: "src/assets/mealList/24-banh-it.jpg" },
    { imgId: 25, img: "src/assets/mealList/25-bun-thit-nuong.png" },
    { imgId: 26, img: "src/assets/mealList/26-cha-ca-la-vong.jpg" },
    { imgId: 27, img: "src/assets/mealList/27-bun-mam.jpg" },
    { imgId: 28, img: "src/assets/mealList/28-banh-bot-loc.jpg" },
    { imgId: 29, img: "src/assets/mealList/29-che-buoi.jpg" },
    { imgId: 30, img: "src/assets/mealList/30-nom-bo-kho.jpeg" },
    { imgId: 31, img: "src/assets/mealList/31-bun-bo-nam-bo.jpg" },
    { imgId: 32, img: "src/assets/mealList/32-bun-oc.jpg" },
    { imgId: 33, img: "src/assets/mealList/33-banh-flan.jpg" },
    { imgId: 34, img: "src/assets/mealList/34-nuoc-mia.jpg" },
    { imgId: 35, img: "src/assets/mealList/35-banh-tom-tay-ho.jpg" },
    { imgId: 36, img: "src/assets/mealList/36-bun-dau-mam-tom.jpg" },
    { imgId: 37, img: "src/assets/mealList/37-banh-trang-cuon.jpg" },
    { imgId: 38, img: "src/assets/mealList/38-bun-cha-ca.jpg" },
    { imgId: 39, img: "src/assets/mealList/39-banh-trang-nuong.jpg" },
    { imgId: 40, img: "src/assets/mealList/40-mi-xao.jpg" },
    { imgId: 41, img: "src/assets/mealList/41-goi-ga.jpeg" },
    { imgId: 42, img: "src/assets/mealList/42-chao-ga.jpg" },
    { imgId: 43, img: "src/assets/mealList/43-com-chay.jpg" },
    { imgId: 44, img: "src/assets/mealList/44-banh-ran.jpg" },
    { imgId: 45, img: "src/assets/mealList/45-bun-mam-chung.jpg" },
    { imgId: 46, img: "src/assets/mealList/46-goi-ngo-sen.jpg" },
    { imgId: 47, img: "src/assets/mealList/47-banh-duc.jpg" },
    { imgId: 48, img: "src/assets/mealList/48-banh-canh-cua.jpg" },
  ];

  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const location = useLocation();

  useEffect(() => {
    const pathSegments = location.pathname.split("/");
    const id = pathSegments[pathSegments.length - 1];

    // console.log("mealId from URL:", id);

    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseUrl}/${id}`);
        setMeal(response.data.meal);
        console.log(response.data.meal);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [location.pathname]);

  const getImageById = (id) => {
    const mealImage = MealListImg.find((meal) => meal.imgId === id);
    return mealImage ? mealImage.img : null;
  };

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
          {meal.imgId ? (
            <img src={getImageById(meal.imgId)} alt={meal.mealName} />
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
              {meal.ingredients.map((ingredient, index) => (
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
