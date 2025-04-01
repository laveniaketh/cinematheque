import React from "react";
import Button from "../components/Button";

const Hero = () => {
  return (
    <div>
      <div className="wrapper">
        <header className="text-center">
          <img
            src="./banner2.png"
            alt="Hero Banner"
            className="w-full max-w-4xl h-auto object-contain mx-auto drop-shadow-md"
          />
          <h1 className="mb-2 text-6xl font-black leading-none tracking-tight text-gray-900 md:text-5xl lg:text-8xl dark:text-white">
            <span className="text-gradient">Cinema</span>theque
          </h1>
          <p className="text-md font-light text-white dark:text-[#777777] px-64 ">
            A CAREFULLY CURATED FILMS FOR ALL
          </p>
          <p className=" text-md font-light text-white dark:text-[#777777] px-64 mb-4">
            showcases independent, classNameic, and world cinema, serving as a
            hub for film communities to nurture local filmmakers and support
            local stories and narratives.
          </p>
          <Button text="Buy a ticket" link="/select-movie" />
        </header>
      </div>
    </div>
  );
};

export default Hero;
