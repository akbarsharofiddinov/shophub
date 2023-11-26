import { useGetBooksByStatusConditionQuery } from "@/RTKQueries/bookRTKQ";
import { SectionTop } from "@/components";
import { MyButton } from "@/components";
import React from "react";

const BookLaunch: React.FC = () => {
  const { data, isSuccess } = useGetBooksByStatusConditionQuery("coming up");

  return (
    <>
      <section className="section-bookLaunch" id="section-bookLaunch">
        <div className="container">
          <SectionTop title="book launch" desc="Coming Up" />
          <div className="bookLaunch-inner">
            <div className="infoBook">
              <h1 className="title">Introducing The Land of AILOO</h1>
              <h1>By Mark Walker</h1>
              <div>
                <div>
                  <h2>When</h2>
                  <p>Jul 12, 2035, 7:00 PM</p>
                </div>
                <div>
                  <h2>Where</h2>
                  <p>500 Terry Francois Street, San Francisco, CA, USA</p>
                </div>
              </div>
              <MyButton title="RSVP NOW" />
            </div>
            <div className="bookImage">
              {isSuccess ? (
                <img src={data[0].imageURL} alt="The Land of Ailo" />
              ) : (
                <h1>No image</h1>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookLaunch;
