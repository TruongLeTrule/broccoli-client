import {
  Form,
  Link,
  redirect,
  useNavigation,
  useActionData,
} from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import Circle from '../components/circle';
import FormRow from '../components/FormRow';
import { register } from '../apis/auth';
import { toast } from 'react-toastify';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const error = { msg: '' };
  const { username, password, confirmPassword } = Object.fromEntries(formData);

  try {
    if (password !== confirmPassword) {
      error.msg = 'Mật khẩu không trùng khớp';
      return error;
    }
    await register({ username, password });
    toast.success('Đăng ký thành công');
    return redirect('/login');
  } catch (err) {
    error.msg = err?.response?.data?.msg;
    return error;
  }
};

const Register = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  const error = useActionData();

  return (
    <div className="mt-28">
      <Circle />
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen flex flex-row">
        <div className="hidden lg:flex flex-row h-full w-full items-center justify-center">
          <div className="z-10">
            <img src="src\assets\comne.png" alt="" />
          </div>
        </div>
        <Form
          method="post"
          className="w-full flex flex-col items-center justify-center"
        >
          <div className="px-10 py-10 border-2 w-4/5 h-auto rounded-3xl border-primaryColor bg-bgColor z-10">
            <h1 className="font-dancing font-semibold text-5xl text-center pb-5">
              Đăng ký
            </h1>

            <div className="flex flex-col">
              <FormRow
                name="username"
                type="text"
                placeholder="Nhập tên đăng nhập"
                defaultValue="truongle"
              />
              <FormRow
                name="password"
                placeholder="Nhập mật khẩu"
                type="password"
                defaultValue="truongle"
              />
              <FormRow
                name="confirmPassword"
                placeholder="Nhập lại mật khẩu"
                type="password"
                defaultValue="truongle"
              />
              {error && <span className="text-redDanger">{error.msg}</span>}
            </div>
            <div className="mt-4 flex gap-2 text-sm">
              <p>Bạn đã tài khoản?</p>
              <Link
                to="/login"
                className="text-primaryColor text-sm active:scale-[.98]"
              >
                Đăng nhập ngay
              </Link>
            </div>
            <div className="text-center flex flex-col text-sm w-1/2 justify-center mx-32">
              <button
                className="mt-4 py-4 px-20 bg-primaryColor rounded-3xl text-bgColor active:scale-[.98] shadow-md"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Đang tải...' : 'Đăng ký'}
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
        </Form>
      </div>
    </div>
  );
};
export default Register;
