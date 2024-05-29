import { FcGoogle } from "react-icons/fc";
import {
  FaFacebook,
  FaRegEyeSlash,
  FaRegEye,
  FaCheckCircle,
} from "react-icons/fa";
import { useState } from "react";
import Circle from "../components/circle";
import { FaRegUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";

const Login = () => {
  const [open, setOpen] = useState(false);

  const togglePassword = () => {
    setOpen(!open);
  };

  return (
    <div className="mt-28">
      <Circle />
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen flex flex-row">
        <div className="hidden lg:flex flex-row h-full w-full items-center justify-center">
          <div className="z-10">
            <img src="src\assets\comne.png" alt="" />
          </div>
        </div>
        <div className="w-full flex flex-col items-center justify-center">
          <div className="px-10 py-10 border-2 w-4/5 h-auto rounded-3xl border-primaryColor bg-bgColor z-10">
            <h1 className="font-dancing font-semibold text-5xl text-center pb-5">
              Đăng nhập
            </h1>
            <div className="flex flex-col">
              <div className="flex flex-row items-center gap-5 border-b border-textColor focus:border-primaryColor focus:border-b-2 focus:shadow-md px-1 ">
                <FaRegUser />
                <input
                  type="text"
                  className="py-4 text-sm focus:outline-none "
                  placeholder="Nhập tên đăng nhập"
                />
              </div>
              <div className="relative">
                <div className="flex flex-row my-4 items-center gap-5 border-b border-textColor px-1 focus:border-primaryColor focus:border-b-2 focus:shadow-md">
                  <RiLockPasswordLine />
                  <input
                    type={open === false ? "password" : "text"}
                    name=""
                    id=""
                    className="py-4 text-sm focus:outline-none  w-full"
                    placeholder="Nhập mật khẩu"
                  />
                </div>
                <div className="absolute top-9 right-5 place-items-center">
                  {open ? (
                    <FaRegEye
                      onClick={togglePassword}
                      className="cursor-pointer"
                    />
                  ) : (
                    <FaRegEyeSlash
                      onClick={togglePassword}
                      className="cursor-pointer"
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="flex justify-between text-sm">
              <div className="py-4 flex flex-row items-center gap-2">
                <div className="flex flex-row ">
                  <label htmlFor="remember" className="cursor-pointer relative">
                    <input
                      type="checkbox"
                      id="remember"
                      className="appearance-none w-6 h-6 border border-primaryColor rounded-full"
                    />
                    <FaCheckCircle className="text-primaryColor text-xs w-6 h-6 absolute left-0 top-0 text-opacity-0 check1 transition" />
                  </label>
                </div>
                <div>Lưu mật khẩu</div>
              </div>

              <button className="text-highlightColor text-sm active:scale-[.98]">
                Quên mật khẩu?
              </button>
            </div>
            <div className="text-center flex flex-col text-sm w-1/2 justify-center sm:mx-32 lg:mx-28">
              <a
                href="/nutritionTargets"
                className="mt-4 py-4 px-20 bg-primaryColor rounded-3xl text-bgColor active:scale-[.98] shadow-md"
              >
                Đăng nhập
              </a>
              <p className="mt-4">Hoặc đăng nhập với</p>
              <div className="mt-4 flex flex- rowmt-4 py-4 border-2 border-primaryColor rounded-3xl text-primaryColor hover:bg-primaryColor hover:text-bgColor active:scale-[.98] shadow-md justify-center gap-1">
                <FcGoogle className="size-5" />
                <button className="">Tài khoản Google</button>
              </div>
              <div className="mt-4 flex flex- rowmt-4 py-4 border-2 border-primaryColor rounded-3xl text-primaryColor hover:bg-primaryColor hover:text-bgColor active:scale-[.98] shadow-md justify-center gap-1">
                <FaFacebook className="size-5" />
                <button className="">Tài khoản Facebook</button>
              </div>
              <a
                href="/Register"
                className="mt-4 text-highlightColor active:scale-[.98]"
              >
                Bạn chưa có tài khoản?
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
