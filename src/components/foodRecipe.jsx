import React from "react";

const FoodRecipe = () => {
  const FoodRecipe = [
    {
      id: "1",
      img: <img src="src\assets\tam.png" alt="" />,
      foodName: "Cơm tấm",
      ingredient: "Sườn cốt lết, mỡ heo, thịt bằm, trứng gà, gạo tấm",
      spices:
        "Mật ong, dầu hào, dầu ăn, sữa tươi không đường, sữa đặc, nước tương, nước mắm, đường, muối, tiêu xay",
      directions: (
        <>
          1. Đập mỏng thịt sườn rồi ướp với gia vị.
          <br />
          2. Nướng cho chín vàng và thơm.
          <br />
          3. Chiên trứng gà, làm tóp mỡ, mỡ hành với nước mắm.
        </>
      ),
    },
  ];

  return (
    <div className="mx-32">
      {FoodRecipe.map((foodRecipe, i) => (
        <div key={i} className="flex flex-row items-center gap-20">
          <div className="w-1/2">{foodRecipe.img}</div>
          <div className="px-5 py-5 flex flex-col gap-5 bg-secondaryColor rounded-3xl border border-primaryColor">
            <div className="px-5 py-5 bg-bgColor rounded-2xl border border-primaryColor">
              <p className="font-dancing text-2xl text-btnColor pb-2">
                Nguyên liệu:
              </p>
              <p className="pb-5">{foodRecipe.ingredient}</p>
              <p className="font-dancing text-2xl text-btnColor pb-2">
                Gia vị:
              </p>
              <p>{foodRecipe.spices}</p>
            </div>
            <div className="px-5 py-5 bg-bgColor rounded-2xl border border-primaryColor">
              <p className="font-dancing text-2xl text-btnColor pb-2">
                Chế biến:
              </p>
              <p>{foodRecipe.directions}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FoodRecipe;
