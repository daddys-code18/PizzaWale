import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="text-white-100 bg-gradient-to-br from-indigo-500 via-violet-500  to-orange-600 body-font">
      <div className=" container mx-auto text-white flex flex-wrap p-3 flex-col md:flex-row items-center">
        <Link
          href={"/"}
          className="flex title-font font-extrabold items-center  uppercase text-gray-100"
        >
          <Image alt="Navbar Logo" src={"/Pizza.svg"} width={60} height={60} />
          <p className="leading-5 text-xl mx-2">Pizza Wale</p>
        </Link>
        <p className="text-sm text-gray-100 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          Copyright © 2024 Pizza Wale
        </p>
      </div>
    </footer>
  );
};

export default Footer;
