import React from "react";
import Heading from "../../Shared/Heading/Heading";
import Button from "../../Shared/Button/Button";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  highlighted?: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  highlighted = false,
}) => {
  return (
    <div
      className={`flex flex-col items-center justify-center text-center bg-${
        highlighted ? "primary-10" : "white"
      } rounded-lg p-6 shadow-md w-[250px] h-[200px]`}
    >
      <div className="mb-4 text-primary-20">{icon}</div>
      <h3 className="text-primary-20 text-[22px] font-bold mb-2">{title}</h3>
      <p className="text-accent-10 text-[16px] font-normal">{description}</p>
    </div>
  );
};

const WhyAreWeDifferent: React.FC = () => {
  return (
    <div className="flex flex-col items-center bg-white py-16 px-4 md:px-20">
      {/* Heading */}
      <Heading
        heading="Discover the best coffee?"
        description="We don’t just make your coffee, we make your day!"
        align="center" 
      />

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        <FeatureCard
          icon={<i className="fas fa-seedling text-4xl"></i>}
          title="Supreme Beans"
          description="Beans that provide great taste"
          highlighted={true}
        />
        <FeatureCard
          icon={<i className="fas fa-award text-4xl"></i>}
          title="High Quality"
          description="We provide the highest quality"
        />
        <FeatureCard
          icon={<i className="fas fa-coffee text-4xl"></i>}
          title="Extraordinary"
          description="Coffee like you have never tasted"
        />
        <FeatureCard
          icon={<i className="fas fa-dollar-sign text-4xl"></i>}
          title="Affordable Price"
          description="Our coffee prices are easy to afford"
        />
      </div>

      {/* Bottom Section */}
      <div className="text-center">
        <p className="text-accent-10 text-[18px] font-normal mb-4">
          Great ideas start with great coffee. Let us help you achieve that.
        </p>
        <Button onClick={() => alert("Learn More!")}>Join Us</Button>
      </div>
    </div>
  );
};

export default WhyAreWeDifferent;
