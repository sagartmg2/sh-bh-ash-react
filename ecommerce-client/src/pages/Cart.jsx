import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, decrement, increment } from "../app/slice/cartSlice";

export default function Cart() {
  const cartItems = useSelector((store) => store.cart.value);
  const dispatch = useDispatch();
  return (
    <>
      <div className="container">
        <table className="w-full">
          <thead>
            <tr>
              <th className="border-2 px-4 py-2">Name</th>
              <th className="border-2 px-4 py-2">price</th>
              <th className="border-2 px-4 py-2">Quantity</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => {
              return (
                <tr>
                  <td className="border-2 px-4 py-2">{item.name}</td>
                  <td className="border-2 px-4 py-2">{item.price}</td>
                  <td className="flex items-center gap-3 border-2 px-4 py-2">
                    <button
                      onClick={() => {
                        dispatch(decrement(item));
                      }}
                      className="btn-sm rounded-full text-2xl"
                      type="button"
                    >
                      -
                    </button>
                    {item.quantity}
                    <button 
                      onClick={()=>{
                        dispatch(addToCart(item))
                      }}
                    className="btn-sm bg-primary text-2xl rounded-full" type="button">
                      +
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <button className="btn">Order Now</button>
        <code className="block mt-5">
        use this api https://ecommerce-sagartmg2.vercel.app/api/orders
        </code>
      </div>
    </>
  );
}
