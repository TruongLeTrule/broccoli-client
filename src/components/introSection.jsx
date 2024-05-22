import React from "react";

const introSection = () => {
  return (
    <div className="mt-20">
      <div className="max-lg:hidden w-1/2 h-full border-2 border-secondaryColor mt-5 rounded-full absolute -ml-60"></div>
      <div className="max-lg:hidden w-2/5 h-5/6 border-2 border-primaryColor mt-20 rounded-full absolute -ml-40"></div>
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen flex flex-row">
        <div className="hidden lg:flex flex-row h-full w-full items-center justify-center">
          <div className="border-2 border-primaryColor rounded-full"></div>
          <div className="z-10">
            <img src="src\assets\comne.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default introSection;
