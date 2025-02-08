import React from "react";
import { IMAGES } from "../../../assets";

interface SectionProps {
  heading: string;
  description: string;
  align?: "left" | "center";
  className?: string;
  coffeeSplash?: boolean;
}

const Heading: React.FC<SectionProps> = ({
  heading,
  description,
  align = "left",
  className = "",
  coffeeSplash = false,
}) => {
  const textAlignment = align === "center" ? "text-center" : "text-left";
  const descriptionAlignment = align === "center" ? "text-center" : "text-left";

  return (
    <div className={`w-full relative flex flex-col items-${align} ${className} `}>
      {/* Coffee Splash Image */}
      {/* {coffeeSplash && (
        <div className="absolute -top-16 -left-[] w-full flex justify-center">
          <img
            src={IMAGES.coffee_splash}
            alt="Coffee Splash"
            className="w-[80%] max-w-[600px] object-contain"
          />
        </div>
      )} */}

      {/* Heading */}
      <h2
        className={`text-primary-20 text-[54px] font-playfair font-bold mb-4 z-10 ${textAlignment}`}
      >
        {heading}
      </h2>

      {/* Description */}
      <p
        className={`text-accent-10 text-[20px] font-playfair font-normal leading-[34px] mb-6 z-10 ${descriptionAlignment}`}
      >
        {description}
      </p>
    </div>
  );
};

export default Heading;
