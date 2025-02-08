import React from "react";
import Hero from "../../components/Home/Hero/Hero";
import AboutUs from "../../components/Home/AboutUs/AboutUs";
import NewBrands from "../../components/Home/NewBrands/NewBrands";
import Uniqueness from "../../components/Home/Uniqueness/Uniqueness"

const page = () => {
  return (
    <div>
      <Hero />
      <AboutUs />
      <NewBrands/>
      <Uniqueness/>
    </div>
  );
};

export default page;
