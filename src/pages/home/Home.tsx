import React from "react";
import {
  Banner,
  BestSeller,
  BookLaunch,
  MoreBooks,
  RecommendBooks,
  SectionTop,
} from "@/components";

const Home: React.FC = () => {
  return (
    <section className="section-home">
      <div className="container">
        <Banner />
        <SectionTop
          title="bestsellers"
          desc="BINK. Publishers"
          psElement={false}
        />
        <BestSeller />
        <RecommendBooks />
        <MoreBooks />
        <BookLaunch />
      </div>
    </section>
  );
};

export default Home;
