import React from "react";
import Button from "../Button/Button";

interface CardProps {
  image: string;
  title: string;
  description: string;
  price: string;
  onButtonClick: () => void;
}

const Card: React.FC<CardProps> = ({
  image,
  title,
  description,
  price,
  onButtonClick,
}) => {
  return (
    <div className="relative flex flex-col  border-secondary-15 border items-center bg-white  shadow-lg  w-72">
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover rounded-t-lg mb-4"
      />

      {/* Content */}
      <div className="text-center w-full py-3 bg-secondary-20 ">
        <h3 className="text-primary-20 text-[22px] font-playfair font-bold mb-2">
          {title}
        </h3>
        <p className="text-accent-10 text-[18px] font-playfair font-normal mb-2">
          {description}
        </p>
        <p className="text-primary-20 text-[20px] font-playfair font-bold mb-4">
          {price}
        </p>
      </div>

      {/* Order Now Button */}
       <Button className="absolute -bottom-6 mt-auto" onClick={() => alert("Learn More!")}>Order Now</Button>
      
    </div>
  );
};

export default Card;
