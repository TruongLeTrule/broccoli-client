import React from "react";
import SidebarSetting from "../components/sidebarSetting";

const FoodExclusions = () => {
  const GeneralExclusions = [
    "Các loại hạt",
    "Trứng",
    "Cá",
    "Thịt đỏ",
    "Rau xanh",
    "Sữa",
    "Gia cầm",
    "Hải sản",
    "Trái cây",
  ];

  const Grains = ["Hạt điều", "Hạt óc chó", "Hạt đậu nành", "Hạt tiêu"];

  const Eggs = ["Trứng gà", "Trứng vịt", "Trứng cút", "Trứng cá"];

  const Fish = ["Cá thu", "Cá lóc", "Cá ngừ", "Cá hồi"];

  const RedMeat = ["Thịt bò", "Thịt heo"];

  const Vegetables = ["Rau cải", "Rau diếp cá", "Rau xà lách", "Rau cần"];

  const Dairy = ["Sữa bò", "Bơ sữa", "Phô mai", "Sữa chua"];

  const Poultry = ["Thịt gà", "Thịt vịt"];

  const Seafood = ["Cua", "Tôm", "Ốc", "Nghêu"];

  const Fruit = ["Táo", "Cam"];

  return (
    <div className="mt-40 flex flex-row px-32 gap-20">
      <div className="w-1/2">
        <SidebarSetting />
      </div>
      <div className="flex flex-col gap-10">
        <p className="text-justify leading-loose">
          Thêm &quot;thực phẩm loại trừ&quot; để lọc ra các công thức nấu ăn từ
          các đề xuất của trình tạo. Bất kỳ công thức nấu ăn nào phù hợp với
          tiêu đề hoặc thành phần của chúng sẽ không được đưa vào kế hoạch của
          bạn.
        </p>
        <div className="px-2 py-2 flex flex-row border border-primaryColor rounded-lg">
          <input
            type="search"
            name=""
            id=""
            placeholder="Nhập tên thực phẩm cần loại bỏ"
            className="w-full focus:outline-none"
          />
          <button className="border border-primaryColor px-2 py-2 rounded-md">
            Thêm
          </button>
        </div>
        <div>
          <p className="text-xl font-medium text-primaryColor">
            Bị loại trừ bởi chế độ ăn kiêng của bạn
          </p>
          <div></div>
        </div>
        <div>
          <p className="text-xl font-medium text-primaryColor">
            Loại trừ bạn đã thêm
          </p>
          <div></div>
        </div>
        <div>
          <div className="flex flex-row items-baseline ">
            <p className="w-1/2 text-xl font-medium text-primaryColor">
              Loại trừ chung
            </p>
            <div className="w-full border border-lineColor"></div>
          </div>
          <div className="grid grid-cols-5 gap-5 py-5">
            {GeneralExclusions.map((i) => (
              <div
                key={i}
                className="border border-primaryColor rounded-md py-2 text-center hover:border-btnColor"
              >
                <button className="">{i}</button>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="flex flex-row items-baseline">
            <p className="w-1/2 text-xl font-medium text-primaryColor">
              Các loại hạt
            </p>
            <div className="w-full border border-lineColor"></div>
          </div>
          <div className="grid grid-cols-5 gap-5 py-5">
            {Grains.map((i) => (
              <div
                key={i}
                className="border border-primaryColor rounded-md py-2 text-center hover:border-btnColor"
              >
                <button>{i}</button>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="flex flex-row items-baseline ">
            <p className="w-1/2 text-xl font-medium text-primaryColor">Trứng</p>
            <div className="w-full border border-lineColor"></div>
          </div>
          <div className="grid grid-cols-5 gap-5 py-5">
            {Eggs.map((i) => (
              <div
                key={i}
                className="border border-primaryColor rounded-md py-2 text-center hover:border-btnColor"
              >
                <button>{i}</button>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="flex flex-row items-baseline ">
            <p className="w-1/2 text-xl font-medium text-primaryColor">Cá</p>
            <div className="w-full border border-lineColor"></div>
          </div>
          <div className="grid grid-cols-5 gap-5 py-5">
            {Fish.map((i) => (
              <div
                key={i}
                className="border border-primaryColor rounded-md py-2 text-center hover:border-btnColor"
              >
                <button>{i}</button>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="flex flex-row items-baseline ">
            <p className="w-1/2 text-xl font-medium text-primaryColor">
              Thịt đỏ
            </p>
            <div className="w-full border border-lineColor"></div>
          </div>
          <div className="grid grid-cols-5 gap-5 py-5">
            {RedMeat.map((i) => (
              <div
                key={i}
                className="border border-primaryColor rounded-md py-2 text-center hover:border-btnColor"
              >
                <button>{i}</button>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex flex-row items-baseline ">
            <p className="w-1/2 text-xl font-medium text-primaryColor">
              Rau xanh
            </p>
            <div className="w-full border border-lineColor"></div>
          </div>
          <div className="grid grid-cols-5 gap-5 py-5">
            {Vegetables.map((i) => (
              <div
                key={i}
                className="border border-primaryColor rounded-md py-2 text-center hover:border-btnColor"
              >
                <button>{i}</button>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="flex flex-row items-baseline ">
            <p className="w-1/2 text-xl font-medium text-primaryColor">Sữa</p>
            <div className="w-full border border-lineColor"></div>
          </div>
          <div className="grid grid-cols-5 gap-5 py-5">
            {Dairy.map((i) => (
              <div
                key={i}
                className="border border-primaryColor rounded-md py-2 text-center hover:border-btnColor"
              >
                <button>{i}</button>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="flex flex-row items-baseline ">
            <p className="w-1/2 text-xl font-medium text-primaryColor">
              Gia cầm
            </p>
            <div className="w-full border border-lineColor"></div>
          </div>
          <div className="grid grid-cols-5 gap-5 py-5">
            {Poultry.map((i) => (
              <div
                key={i}
                className="border border-primaryColor rounded-md py-2 text-center hover:border-btnColor"
              >
                <button>{i}</button>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="flex flex-row items-baseline ">
            <p className="w-1/2 text-xl font-medium text-primaryColor">
              Hải sản
            </p>
            <div className="w-full border border-lineColor"></div>
          </div>
          <div className="grid grid-cols-5 gap-5 py-5">
            {Seafood.map((i) => (
              <div
                key={i}
                className="border border-primaryColor rounded-md py-2 text-center hover:border-btnColor"
              >
                <button>{i}</button>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="flex flex-row items-baseline ">
            <p className="w-1/2 text-xl font-medium text-primaryColor">
              Trái cây
            </p>
            <div className="w-full border border-lineColor"></div>
          </div>
          <div className="grid grid-cols-5 gap-5 py-5">
            {Fruit.map((i) => (
              <div
                key={i}
                className="border border-primaryColor rounded-md py-2 text-center hover:border-btnColor"
              >
                <button>{i}</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodExclusions;
