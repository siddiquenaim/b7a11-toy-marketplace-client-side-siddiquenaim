import React from "react";
import Banner from "../../Banner/Banner/Banner";
import Gallery from "../Gallery/Gallery";
import ShopByCategory from "../ShopByCategory/ShopByCategory";
import ArticleSection from "../ArticleSection/ArticleSection";
import AboutUsSection from "../AboutUs/AboutUs";

const Home = () => {
  {
    document.title = "Home - Bricktopia";
  }
  return (
    <div>
      <Banner></Banner>
      <AboutUsSection></AboutUsSection>
      <Gallery></Gallery>
      <ShopByCategory></ShopByCategory>
      <ArticleSection></ArticleSection>
    </div>
  );
};

export default Home;
