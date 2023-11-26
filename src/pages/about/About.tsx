import React from "react";
import { SectionTop } from "@/components";
import { aboutBanner } from "@/assets";

const About: React.FC = () => {
  return (
    <>
      <section className="section-about">
        <div className="container">
          <SectionTop title={"story"} desc="Our" />
          <div className="main">
            <img src={aboutBanner} alt="about banner" />
            <div className="main-inner">
              <p>
                I'm a paragraph. Click here to add your own text and edit me.
                It’s easy. Just click “Edit Text” or double click me to add your
                own content and make changes to the font. Feel free to drag and
                drop me anywhere you like on your page.
              </p>
              <p>
                This is a great space to write long text about your company and
                your services. You can use this space to go into a little more
                detail about your company. Talk about your team and what
                services you provide. Tell your visitors the story of how you
                came up with the idea for your business and what makes you
                different from your competitors.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
