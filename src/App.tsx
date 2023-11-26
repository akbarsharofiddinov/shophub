import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, About, Shop, Contact, DetailProduct } from "./pages";
import { myAppContext } from "./context/myAppContext";
import { Layout } from "./components";

const App: React.FC = () => {
  const [cartModal, setCartModal] = useState(false);
  const [modal, setModal] = useState(false);

  const values = {
    cartModal,
    setCartModal,
    modal,
    setModal
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Home />,
          children: [
            {
              path: "/event",
              element: <Home />,
            },
          ],
        },
        {
          path: "/shopping",
          element: <Shop />,
        },
        {
          path: "/detailsProduct:productID",
          element: <DetailProduct />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ]);

  return (
    <>
      <myAppContext.Provider value={values}>
        <RouterProvider router={router} />
      </myAppContext.Provider>
    </>
  );
};

export default App;
