import React, { useEffect } from "react";
import Banner from "../components/home/Banner";
import Product from "../components/common/product/Product";
import { CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import ProductLoader from "../components/common/product/ProductLoader";



export default function Home() {

  const [isLoadingLatestProduct, setIsLoadingLatestProduct] = useState(true)
  const [isLoadingTrendingProduct, setIsLoadingTrendingProduct] = useState(true)
  const [latestProducts,setLatestProduct] = useState([])
  const [trendingProducts,setTrendingPrducts] = useState([])

  useEffect(() =>{
    
     
  axios.get('https://ecommerce-sagartmg2.vercel.app/api/products/trending')
  .then((res) =>{
    // console.log(res.data.data)
    setTrendingPrducts(res.data.data)
    setIsLoadingTrendingProduct(false)
    /* 
    [
      {
            "_id": "64549d085e021d67be48e82a",
            "name": "PC",
            "price": 10000,
            "count": 2,
            "image": "http://res.cloudinary.com/dtv8dtpkm/image/upload/v1683266823/lbrkqamcqdsz4lgl6was.jpg"
        },
      {...}
    ],
         */
    
  })
  .catch(err =>{
    console.log(err)
  })

  axios.get('https://ecommerce-sagartmg2.vercel.app/api/products?per_page=6')
  .then((res) =>{
    setLatestProduct(res.data.products) //[ {},{}]
    setIsLoadingLatestProduct(false)
  })
  .catch(err =>{
    console.log(err)
  })

  return () =>{
    /* clean up function */
    // clearTimeout()
  }

  },[]) // [] this will run only once during compontent mount

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
          {
            isLoadingTrendingProduct
            &&
            [1,2,3,4].map(el =>{
              return <ProductLoader/>
            })
          }
          {trendingProducts.map((el) => {
            return <Product key={el._id} product = {el} />;
          })}
        </ul>
      </div>
      <div className="mt-[100px]">
        <h2 className="text-center font-joshephens font-bold text-[40px] text-primary-dark">Latest products</h2>

        <ul className="container grid gap-[31px] md:grid-cols-2 lg:grid-cols-3">
        {
            isLoadingLatestProduct
            &&
            [1,2,3,4,5,6].map(el =>{
              return <ProductLoader/>
            })
          }
          {latestProducts.map((product) => {  // product ={name,image,price}
            return (
              <li className="group relative  border-4  hover:shadow-2xl">
                <Link to={`/products/${product._id}`}>
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
                  {/* {
                    product.image ?
                  <img src={product.image} className="mx-auto mb-[20px] h-[200px] object-cover" alt="" />
                  :
                  <img src={"/assets/images/no-image.jpg"} className="mx-auto mb-[20px]" alt="" />
                  } */}

                  {/* <img src={product.image ? product.image : "no-image.jpg"} className="mx-auto mb-[20px]" alt="" /> */}
                  <img src={product.image || "/assets/images/no-image.jpg"} className="mx-auto mb-[20px] h-[200px] w-full object-cover " alt="" />
                  <div className=" flex justify-between px-4 py-4 text-primary ">
                    <p>{product.name}</p>
                    <p className="text-secondary">{product.price}</p>
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
