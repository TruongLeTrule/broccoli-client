import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../components/Nav"; // Ensure this matches the exact casing of the file
import Footer from "../components/footer"; // Ensure this matches the exact casing of the file

const HomeLayout = () => {
  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default HomeLayout;
