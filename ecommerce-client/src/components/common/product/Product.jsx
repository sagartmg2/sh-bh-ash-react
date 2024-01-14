import React from "react";
import { CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";

export default function Product({ product }) {  //product={image,name,price}
  return (
    <li className="group relative  border-4  hover:shadow-2xl">
      <Link to={`/products/${product._id}`}>
        <div className="absolute left-4 top-4 flex gap-2">
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
        <img src={product.image} className="h-[200px] mx-auto mb-[20px] w-full object-cover" alt="" />
        <div className="py-4 text-center group-hover:bg-primary group-hover:text-white">
          <p>{product.name}</p>
          <p>Code - Y523201</p>
          <p>{product.price}</p>
        </div>
      </Link>
    </li>
  );
}
