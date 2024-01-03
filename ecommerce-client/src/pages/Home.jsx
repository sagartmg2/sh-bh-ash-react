import React from "react";
import Banner from "../components/home/Banner";
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

      <ul className="container mt-24 sm:mt-28 2xl:mt-[226px] grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
        {[1, 2, 3, 4].map((el) => {
          return <li className="border border-4  group relative">
            <span className="scale-0 group-hover:scale-100 absolute top-0 transition-all">icon</span>
            <img src="/chair.png" className="mx-auto mb-[20px]" alt="" />
            <div className="text-center group-hover:bg-primary group-hover:text-white">
              <p>Cantilever chair</p>
              <p>Code - Y523201</p>
              <p>$42.00</p>
            </div>
          </li>;
        })}
      </ul>
      </div>

    </>
  );
}
