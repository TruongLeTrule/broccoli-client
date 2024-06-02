import { useLoaderData, Outlet, redirect } from 'react-router-dom';
import { getCurrentUser } from '../apis/user';

export const adminLoader = async () => {
  const error = { msg: '' };
  try {
    const { user } = await getCurrentUser();
    if (user.role !== 'admin') return redirect('/');
    return null;
  } catch (err) {
    return redirect('/login');
  }
};

const AdminLayout = () => {
  const data = useLoaderData();

  console.log(data);

  return (
    <>
      <Outlet />
    </>
  );
};
export default AdminLayout;
