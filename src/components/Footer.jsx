import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { PiCopyrightLight } from "react-icons/pi";

const Footer = () => {
  const footerItems = [
    {
      title: "Liên hệ",
      items: [
        "+84 9999 9999",
        "Broccoli@gmail.com.vn",
        "Khu phố 6, P.Linh Trung, Tp.Thủ Đức, Tp.Hồ Chí Minh",
      ],
    },
    {
      title: "Về chúng tôi",
      items: [
        "Các điều khoản và điều kiện",
        "Chính sách bảo mật",
        "Chính sách cookie",
      ],
    },
  ];

  const socialItems = [
    {
      title: "Facebook",
      icon: <FaFacebook />,
      link: "https://www.facebook.com/",
    },
    {
      title: "Instagram",
      icon: <FaInstagram />,
      link: "https://www.instagram.com/",
    },
  ];

  return (
    <footer className="w-full mt-24 bg-secondaryColor py-2 px-2 rounded-t-3xl shadow-md bottom-0">
      <div className="max-w-[1240px] mx-auto flex flex-row gap-10 py-4">
        <p className="font-dancing font-semibold text-6xl text-bgColor">
          Broccoli
        </p>
        <div className="w-full border-b-2 border-bgColor"></div>
      </div>
      <div className="max-w-[1240px] mx-auto flex flex-row">
        <img
          src="src\assets\logo.png"
          alt=""
          className="absolute size-[20rem] left-5 "
        />
        <div className="max-w-[1000px] ml-auto grid grid-cols-3 rounded-sm py-2">
          {footerItems.map((item, index) => (
            <div key={index} className="w-fit ">
              <p className="text-2xl font-semibold py-2 ">{item.title}</p>
              <ul>
                {item.items.map((subItem, i) => (
                  <li key={i} className="py-2 pr-4 hover:text-primaryColor">
                    <a href="">{subItem}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="max-w-[1240px] mx-auto grid grid-rows-2 rounded-sm">
            <div>
              <p className="text-2xl font-semibold py-2">Nhận thông báo</p>
              <div className="px-2 py-2 bg-bgColor flex flex-row rounded-md my-2 focus:border-2 focus:border-primaryColor focus:shadow-md justify-between">
                <input
                  type="text"
                  className="focus:outline-none text-sm"
                  placeholder="Nhập email"
                />
                <button className="text-primaryColor border-2 rounded-md px-2 active:scale-[.98] shadow-md hover:shadow">
                  Đăng ký
                </button>
              </div>
            </div>
            <div>
              <p className="text-2xl font-semibold py-2">Cài đặt ứng dụng</p>
              <div className="grid grid-cols-2">
                <a
                  href="https://play.google.com/store/games?hl=vi&gl=US"
                  className="hover:shadow active:scale-[.98]"
                >
                  <img src="src\assets\gglay.png" alt="" />
                </a>
                <a
                  href="https://www.apple.com/vn/app-store/"
                  className="hover:shadow active:scale-[.98]"
                >
                  <img src="src\assets\appstore.png" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto flex flex-row justify-between border-t-2 border-bgColor pt-6 pb-4 items-center">
        <div></div>
        <div>
          <p className="italic flex flex-row items-center">
            <PiCopyrightLight />
            2024 - Bản quyền website Broccoli
          </p>
        </div>
        <div className="flex flex-row">
          {socialItems.map((item, id) => (
            <div key={id} className="px-2">
              <a className=" place-items-center" href={item.link}>
                {item.icon}
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
