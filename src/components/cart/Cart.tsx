import React from "react";
import { BsChevronRight } from "react-icons/bs";
import { useMyAppContext } from "@/hooks/useMyAppContext";

const Cart: React.FC = () => {
  const { cartModal, setCartModal } = useMyAppContext()!;
  return (
    <>
      <div
        className={cartModal ? "cartModal active" : "cartModal"}
        onClick={() => {
          setCartModal(false);
        }}
      >
        <div
          className="cart-sideBar"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className="top">
            <span
              onClick={() => {
                setCartModal(false);
              }}
            >
              <BsChevronRight />
            </span>
            <h1>Cart</h1>
          </div>
          <div className="cartItems">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum
            laudantium recusandae, rem earum sit qui velit deleniti vel ab nemo
            quae quidem est accusantium quos eligendi fugiat, vero non facere?
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
