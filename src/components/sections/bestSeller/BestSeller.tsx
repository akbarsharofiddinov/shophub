import React from "react";
import { Products } from "@/components";
import { useGetBooksByStatusConditionQuery } from "@/RTKQueries/bookRTKQ";

const BestSeller: React.FC = () => {
  const { data, isLoading } = useGetBooksByStatusConditionQuery("bestseller");

  return (
    <>
      <section className="section-bestSeller" >
        <div className="container">
          <div className="bestSeller-books">
            <Products productData={data} loading={isLoading} />
          </div>
        </div>
      </section>
    </>
  );
};

export default BestSeller;
