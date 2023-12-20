import axios from 'axios'
import React, { useState, useEffect } from 'react'

export default function ApiProductsAutoLoad() {
  console.log("re-render");
  const [products, setProducts] = useState([])
  const [isLoading, setisLoading] = useState(true)


    // this will case infinite re-rendering..
    // axios.get("https://dummyjson.com/products")
    // .then((res) => {
    //   setProducts(res.data.products)
    // }) 

  useEffect(() => {
    axios.get("https://dummyjson.com/products")
      .then((res) => {
        setisLoading(false)
        console.log(res.data.products)
        setProducts(res.data.products)
      })
  }, [])

  return (
    <>
      component lifecylce
      <ul className='hidden'>
        <li>didMount</li>
        <li>didUpdate</li>
        <li>didunmount</li>
      </ul>
      <div>ApiProducts</div>
      {
        isLoading
        &&
        <p>loading...</p>
      }
      <ul className='pl-10 list-disc'>
        {
          products.map(el => {
            return <li key={el.id}>
              <img src={el.thumbnail} alt="" />
              {el.title}
            </li>
          })
        }
      </ul>

    </>
  )
}
