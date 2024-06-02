import { Outlet, redirect, useNavigate } from 'react-router-dom';
import { logOut } from '../apis/auth';
import { toast } from 'react-toastify';
import useAuthStore from '../states/authState';
import { getCurrentUser } from '../apis/user';

export const userLoader = async () => {
  try {
    await getCurrentUser();
    return null;
  } catch (err) {
    return redirect('/');
  }
};

const UserLayout = () => {
  const navigate = useNavigate();
  const { removeUser } = useAuthStore((state) => state);

  const logUserOut = async () => {
    removeUser();
    await logOut();
    navigate('/');
    toast.success('Đăng xuất thành công');
  };

  return (
    <>
      <button className="bg-redDanger" onClick={logUserOut}>
        Log out test
      </button>
      <Outlet />
    </>
  );
};
export default UserLayout;
