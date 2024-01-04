import React from 'react'
import { CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";
export default function Product() {
  return (
    <li className="group relative  border-4  hover:shadow-2xl">
    <Link to="/products/watch">
      <div className="flex absolute gap-2 left-4 top-4">
        <span
          onClick={() => {
            alert("added to cart");
          }}
          className="  flex-center h-[30px] w-[30px] scale-0 rounded-full bg-primary-light transition-all group-hover:scale-100 "
        >
          <CiShoppingCart className="text-primary" />{" "}
        </span>
        <span
          onClick={() => {
            alert("added to cart");
          }}
          className="  flex-center  h-[30px] w-[30px] scale-0 rounded-full bg-primary-light transition-all group-hover:scale-100 "
        >
          <CiShoppingCart className="text-primary" />{" "}
        </span>
      </div>
      <img src="/chair.png" className="mx-auto mb-[20px]" alt="" />
      <div className="py-4 text-center group-hover:bg-primary group-hover:text-white">
        <p>Cantilever chair</p>
        <p>Code - Y523201</p>
        <p>$42.00</p>
      </div>
    </Link>
  </li>
  )
}
