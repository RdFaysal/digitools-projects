import React, { use, useState } from "react";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import { toast } from "react-toastify";

const Products = ({ productPromise, cart, setCart }) => {
  const products = use(productPromise);
  const [activeTab, setActiveTab] = useState("products");

  
  const handleAddToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);

    if (exists) {
      toast.warning("Already added!");
      return;
    }

    setCart([...cart, product]);
    toast.success("Added to cart");
  };

 
  const handleRemove = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
    toast.error("Removed from cart");
  };

  return (
    <div className="max-w-[1080px] mx-auto px-4 py-10">
      
     
      <h2 className="text-2xl font-bold text-center">
        Premium Digital Tools
      </h2>

      <p className="text-center text-gray-500 mt-2">
        Choose from our curated collection of premium digital products.
      </p>

      
      <div className="flex justify-center mt-6">
        <div className="flex border border-gray-100 rounded-full p-1">

          {/* Products Tab */}
          <button
            onClick={() => setActiveTab("products")}
            className={`px-5 py-2 rounded-full transition-all duration-300 ${
              activeTab === "products"
                ? "bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white shadow-md"
                : "text-gray-600"
            }`}
          >
            Products
          </button>

          {/* Cart Tab */}
          <button
            onClick={() => setActiveTab("cart")}
            className={`px-5 py-2 rounded-full transition-all duration-300 ${
              activeTab === "cart"
                ? "bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white shadow-md"
                : "text-gray-600"
            }`}
          >
            Cart ({cart.length})
          </button>

        </div>
      </div>

      
      <div className="mt-8">
        
       
        {activeTab === "products" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Product
                key={product.id}
                product={product}
                handleAddToCart={handleAddToCart}
                 cart={cart} 
              />
            ))}
          </div>
        )}

        
        {activeTab === "cart" && (
          <Cart
            cart={cart}
            handleRemove={handleRemove}
            setCart={setCart}
          />
        )}

      </div>
    </div>
  );
};

export default Products;
