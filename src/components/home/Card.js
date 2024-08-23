import React from "react";
import Image from "next/image";
import Link from "next/link";
let priceOptions = ["regular", "medium", "large"];
const Card = () => {
  return (
    <div className="box">
      <div className="w-80 rounded-lg bg-white overflow-hidden dark:bg-black border-gradient">
        {/* <Link href={{ pathname: "/Item/[item]" }} as={`Item/${data["_id"]}`}> */}
        <div className="relative w-full h-80">
          {/* <Image
            src="https://images.pexels.com/photos/326278/pexels-photo-326278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            layout="fill"
            objectFit="cover"
            alt="pizza"
          /> */}
        </div>
        <div className="p-4">
          <div lassName="font-bold mb-2 text-xl uppercase"> Pizza Name</div>
          <p className=" short_description text-gray-700 dark:text-gray-400 text-base">
            description
          </p>
        </div>
        {/* </Link> */}
        <div className="flex px-4 justify-between">
          <select
            className=" h-100  p-1 text-black hover:font-bold font-semibold cursor-pointer dark:text-gray-300  border border-black dark:border-gray-400 rounded"
            // onChange={handleQty}
          >
            {Array.from(Array(6), (e, i) => {
              return (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              );
            })}
          </select>
          <select
            className=" h-100  p-1 text-black hover:font-bold font-semibold cursor-pointer dark:text-gray-300  border border-black dark:border-gray-400 rounded"
            // onChange={handleSize}
          >
            {priceOptions.map((options) => {
              return (
                <option className="uppercase" key={options} value={options}>
                  {options}
                </option>
              );
            })}
          </select>
        </div>
        <div className="flex p-4 font-bold  justify-between">
          <button
            // onClick={handleAddToCart}
            className="border dark:border-gray-400 border-gray-900 rounded p-2 hover:bg-gradient-to-r from-indigo-700 via-violet-700 to-orange-700  hover:text-gray-100 "
          >
            Add to cart
          </button>
          <p className="p-2 text-xl">₹500/-</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
