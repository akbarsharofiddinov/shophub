import React from "react";
import { MyButton, MyInput } from "..";
import { PiCaretUpLight } from "react-icons/pi";

const Footer: React.FC = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-inner">
            <div>
              <h1>BINK. Publishers</h1>
              <ul>
                <li>500 Terry Francine St.</li>
                <li>San Francisco, CA 94158</li>
                <li>123-456-7890</li>
                <li>
                  <a href="#">info@my-domain.com</a>
                </li>
              </ul>
            </div>
            <div>
              <h1>Shop</h1>
              <ul>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Shipping & Returns</a>
                </li>
                <li>
                  <a href="#">Store Policy</a>
                </li>
                <li>
                  <a href="#">Payment Methods</a>
                </li>
              </ul>
            </div>
            <div>
              <h1>Socials</h1>
              <ul>
                <li>
                  <a href="#">FaceBook</a>
                </li>
                <li>
                  <a href="#">Twitter</a>
                </li>
                <li>
                  <a href="#">Instagram</a>
                </li>
                <li>
                  <a href="#">Pinterest</a>
                </li>
              </ul>
            </div>
            <div>
              <h1>Be the First to Know</h1>
              <div>
                <h2>Sign up for our newsletter</h2>
                <MyInput type="email" placeholder="Enter your email here*" />
                <MyButton title="Subscribe" />
              </div>
            </div>
          </div>
          <span
            className="toTop"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <PiCaretUpLight />
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
