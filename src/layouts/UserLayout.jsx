import { Outlet, redirect, useNavigate } from "react-router-dom";
import { logOut } from "../apis/auth";
import { toast } from "react-toastify";
import useAuthStore from "../states/authState";
import { getCurrentUser } from "../apis/user";

export const userLoader = async () => {
  try {
    await getCurrentUser();
    return null;
  } catch (err) {
    return redirect("/");
  }
};

const UserLayout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};
export default UserLayout;
