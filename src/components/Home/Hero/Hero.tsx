import React from "react";
import { IMAGES } from "../../../assets";
import Button from "../../Shared/Button/Button";

const Hero = () => {
  return (
    <div className="relative w-screen min-h-fit flex items-center justify-center px-10">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${IMAGES.heroBg})` }}
      ></div>

      {/* Content */}
      <div className="w-full flex justify-start">
        <div className="relative flex flex-col items-start text-start text-white px-6 md:px-12 w-[50%] py-16">
          <div className="flex flex-col my-10">
            <h1 className="text-white text-[22px] font-playfair font-medium leading-normal">
              We've got your morning covered with <br />
              <span className="text-white text-[220px] font-clicker font-normal leading-normal">Coffee</span>
            </h1>
            <p className="text-white text-[22px] font-playfair font-medium leading-normal">
              It is best to start your day with a cup of coffee. Discover the best flavors coffee you will ever have. We provide the best for our customers.
            </p>
          </div>

          <Button onClick={() => alert("Order Placed!")}>Order Now</Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
