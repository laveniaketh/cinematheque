import React from "react";
import { Link } from "react-router-dom";

const Button = ({ text, link, state, disabled, onClick }) => {
  return link ? (
    <Link
      to={link}
      state={state} // Pass state to the Link component
      className={`m-3 text-[#171718] bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 shadow-[0_0_20px_5px_rgba(255,221,87,0.6)] hover:shadow-[0_0_30px_10px_rgba(255,221,87,0.8)] font-semibold rounded-full text-medium antialiased px-10 py-2.5 transition-all duration-300 ease-in-out ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
      style={disabled ? { pointerEvents: "none" } : {}}
    >
      {text}
    </Link>
  ) : (
    <button
      type="button"
      className={`m-3 text-[#171718] bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 shadow-[0_0_20px_5px_rgba(255,221,87,0.6)] hover:shadow-[0_0_30px_10px_rgba(255,221,87,0.8)] font-semibold rounded-full text-medium antialiased px-10 py-2.5 transition-all duration-300 ease-in-out ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
      disabled={disabled}
      onClick={onClick} // Call the onClick function when the button is clicked
    >
      {text}
    </button>
  );
};

export default Button;
