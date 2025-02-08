import React from "react";
import Heading from "../../Shared/Heading/Heading";
import Card from "../../Shared/Cards/Cards";
import { IMAGES } from "../../../assets";

const NewBrands = () => {
  return (
    <div className="flex flex-col items-center justify-between bg-white py-16">
      <Heading
        heading="Enjoy a new blend of coffee style"
        description="Explore all flavours of coffee with us. There is always a new cup worth experiencing"
        align="center"
        coffeeSplash={true}
      />

      <div className="my-10 grid grid-cols-4 gap-4">
        <Card
          image={IMAGES.coffeeMug} // Replace with your image path
          title="Cappuccino"
          description="Coffee 50% | Milk 50%"
          price="$8.50"
          onButtonClick={() => alert("Cappuccino ordered!")}
        />
        <Card
          image={IMAGES.coffeeMug} // Replace with your image path
          title="Cappuccino"
          description="Coffee 50% | Milk 50%"
          price="$8.50"
          onButtonClick={() => alert("Cappuccino ordered!")}
        />
        <Card
          image={IMAGES.coffeeMug} // Replace with your image path
          title="Cappuccino"
          description="Coffee 50% | Milk 50%"
          price="$8.50"
          onButtonClick={() => alert("Cappuccino ordered!")}
        />
        <Card
          image={IMAGES.coffeeMug} // Replace with your image path
          title="Cappuccino"
          description="Coffee 50% | Milk 50%"
          price="$8.50"
          onButtonClick={() => alert("Cappuccino ordered!")}
        />
      </div>
    </div>
  );
};

export default NewBrands;
