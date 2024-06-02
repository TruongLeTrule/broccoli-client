import { createContext, useContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { getCurrentUser } from '../apis/user';

export const homeLayoutLoader = async () => {
  try {
    const user = await getCurrentUser();
    return user;
  } catch (error) {
    return error;
  }
};

const HomeLayoutContext = createContext();

const HomeLayout = () => {
  const { user } = useLoaderData();

  return (
    <HomeLayoutContext.Provider value={{ user }}>
      <Nav />
      <main>
        <Outlet context={{ user }} />
      </main>
      <Footer />
    </HomeLayoutContext.Provider>
  );
};

export default HomeLayout;
export const useHomeLayoutContext = () => useContext(HomeLayoutContext);
