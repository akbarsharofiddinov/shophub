import React from "react";
import { MainBanner } from "@/assets";

const Banner: React.FC = () => {
  return (
    <>
      <div
        className="home-banner"
        style={{ backgroundImage: `url(${MainBanner})` }}
      >
        <div className="inner-text">
          <p>a sofa,</p>
          <p>a good</p>
          <p>book,</p>
          <p>and you.</p>
        </div>
      </div>
    </>
  );
};

export default Banner;
