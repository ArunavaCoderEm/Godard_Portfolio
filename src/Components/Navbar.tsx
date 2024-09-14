import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

export default function Navbar(props: any): React.ReactNode {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [menu, setMenu] = useState<string>("home");
  const [hei, sethei] = useState<number>(0);

  const toggleMenu = (): void => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      sethei(window.scrollY || document.documentElement.scrollTop);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0.5, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.0,
        duration: 0.4,
        ease: "easeInOut",
      }}
      className={`transition-all mukta-medium tracking-wider duration-300 ${
        hei > 150 ? "backdrop-blur-sm bg-[#0F0F0F]/90" : "bg-[#0F0F0F]"
      } shadow-md fixed top-0 left-0 right-0 z-[51]`}
    >
      <div className="flex h-16 items-center px-4 md:px-6 w-full">
        <a
          href={props.home}
          onClick={() => setMenu("home")}
          className="mr-6 flex items-center text-black hover:text-gray-800 transition-colors duration-300"
        >
          <span className="anton-sc-regular hover:text-white text-[#6EACDA] transition-all duration-200 tracking-wide text-2xl selection:bg-[#FFF250]">
            <span className="font-extrabold">.</span>
            GODARD
            <span className="font-extrabold">.</span>
          </span>
        </a>
        <div className="ml-auto flex items-center md:hidden">
          <button onClick={toggleMenu} className="p-2 focus:outline-none">
            {menuOpen ? (
              <CloseIcon className="h-6 w-6" />
            ) : (
              <HamburgerIcon className="h-6 w-6" />
            )}
          </button>
        </div>
        <div className="hidden md:flex flex-1 justify-center">
          <nav className="flex selection:bg-[#FFF250] items-center gap-4 sm:gap-6">
            <a
              onClick={() => setMenu("home")}
              href={props.home}
              className={`text-sm w-20 text-center rounded-lg p-2 transition-all duration-300 font-semibold hover:underline hover:text-[#6EACDA] underline-offset-4 ${
                menu === "home"
                  ? "text-[#6EACDA] inssha underline sha underline-offset-4"
                  : "text-white"
              }`}
            >
              <span className="relative z-10">Home</span>
            </a>
            <a
              onClick={() => setMenu("projects")}
              href={props.projects}
              className={`text-sm w-20 text-center rounded-lg p-2 font-semibold hover:underline hover:text-[#6EACDA] underline-offset-4 ${
                menu === "projects"
                  ? "text-[#6EACDA] sha underline underline-offset-4 inssha"
                  : "text-white"
              }`}
            >
              <span className="relative z-10">Projects</span>
            </a>
            <a
              onClick={() => setMenu("about")}
              href={props.about}
              className={`text-sm w-20 text-center rounded-lg p-2 transition-all duration-300 font-semibold hover:underline hover:text-[#6EACDA] underline-offset-4 ${
                menu === "about"
                  ? "text-[#6EACDA] sha underline underline-offset-4 inssha"
                  : "text-white"
              }`}
            >
              <span className="relative z-10">About</span>
            </a>
            <a
              onClick={() => setMenu("skills")}
              href={props.skills}
              className={`text-sm w-20 text-center rounded-lg p-2 transition-all duration-300 font-semibold hover:underline hover:text-[#6EACDA] underline-offset-4 ${
                menu === "skills"
                  ? "text-[#6EACDA] sha underline underline-offset-4 inssha"
                  : "text-white"
              }`}
            >
              <span className="relative z-10">Skills</span>
            </a>
          </nav>
        </div>
        <div className="hidden md:flex ml-auto p-2">
          <a
            onClick={() => setMenu("#")}
            href={props.contact}
            className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold mukta rounded-md shadow-2xl group  text-white"
          >
            <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>

            <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>

            <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>

            <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
            <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
            <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
            <span className="relative flex gap-x-3 items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 mx-1"
                fill="white"
                viewBox="0 0 512 512"
              >
                <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
              </svg>
              Contact
            </span>
          </a>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden tracking-wider z-[101] mukta-medium">
          <nav className="flex px-4 flex-col rounded-lg z-[101] items-center gap-4 py-4">
            <a
              onClick={() => setMenu("home")}
              href={props.home}
              className={`text-sm rounded-lg p-2 transition-all duration-300 font-semibold hover:underline hover:text-[#6EACDA] underline-offset-4 ${
                menu === "home"
                  ? "text-[#6EACDA] sha underline underline-offset-4 inssha"
                  : "bg-black text-white"
              } w-80 flex items-center justify-center font-semibold hover:underline underline-offset-4`}
            >
              Home
            </a>
            <a
              onClick={() => setMenu("projects")}
              href={props.projects}
              className={`text-sm rounded-lg p-2 transition-all duration-300 font-semibold hover:underline hover:text-[#6EACDA] underline-offset-4 ${
                menu === "projects"
                  ? "text-[#6EACDA] sha underline underline-offset-4 inssha"
                  : "bg-black text-white"
              } w-80 flex items-center justify-center font-semibold hover:underline underline-offset-4`}
            >
              Projects
            </a>
            <a
              onClick={() => setMenu("about")}
              href={props.about}
              className={`text-sm rounded-lg p-2 transition-all duration-300 font-semibold hover:underline hover:text-[#6EACDA] underline-offset-4 ${
                menu === "about"
                  ? "text-[#6EACDA] sha underline underline-offset-4 inssha"
                  : "bg-black text-white"
              } w-80 flex items-center justify-center font-semibold hover:underline underline-offset-4`}
            >
              About
            </a>
            <a
              onClick={() => setMenu("skills")}
              href={props.skills}
              className={`ttext-sm rounded-lg p-2 transition-all duration-300 font-semibold hover:underline hover:text-[#6EACDA] underline-offset-4 ${
                menu === "skills"
                  ? "text-[#6EACDA] sha underline underline-offset-4 inssha"
                  : "bg-black text-white"
              } w-80 flex items-center justify-center font-semibold hover:underline underline-offset-4`}
            >
              Skills
            </a>
            <a
              onClick={() => setMenu("#")}
              href={props.contact}
              className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold mukta rounded-md shadow-2xl group  text-white"
            >
              <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>

              <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>

              <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>

              <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
              <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
              <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
              <span className="relative flex gap-x-3 items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 mx-1"
                  fill="white"
                  viewBox="0 0 512 512"
                >
                  <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                </svg>
                Contact
              </span>
            </a>
          </nav>
        </div>
      )}
    </motion.header>
  );
}

function HamburgerIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#6EACDA"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function CloseIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="red"
      stroke="red"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}
