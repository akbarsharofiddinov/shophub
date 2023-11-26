import React, { useState } from "react";
import { SectionTop } from "@/components";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoPinterestAlt,
  BiLogoTwitter,
} from "react-icons/bi";

const Contact: React.FC = () => {
  const [inputName, setInputName] = useState("");
  const [email, setEmail] = useState("");

  const inputOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    const { value } = target;

    if (value === "") {
      target.classList.add("error");
    } else {
      target.classList.remove("error");
    }

    if (target.id === "name") {
      setInputName(target.value);
    } else if (target.id === "email") {
      setEmail(target.value);
    }
  };

  return (
    <>
      <section className="section-contact">
        <div className="container">
          <SectionTop title={"contact us"} desc="For More Info" />
          <main className="main">
            <div className="main-inner">
              <div className="contactTop">
                <div className="store1">
                  <h1 className="title">Store 1</h1>
                  <div className="addres">
                    <p>Address</p>
                    <p>500 Terry Francine St.</p>
                    <p>SF, CA 94158</p>
                  </div>
                  <div className="phone">
                    <p>Tel</p>
                    <p>123-456-7890</p>
                  </div>
                  <div className="email">
                    <p>Email</p>
                    <p>
                      <a href="#">info@my-domain.com</a>
                    </p>
                  </div>
                </div>
                <div className="store2">
                  <h1 className="title">Store 1</h1>
                  <div className="addres">
                    <p>Address</p>
                    <p>500 Terry Francine St.</p>
                    <p>SF, CA 94158</p>
                  </div>
                  <div className="phone">
                    <p>Tel</p>
                    <p>123-456-7890</p>
                  </div>
                  <div className="email">
                    <p>Email</p>
                    <p>
                      <a href="#">info@my-domain.com</a>
                    </p>
                  </div>
                </div>
                <div className="customerService">
                  <h1>Customer Service</h1>
                  <div>
                    <p>Tel</p>
                    <p>1-800-000-0000</p>
                  </div>
                  <div>
                    <p>Email</p>
                    <p>
                      <a href="#">info@my-domain.com</a>
                    </p>
                  </div>
                  <ul className="social-links">
                    <li className="social-link">
                      <a href="#">
                        <BiLogoFacebook />
                      </a>
                    </li>
                    <li className="social-link">
                      <a href="#">
                        <BiLogoTwitter />
                      </a>
                    </li>
                    <li className="social-link">
                      <a href="#">
                        <BiLogoInstagram />
                      </a>
                    </li>
                    <li className="social-link">
                      <a href="#">
                        <BiLogoPinterestAlt />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <form className="contactForm">
                <input
                  type="text"
                  id="name"
                  placeholder="Name"
                  autoComplete="off"
                  value={inputName}
                  onChange={(e) => inputOnChange(e)}
                />
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  autoComplete="off"
                  value={email}
                  onChange={(e) => inputOnChange(e)}
                />
                <textarea placeholder="Type your message here..."></textarea>
                <button type="submit">Submit</button>
              </form>
            </div>
          </main>
        </div>
      </section>
    </>
  );
};

export default Contact;
