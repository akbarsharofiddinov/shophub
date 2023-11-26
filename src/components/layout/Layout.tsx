import React from "react";
import { Outlet } from "react-router-dom";
import { Cart, Footer, Header, Modal, MyForm } from "..";
import { ToastContainer } from "react-toastify";

const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <Cart />
      <Modal children={<MyForm />} />
      <Outlet />
      <Footer />
      <ToastContainer />
    </>
  );
};

export default Layout;
