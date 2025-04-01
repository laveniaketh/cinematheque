import React from "react";
import Button from "../components/Button";

const PaymentPage = () => {
  return (
    <div className="wrapper">
      <h1 className="text-6xl font-black leading-none tracking-tight text-gray-900 dark:text-white">
        <span className="text-gradient">Payment</span> Details
      </h1>
      <div className="rounded-lg shadow-lg shadow-[#2D2D2F] bg-[#242424] mt-4 mx-auto h-[525px] w-6xl">
        <div className="flex flex-row justify-evenly items-center h-full p-5">
          <div className="w-80 h-90 rounded-lg bg-[#171718] shadow-[#2D2D2F] shadow-md">
            <div className="flex flex-row items-center justify-center h-full p-5">
              {/* Yellow Film Strips */}
              <div className=" flex flex-col gap-2 mr-4">
                {[...Array(10)].map((_, index) => (
                  <div
                    key={index}
                    className="w-6.5 h-6.5 bg-yellow-400 rounded-sm"
                  ></div>
                ))}
              </div>
              {/* Poster Image */}
              <img
                src="/in-the-mood-for-love-poster.jpg"
                alt="Movie Poster"
                className="w-full h-full object-cover rounded-md"
              />
              {/* Yellow Film Strips */}
              <div className=" flex flex-col gap-2 ml-4">
                {[...Array(10)].map((_, index) => (
                  <div
                    key={index}
                    className="w-6.5 h-6.5 bg-yellow-400 rounded-sm"
                  ></div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col text-white w-xl h-xl p-5 border-2 border-[#2D2D2F] rounded-lg bg-[#171718] shadow-[#2D2D2F] shadow-md">
            <div className=" flex flex-col">
              <h2 className="text-3xl font-bold">In the Mood For Love</h2>
              <br />
              <p className="text-lg">1:00 PM - 3:30 PM</p>
              <p className="text-lg">Seat(s):</p>
            </div>
            <br />
            <div>
              <h2 className="text-3xl font-bold">Payment</h2>
              <br />
              <div className="flex flex-row justify-between">
                <p className="text-lg">A4, A5</p>
                <p className="text-lg">x 2</p>
              </div>
              <div className="w-full border-t-2 rounded-full border-gray-300 my-4 border" />
              <div className="flex flex-row justify-between ">
                <h2 className="text-xl font-bold">Total</h2>
                <h2 className="text-xl font-bold">₱ 200.00</h2>
              </div>
              <div className="flex flex-row items-end justify-between mt-4">
                <Button text="Back" link="/confirmation" />
                <Button text="Next" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
