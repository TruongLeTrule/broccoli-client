import React from "react";
import Circle from "./circle";

const StepOneSection = () => {
  return (
    <div className="mt-12">
      <div className="flex flex-row">
        <div className="w-full flex flex-col justify-center px-20 gap-5">
          <div className="">
            <p className="font-dancing font-semibold text-8xl text-primaryColor ml-10">
              Bước 1:
            </p>
          </div>
          <div className="flex flex-row gap-4 items-baseline ml-10">
            <p className="text-2xl leading-loose text-justify pr-20">
              Bạn hãy đăng ký tài khoản để sử dụng ứng dụng Broccoli nhé!
            </p>
          </div>
          <button className="text-2xl ml-auto text-btnColor pr-20">
            Đăng ký
          </button>
        </div>
        <div className="hidden lg:flex flex-row h-full items-center justify-center mr-28">
          <div className="z-10">
            <img src="src\assets\com.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepOneSection;
