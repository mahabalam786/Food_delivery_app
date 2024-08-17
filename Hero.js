import React from "react";
import hero from "../images/hero.webp";
import TextGradient from "./TextGradient";

const Hero = () => {
  return (
    <div className="h-[65vh] relative  w-full mb-10  ">
      <img
        className="h-[65vh] brightness-50  w-full object-cover"
        src={hero}
        alt="banner"
      />
      <div className="absolute h-fit gap-5 text-white w-full top-[20%] translate-y-[50] p-4 text-center flex flex-col justify-center items-center">
        <TextGradient>FOODIEZZ</TextGradient>
        <p className="text-xl capitalize font-semibold ">
          Serving the most incredible food,
        </p>
        <p className="text-xl capitalize font-semibold">
          Explore menus to find your next great meal.
        </p>
      </div>
    </div>
  );
};

export default Hero;
