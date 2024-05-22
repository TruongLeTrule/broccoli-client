import React from "react";
import Circle from "./circle";

const StepTwoSection = () => {
  return (
    <div className="mt-12">
      <Circle />
      <div className="pl-4 lg:pl-14 max-w-screen-2xl ml-auto min-h-screen h-screen flex flex-row">
        <div className="hidden lg:flex flex-row h-full w-full items-center justify-center">
          <div className="z-10">
            <img src="src\assets\bun.png" alt="" />
          </div>
        </div>
        <div className="w-full flex flex-col justify-center px-20 gap-5">
          <div className="">
            <p className="font-dancing font-semibold text-8xl text-primaryColor ml-72">
              Bước 2:
            </p>
          </div>
          <div className="flex flex-row gap-4 items-baseline ml-10">
            <p className="text-2xl ml-10 leading-loose text-justify mr-12">
              Sau khi đăng ký (hoặc đăng nhập) tài khoản, bạn hãy chọn “Kế
              hoạch” để tạo ra kế hoạch ăn cho ngày hôm nay.
            </p>
          </div>
          <button className="text-2xl ml-96 text-btnColor">Kế hoạch</button>
        </div>
      </div>
    </div>
  );
};

export default StepTwoSection;
