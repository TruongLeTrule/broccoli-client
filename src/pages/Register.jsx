import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { useState } from "react";
import Circle from "../components/circle";

const Register = () => {
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
              Đăng ký
            </h1>
            <div className="flex flex-col">
              <div>
                <input
                  type="text"
                  className="px-1 border-b border-textColor py-4 text-sm focus:outline-none focus:border-primaryColor focus:border-b-2 focus:shadow-md w-full"
                  placeholder="Nhập tên đăng nhập"
                />
              </div>
              <div className="relative ">
                <input
                  type={open === false ? "password" : "text"}
                  name=""
                  id=""
                  className="px-1 my-4 border-b border-textColor py-4 text-sm focus:outline-none focus:border-primaryColor focus:border-b-2 focus:shadow-md w-full"
                  placeholder="Nhập mật khẩu"
                />
                <div className="absolute top-9 right-5">
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
              <div className="relative ">
                <input
                  type={open === false ? "password" : "text"}
                  name=""
                  id=""
                  className="px-1 my-4 border-b border-textColor py-4 text-sm focus:outline-none focus:border-primaryColor focus:border-b-2 focus:shadow-md w-full"
                  placeholder="Nhập lại mật khẩu"
                />
                <div className="absolute top-9 right-5">
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
            <div className="mt-4 flex gap-2 text-sm">
              <p>Bạn đã tài khoản?</p>
              <a
                href="/Login"
                className="text-primaryColor text-sm active:scale-[.98]"
              >
                Đăng nhập ngay
              </a>
            </div>
            <div className="text-center flex flex-col text-sm w-1/2 justify-center mx-32">
              <button className="mt-4 py-4 px-20 bg-primaryColor rounded-3xl text-bgColor active:scale-[.98] shadow-md">
                Đăng ký
              </button>
              <p className="mt-4">Hoặc đăng ký với</p>
              <div className="mt-4 flex flex- rowmt-4 py-4 border-2 border-primaryColor rounded-3xl text-primaryColor hover:bg-primaryColor hover:text-bgColor active:scale-[.98] shadow-md justify-center gap-1">
                <FcGoogle className="size-5" />
                <button className="">Tài khoản Google</button>
              </div>
              <div className="mt-4 flex flex- rowmt-4 py-4 border-2 border-primaryColor rounded-3xl text-primaryColor hover:bg-primaryColor hover:text-bgColor active:scale-[.98] shadow-md justify-center gap-1">
                <FaFacebook className="size-5" />
                <button className="">Tài khoản Facebook</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
