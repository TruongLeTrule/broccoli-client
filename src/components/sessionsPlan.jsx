import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { LiaExchangeAltSolid } from "react-icons/lia";
import { FaCheckCircle } from "react-icons/fa";

const SessionsPlan = () => {
  const plan = [
    {
      session: "Sáng",
      img: <img src="src\assets\tam.png" alt="" />,
      name: "Tên món ăn",
      time: "1",
      serving: "1",
    },
    {
      session: "Trưa",
      img: <img src="src\assets\tam.png" alt="" />,
      name: "Tên món ăn",
      time: "1",
      serving: "1",
    },
    {
      session: "Tối",
      img: <img src="src\assets\tam.png" alt="" />,
      name: "Tên món ăn",
      time: "1",
      serving: "1",
    },
    {
      session: "Ăn vặt",
      img: <img src="src\assets\tam.png" alt="" />,
      name: "Tên món ăn",
      time: "1",
      serving: "1",
    },
  ];

  return (
    <div>
      <div>
        {plan.map((plan, i) => (
          <div
            key={i}
            className="px-5 py-5 border-2 border-primaryColor rounded-xl mt-10 "
          >
            <div className="flex flex-row items-center justify-between">
              <div className="text-primaryColor font-semibold text-xl">
                {plan.session}
              </div>
              <div className="border border-primaryColor rounded-full px-2 py-2">
                <LiaExchangeAltSolid className="cursor-pointer text-primaryColor" />
              </div>
            </div>
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row ">
                <label
                  htmlFor={`checkbox${i}`}
                  className="cursor-pointer relative"
                >
                  <input
                    type="checkbox"
                    id={`checkbox${i}`}
                    className="appearance-none w-6 h-6 border border-primaryColor rounded-full checkedi"
                  />
                  <FaCheckCircle className="text-primaryColor text-xs w-6 h-6 absolute left-0 top-0 text-opacity-0 check1 transition" />
                </label>
              </div>
              <div className="w-1/6">{plan.img}</div>
              <div>
                <div>{plan.name}</div>
                <div>
                  {plan.time}h | {plan.serving} phần ăn
                </div>
              </div>
              <div>
                <BsThreeDots className="cursor-pointer text-primaryColor " />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SessionsPlan;
