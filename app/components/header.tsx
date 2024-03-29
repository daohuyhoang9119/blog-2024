"use client";
import React from "react";
import Link from "next/link";
const Header = () => {
  return (
    <>
      <React.Fragment>
        <header className=" bg-[#ffffff] relative h-auto items-center xl:max-w-screen-3xl py-10 px-[500px] mx-auto">
          <nav className="flex font-serif items-center justify-between sm:flex-row ">
            <div className="flex space-x-1 overflow-auto">
              <Link
                href="/"
                className="py-1 px-4 font-bold text-3xl text-black  ease-in duration-100 hover:-translate-y-2"
              >
                Home
              </Link>
              <Link
                href="/writting"
                className="py-1 px-4 font-bold text-3xl text-black ease-in duration-100 hover:-translate-y-2"
              >
                Writting
              </Link>
              <Link
                href="/projects"
                className=" py-1 px-4 font-bold text-3xl text-black ease-in duration-100 hover:-translate-y-2"
              >
                Projects
              </Link>
            </div>
            <div className="">
              <p className="font-bold text-3xl text-black cursor-pointer  ease-in duration-100 hover:-translate-y-2">
                Green
              </p>
            </div>
          </nav>
        </header>
      </React.Fragment>
    </>
  );
};

export default Header;
