import React from "react";
import Banner from "../components/home/Banner";
import Product from "../components/common/product/Product";
import { CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Banner />
      {/* 
        mobile 360 - 576/640 91px 
        landsapce - 576px 768px  109px 
        tabl - 768 mt-131 
        1024 mt-157px
        1280 mt-189px
        1536  mt- 226px
      */}

      <div className="flex">
        <ul className="container mt-24 grid gap-4 sm:mt-28 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:mt-[226px] ">
          {[1, 2, 3, 4].map((el) => {
            return <Product />;
          })}
        </ul>
      </div>
      <div className="mt-[100px]">
        <h2 className="text-center font-joshephens font-bold text-[40px] text-primary-dark">Latest products</h2>

        <ul className="container grid gap-[31px] md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((el) => {
            return (
              <li className="group relative  border-4  hover:shadow-2xl">
                <Link to="/products/watch">
                  <div className="absolute left-4 bottom-12 flex flex-col gap-2">
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
                  <div className=" flex justify-between px-4 py-4 text-primary ">
                    <p>Cantilever chair</p>
                    <p className="text-secondary">$42.00</p>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
