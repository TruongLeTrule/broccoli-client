import React from "react";
import Circle from "./circle";

const Hero = () => {
  return (
    <div className="mt-20">
      <Circle />
      <div className="pl-4 lg:pl-14 max-w-screen-2xl ml-auto min-h-screen h-screen flex flex-row">
        <div className="hidden lg:flex flex-row h-full w-full items-center justify-center">
          <div className="z-10">
            <img src="src\assets\comne.png" alt="" />
          </div>
        </div>
        <div className="w-full flex flex-col justify-center px-20 gap-5">
          <div className="">
            <p className="font-dancing font-semibold text-8xl text-primaryColor ml-44">
              Chào mừng
            </p>
          </div>
          <div className="flex flex-row gap-4 items-baseline ml-10">
            <div className="border-b-2 w-2/5"></div>
            <p className="text-2xl">bạn đã đến với Broccoli</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-2xl ml-10">
              Website chuyên về dinh dưỡng và sức khỏe!
            </p>
            <p className="text-2xl ml-10 leading-loose text-justify mr-12">
              Tại Broccoli, chúng tôi cam kết cung cấp những thông tin chính
              xác, hữu ích về dinh dưỡng, chế độ ăn uống lành mạnh và lối sống
              cân bằng.
            </p>
          </div>
          <button className="text-2xl ml-80 text-btnColor">
            Tham gia ngay
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
