import React from "react";

const Circle = () => {
  return (
    <div className="max-xl:hidden">
      <div className="max-lg:hidden w-2/5 h-5/6 border-t-2 border-l-2 border-secondaryColor mt-20 scale-125 rounded-full absolute left-20 rotate-45"></div>
      <div className="max-lg:hidden w-2/5 h-5/6 border-t-2 border-l-2 border-primaryColor mt-20 rounded-full absolute left-20"></div>
    </div>
  );
};

export default Circle;
