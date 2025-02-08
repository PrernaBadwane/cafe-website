import React from "react";
import { IMAGES } from "../../../assets";
import Button from "../../Shared/Button/Button";
import Heading from "../../Shared/Heading/Heading";

const AboutUs = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-white py-16 px-6 md:px-24">
      {/* Left Content */}
      <div className="w-[65%]">
      <Heading
        heading="Discover the best coffee"
        description="Bean Scene is a coffee shop that provides you with quality coffee
        that helps boost your productivity and helps build your mood. Having
        a cup of coffee is good, but having a cup of real coffee is greater.
        There is no doubt that you will enjoy this coffee more than others
        you have ever tasted."
        align="left" 
      />
        <Button onClick={() => alert("Learn More!")}>Learn More</Button>
      </div>

      {/* Right Image */}
      <div className="w-[35%] mt-8 md:mt-0 flex justify-center">
        <img
          src={IMAGES.coffeeMug} // Replace with your coffee image
          alt="Coffee beans"
          className="w-full max-w-[400px] md:max-w-[600px] object-contain"
        />
      </div>
    </div>
  );
};

export default AboutUs;
