import React from "react";
import { FaCheck } from "react-icons/fa";

const Product = ({ product, handleAddToCart, cart }) => {
  const { name, description, tag, tagType, price, period, image, features } =
    product;

  
  const isAdded = cart.find((item) => item.id === product.id);

  const tagColor =
    tagType === "popular"
      ? "bg-[#B4D2E2] text-purple-500"
      : tagType === "new"
      ? "bg-[#DBFCE7] text-[#0A883E]"
      : tagType === "best"
      ? "bg-[#FEF3C6] text-[#BB4D00]"
      : "bg-gray-400";

  return (
    <div className="card bg-base-100 shadow-md p-5 space-y-4 relative rounded-2xl hover:shadow-xl transition duration-300">
      
      <span
        className={`absolute top-3 right-3 text-xs sm:text-sm px-3 py-1 rounded-full shadow-sm ${tagColor}`}
      >
        {tag}
      </span>

      <div className="flex justify-start">
        <img
          src={image}
          alt={name}
          className="w-10 h-10 sm:w-12 sm:h-12 border border-gray-200 rounded-full p-2"
        />
      </div>

      <h2 className="text-base sm:text-lg font-bold">{name}</h2>

      <p className="text-gray-500 text-xs sm:text-sm">{description}</p>

      <p className="font-semibold">
        ${price}{" "}
        <span className="text-xs sm:text-sm text-gray-400">/{period}</span>
      </p>

      <ul className="text-xs sm:text-sm space-y-1">
        {features.map((item, i) => (
          <li key={i} className="flex items-center gap-2">
            <FaCheck className="text-green-500" />
            {item}
          </li>
        ))}
      </ul>

      
      <button
        onClick={() => handleAddToCart(product)}
        disabled={isAdded}
        className={`btn w-full rounded-3xl text-white transition-all duration-300 ${
          isAdded
            ? "bg-green-500 cursor-not-allowed"
            : "bg-gradient-to-r from-[#4F39F6] to-[#9514FA]"
        }`}
      >
        {isAdded ? "Added" : "Buy Now"}
      </button>
    </div>
  );
};

export default Product;
