import { Outlet, redirect } from 'react-router-dom';
import { getCurrentUser } from '../apis/user';

export const adminLoader = async () => {
  try {
    const { user } = await getCurrentUser();
    if (user.role !== 'admin') return redirect('/');
    return null;
  } catch (err) {
    return redirect('/login');
  }
};

const AdminLayout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};
export default AdminLayout;
