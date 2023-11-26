import React from "react";
import { Link, NavLink } from "react-router-dom";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import { BsPersonCircle } from "react-icons/bs";
import { useMyAppContext } from "@/hooks/useMyAppContext";

const Header: React.FC = () => {
  const { setCartModal, setModal } = useMyAppContext()!;

  const gotoEvents = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.defaultPrevented;
    setTimeout(() => {
      scrollTo({
        top: document.getElementById("section-bookLaunch")?.offsetTop,
        behavior: "smooth",
      });
    }, 100);
  };

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-inner">
            <a href="/" className="logo">
              <h1>Book.</h1>
              <span>Market</span>
            </a>
            <ul className="header_menu">
              <li className="header_menu-item">
                <NavLink to={"/shopping"} onClick={() => scrollTo(0, 0)}>
                  Bookstore
                </NavLink>
              </li>
              <li className="header_menu-item">
                <Link to={"/event"} onClick={(e) => gotoEvents(e)}>
                  Events
                </Link>
              </li>
              <li className="header_menu-item">
                <NavLink to={"/about"} onClick={() => scrollTo(0, 0)}>
                  About
                </NavLink>
              </li>
              <li className="header_menu-item">
                <NavLink to={"/contact"} onClick={() => scrollTo(0, 0)}>
                  Contact
                </NavLink>
              </li>
              <li className="header_menu-item" onClick={() => setModal(true)}>
                <span>
                  <BsPersonCircle />
                  Log in
                </span>
              </li>
              <li className="header_menu-item">
                <button
                  onClick={() => {
                    setCartModal(true);
                  }}
                >
                  <PiShoppingCartSimpleLight />
                </button>
                <span className="num-of_orders">0</span>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
