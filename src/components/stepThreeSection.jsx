import React from "react";
import Circle2 from "./circle2";

const StepThreeSection = () => {
  return (
    <div className="mt-20">
      <Circle2 />
      <div className="flex flex-row">
        <div className="flex flex-col justify-center px-10 gap-5 w-[1000px]">
          <div className="">
            <p className="font-dancing font-semibold text-8xl text-primaryColor ml-10">
              Bước 3:
            </p>
          </div>
          <div className="flex flex-col items-baseline ml-10">
            <p className="text-2xl leading-loose text-justify pr-28">
              Sau khi tạo được một thực đơn vừa ý, bạn hãy chuẩn bị - thưởng
              thức và tích nút hoàn thành cho từng bữa ăn nhé!
            </p>
            <p className="text-2xl leading-loose text-justify pr-10">
              Broccoli chúc bạn ngon miệng!!!
            </p>
          </div>
        </div>
        <div className="hidden lg:flex flex-row h-full items-center justify-center mr-28 mt-16">
          <div className="z-10">
            <img src="src\assets\ca.png" alt="" className="w-[700px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepThreeSection;
