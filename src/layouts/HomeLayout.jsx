import { Outlet, useLoaderData } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/footer";
import { getCurrentUser } from "../apis/user";
import useAuthStore from "../states/authState";
import { useEffect } from "react";

export const homeLayoutLoader = async () => {
  try {
    const data = await getCurrentUser();
    return data;
  } catch (err) {
    return err;
  }
};

const HomeLayout = () => {
  console.log(useLoaderData);
  const { user } = useLoaderData() || {};
  const { setUser } = useAuthStore((state) => state);

  useEffect(() => {
    setUser(user);
  }, [user]);

  return (
    <>
      <Nav />
      <main>
        <Outlet context={{ user }} />
      </main>
      <Footer />
    </>
  );
};

export default HomeLayout;
