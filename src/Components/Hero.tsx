import React from "react";
import { BackgroundBeamsWithCollision } from "./UI/background-beams-with-collision";

export default function Hero(): React.ReactNode {
  return (
    <>
      <BackgroundBeamsWithCollision>
        <div className="grid grid-cols-1 gap-y-10 mt-20 mukta relative">
          <div className="h-screen hidden lg:flex absolute inset-0 justify-center items-center">
            <h1 className="text-left mukta-bold bg-clip-text text-transparent bg-gradient-to-b from-[#6EACDA] via-[#6EACDA] to-white font-extrabold tracking-wider txt opacity-30 selection:bg-[#FFF250]">
              GODARD
            </h1>
          </div>
          <button className="flex items-center w-32 absolute right-0 left-0 mx-auto my-2 backdrop-blur-sm bg-black/30 text-white font-semibold px-4 py-1 rounded-full shadow-lg focus:outline-none">
            <span className="mr-2">✨</span> Home{" "}
            <span className="ml-2">✨</span>
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 p-3 gap-4">
            <div className="flex mt-5 justify-center items-center p-3">
              <div className="blob bg-[url('/me.jpg')] mx-auto lg:mt-[5%] sm:mt-[10%]"></div>
              <h1
                onClick={() => window.scrollTo(0, 550)}
                className="text-xl absolute font-thin cursor-pointer hidden tracking-tight lg:flex h-[75vh] py-1 mb-1 right-0 text-[#FFF250] vertical-text"
              >
                SCROLL DOWN
              </h1>
            </div>
          </div>
        </div>
      </BackgroundBeamsWithCollision>
    </>
  );
}
