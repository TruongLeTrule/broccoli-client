import React from "react";
import SidebarSetting from "../components/sidebarSetting";
import { Outlet, redirect, useNavigate } from "react-router-dom";
import { logOut } from "../apis/auth";
import { toast } from "react-toastify";
import useAuthStore from "../states/authState";
import { useState, useEffect } from "react";
import axios from "axios";

const UserUrl = "http://localhost:3000/api/v1/user/current-user";

const User = () => {
  const navigate = useNavigate();
  const { removeUser } = useAuthStore((state) => state);

  const logUserOut = async () => {
    removeUser();
    await logOut();
    navigate("/");
    toast.success("Đăng xuất thành công");
  };

  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(UserUrl, {
          withCredentials: true,
        });
        setUser(response.data.user);
        console.log(response.data.user);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  return (
    <div className="mt-40 flex flex-row px-32 gap-20">
      <div className="">
        <SidebarSetting />
      </div>
      <div className="flex flex-col gap-10">
        <div className="grid grid-cols-2 gap-10">
          <p className="text-primaryColor font-semibold text-xl">Tài khoản:</p>
          <p>{user.username}</p>
        </div>
        <div className="grid grid-cols-2 gap-10">
          <p className="text-primaryColor font-semibold text-xl">Vai trò:</p>
          <p>{user.role}</p>
        </div>
        <button
          className="border border-primaryColor px-2 py-2 rounded-md hover:bg-primaryColor hover:text-bgColor"
          onClick={logUserOut}
        >
          Log out
        </button>
      </div>
    </div>
  );
};

export default User;
