import { SectionTop } from "@/components";
import React from "react";

const MoreBooks: React.FC = () => {
  return (
    <>
      <section className="section-moreBooks">
        <div className="container">
          <SectionTop
            title="THERE'S NO SUCH THING AS TOO MANY BOOKS"
            psElement={true}
            additionalButton={{title: "Read Our Story", exist: true}}
          />
        </div>
      </section>
    </>
  );
};

export default MoreBooks;
