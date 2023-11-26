import React from "react";
import { SectionTop } from "@/components";
import { Products } from "@/components";
import { useGetBooksByStatusConditionQuery } from "@/RTKQueries/bookRTKQ";

const RecommendBooks: React.FC = () => {

  const { data } = useGetBooksByStatusConditionQuery("recommended")

  return (
    <>
      <section className="section-recommend">
        <div className="container">
          <SectionTop
            title="RECOMMENDED BOOKS"
            desc="This Month's"
            psElement={true}
          />
          <div className="recommended-books">
            <Products productData={data} />
          </div>
        </div>
      </section>
    </>
  );
};

export default RecommendBooks;
