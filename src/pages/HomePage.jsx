import React from "react";

const Hero = () => {
  return (
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
      <p className=" text-md font-light text-white dark:text-[#777777] px-64">
        showcases independent, classNameic, and world cinema, serving as a hub
        for film communities to nurture local filmmakers and support local
        stories and narratives.
      </p>
      <button
        type="button"
        className="m-3 text-[#171718] bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 shadow-[0_0_20px_5px_rgba(255,221,87,0.6)] hover:shadow-[0_0_30px_10px_rgba(255,221,87,0.8)] font-semibold rounded-full text-medium antialiased px-10 py-2.5 transition-all duration-300 ease-in-out"
      >
        Buy a Ticket
      </button>
    </header>
  );
};

export default Hero;
