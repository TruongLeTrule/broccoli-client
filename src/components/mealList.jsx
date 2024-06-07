import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";

const baseUrl = "http://localhost:3000/api/v1/meals";

const MealListImg = [
  {
    imgId: 1,
    img: <img src="src\assets\mealList\1-pho-bo-dac-biet.jpg" alt="" />,
  },
  {
    imgId: 2,
    img: <img src="src\assets\mealList\2-banh-mi-thit-nuong.jpg" alt="" />,
  },
  {
    imgId: 3,
    img: <img src="src\assets\mealList\3-bun-cha-ha-noi.jpg" alt="" />,
  },
  {
    imgId: 4,
    img: <img src="src\assets\mealList\4-goi-con.jpg" alt="" />,
  },
  {
    imgId: 5,
    img: <img src="src\assets\mealList\5-com-tam-suon.jpg" alt="" />,
  },
  {
    imgId: 6,
    img: <img src="src\assets\mealList\6-banh-xeo.jpg" alt="" />,
  },
  {
    imgId: 7,
    img: <img src="src\assets\mealList\7-bun-bo-hue.jpg" alt="" />,
  },
  {
    imgId: 8,
    img: <img src="src\assets\mealList\\8-ca-kho-to.jpg" alt="" />,
  },
  {
    imgId: 9,
    img: <img src="src\assets\mealList\\9-bo-nuong-la-lot.jpg" alt="" />,
  },
  {
    imgId: 10,
    img: <img src="src\assets\mealList\10-bun-rieu.jpg" alt="" />,
  },
  {
    imgId: 11,
    img: <img src="src\assets\mealList\11-banh-cuon.jpg" alt="" />,
  },
  {
    imgId: 12,
    img: <img src="src\assets\mealList\12-ga-nuong-mam.png" alt="" />,
  },
  {
    imgId: 13,
    img: <img src="src\assets\mealList\13-banh-canh-ca-loc.jpg" alt="" />,
  },
  {
    imgId: 14,
    img: <img src="src\assets\mealList\14-nem-nuong.jpg" alt="" />,
  },
  {
    imgId: 15,
    img: <img src="src\assets\mealList\15-mi-quang.jpg" alt="" />,
  },
  {
    imgId: 16,
    img: <img src="src\assets\mealList\16-hu-tieu-go.jpeg" alt="" />,
  },
  {
    imgId: 17,
    img: <img src="src\assets\mealList\17-bo-kho.jpg" alt="" />,
  },
  {
    imgId: 18,
    img: <img src="src\assets\mealList\18-banh-beo.jpg" alt="" />,
  },
  {
    imgId: 19,
    img: <img src="src\assets\mealList\19-cha-gio.png" alt="" />,
  },
  {
    imgId: 20,
    img: <img src="src\assets\mealList\20-banh-trang-tron.jpg" alt="" />,
  },
  {
    imgId: 21,
    img: <img src="src\assets\mealList\21-chao-long.jpg" alt="" />,
  },
  {
    imgId: 22,
    img: <img src="src\assets\mealList\22-banh-da-cua.jpg" alt="" />,
  },
  {
    imgId: 23,
    img: <img src="src\assets\mealList\23-canh-chua.jpg" alt="" />,
  },
  {
    imgId: 24,
    img: <img src="src\assets\mealList\24-banh-it.jpg" alt="" />,
  },
  {
    imgId: 25,
    img: <img src="src\assets\mealList\25-bun-thit-nuong.png" alt="" />,
  },
  {
    imgId: 26,
    img: <img src="src\assets\mealList\26-cha-ca-la-vong.jpg" alt="" />,
  },
  {
    imgId: 27,
    img: <img src="src\assets\mealList\27-bun-mam.jpg" alt="" />,
  },
  {
    imgId: 28,
    img: <img src="src\assets\mealList\28-banh-bot-loc.jpg" alt="" />,
  },
  {
    imgId: 29,
    img: <img src="src\assets\mealList\29-che-buoi.jpg" alt="" />,
  },
  {
    imgId: 30,
    img: <img src="src\assets\mealList\30-nom-bo-kho.jpeg" alt="" />,
  },
  {
    imgId: 31,
    img: <img src="src\assets\mealList\31-bun-bo-nam-bo.jpg" alt="" />,
  },
  {
    imgId: 32,
    img: <img src="src\assets\mealList\32-bun-oc.jpg" alt="" />,
  },
  {
    imgId: 33,
    img: <img src="src\assets\mealList\33-banh-flan.jpg" alt="" />,
  },
  {
    imgId: 34,
    img: <img src="src\assets\mealList\34-nuoc-mia.jpg" alt="" />,
  },
  {
    imgId: 35,
    img: <img src="src\assets\mealList\35-banh-tom-tay-ho.jpg" alt="" />,
  },
  {
    imgId: 36,
    img: <img src="src\assets\mealList\36-bun-dau-mam-tom.jpg" alt="" />,
  },
  {
    imgId: 37,
    img: <img src="src\assets\mealList\37-banh-trang-cuon.jpg" alt="" />,
  },
  {
    imgId: 38,
    img: <img src="src\assets\mealList\38-bun-cha-ca.jpg" alt="" />,
  },
  {
    imgId: 39,
    img: <img src="src\assets\mealList\39-banh-trang-nuong.jpg" alt="" />,
  },
  {
    imgId: 40,
    img: <img src="src\assets\mealList\40-mi-xao.jpg" alt="" />,
  },
  {
    imgId: 41,
    img: <img src="src\assets\mealList\41-goi-ga.jpeg" alt="" />,
  },
  {
    imgId: 42,
    img: <img src="src\assets\mealList\42-chao-ga.jpg" alt="" />,
  },
  {
    imgId: 43,
    img: <img src="src\assets\mealList\43-com-chay.jpg" alt="" />,
  },
  {
    imgId: 44,
    img: <img src="src\assets\mealList\44-banh-ran.jpg" alt="" />,
  },
  {
    imgId: 45,
    img: <img src="src\assets\mealList\45-bun-mam-chung.jpg" alt="" />,
  },
  {
    imgId: 46,
    img: <img src="src\assets\mealList\46-goi-ngo-sen.jpg" alt="" />,
  },
  {
    imgId: 47,
    img: <img src="src\assets\mealList\47-banh-duc.jpg" alt="" />,
  },
  {
    imgId: 48,
    img: <img src="src\assets\mealList\48-banh-canh-cua.jpg" alt="" />,
  },
];

const MealList = () => {
  const [meals, setMeals] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(baseUrl);
        setMeals(response.data.meals);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  const filteredMeals = meals.filter((meal) =>
    meal.mealName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-row px-36 justify-between">
        <div>
          <p className="text-primaryColor font-semibold">Danh mục món ăn</p>
        </div>
        <div className="flex flex-row border border-primaryColor rounded-full px-3 py-2 items-center">
          <input
            type="text"
            placeholder="Tìm kiếm món ăn..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border-none focus:outline-none"
          />
          <IoIosSearch className="text-primaryColor" />
        </div>
      </div>
      <div className="grid grid-cols-5 gap-10 px-32 mx-auto max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2">
        {filteredMeals.map((meal, i) => (
          <Link
            to={`${meal.mealId}`}
            key={i}
            className="px-5 py-5 border-2 border-primaryColor text-center rounded-lg focus:cursor-pointer hover:shadow-2xl hover:scale-102 hover:text-btnColor"
          >
            {MealListImg[i % MealListImg.length].img}
            <div className="px-2 py-2 ">{meal.mealName}</div>
            <div>{meal.mealType}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MealList;
