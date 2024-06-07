import React from "react";
import SidebarSetting from "../components/sidebarSetting";
import { Outlet, redirect, useNavigate } from "react-router-dom";
import { logOut } from "../apis/auth";
import { toast } from "react-toastify";
import useAuthStore from "../states/authState";

const User = () => {
  const navigate = useNavigate();
  const { removeUser } = useAuthStore((state) => state);

  const logUserOut = async () => {
    removeUser();
    await logOut();
    navigate("/");
    toast.success("Đăng xuất thành công");
  };

  return (
    <div className="mt-40 flex flex-row px-32 gap-20">
      <div className="">
        <SidebarSetting />
      </div>
      <div className="flex flex-col gap-10">
        <button className="bg-redDanger" onClick={logUserOut}>
          Log out test
        </button>
      </div>
    </div>
  );
};

export default User;
