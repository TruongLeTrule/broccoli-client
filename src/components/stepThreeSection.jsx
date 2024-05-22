import React from "react";
import Circle from "./circle";

const StepThreeSection = () => {
  return (
    <div className="mt-12">
      <div className="flex flex-row">
        <div className="w-full flex flex-col justify-center px-20 gap-5">
          <div className="">
            <p className="font-dancing font-semibold text-8xl text-primaryColor ml-10">
              Bước 3:
            </p>
          </div>
          <div className="flex flex-col items-baseline ml-10">
            <p className="text-2xl leading-loose text-justify pr-20">
              Sau khi tạo được một thực đơn vừa ý, bạn hãy chuẩn bị - thưởng
              thức và tích nút hoàn thành cho từng bữa ăn nhé!
            </p>
            <p className="text-2xl leading-loose text-justify pr-20">
              Broccoli chúc bạn ngon miệng!!!
            </p>
          </div>
        </div>
        <div className="hidden lg:flex flex-row h-full items-center justify-center mr-28">
          <div className="z-10">
            <img src="src\assets\ca.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepThreeSection;
