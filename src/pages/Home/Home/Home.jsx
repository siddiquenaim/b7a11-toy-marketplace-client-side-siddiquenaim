import React from "react";
import Banner from "../../Banner/Banner/Banner";
import Gallery from "../Gallery/Gallery";
import ShopByCategory from "../ShopByCategory/ShopByCategory";
import ArticleSection from "../ArticleSection/ArticleSection";

const Home = () => {
  {
    document.title = "Home - Bricktopia";
  }
  return (
    <div>
      <Banner></Banner>
      <Gallery></Gallery>
      <ShopByCategory></ShopByCategory>
      <ArticleSection></ArticleSection>
    </div>
  );
};

export default Home;
