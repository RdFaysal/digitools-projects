import React from "react";
import { toast } from "react-toastify";

const Cart = ({ cart, handleRemove, setCart }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="space-y-4">
      {cart.length === 0 ? (
        <p className="text-center text-gray-500">Cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item.id}
              className="bg-gray-100 flex justify-between items-center  p-3 rounded-lg"
            >
              <div className="flex items-center gap-3">
                <img src={item.image} className="w-10" />
                <div>
                    <p className="text-medium">{item.name}</p>
                 <p className="text-gray-400">${item.price}</p>
                </div>
              </div>

             
               
                <button
                  onClick={() => handleRemove(item.id)}
                  className="text-red-500"
                >
                  Remove
                </button>
              
            </div>
          ))}

          <div className="flex justify-between ">
            <p className="text-gray-400"> Total - </p>
            <h3 className="text-lg font-semibold"> ${total}</h3>
          </div>

          <button
            onClick={() => {
              setCart([]);
              toast.success("Checkout complete");
            }}
            className="btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-3xl w-full"
          >
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
