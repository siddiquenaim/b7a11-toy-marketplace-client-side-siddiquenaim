import React, { useEffect } from "react";
import Banner from "../../Banner/Banner/Banner";
import Gallery from "../Gallery/Gallery";
import ShopByCategory from "../ShopByCategory/ShopByCategory";
import ArticleSection from "../ArticleSection/ArticleSection";
import AboutUsSection from "../AboutUs/AboutUs";

const Home = () => {
  {
    document.title = "Home | Bricktopia";
  }
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

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
