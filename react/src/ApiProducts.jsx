import axios from 'axios'
import React, { useState } from 'react'

export default function ApiProducts() {
  const [products, setProducts] = useState([])
  const [isLoading, setisLoading] = useState(false)

  function fetchApiData() {
    setisLoading(true)
    axios.get("https://dummyjson.com/products")
      .then((res) => {
        setisLoading(false)
        console.log(res.data.products)
        setProducts(res.data.products)
      })
  }

  return (
    <>
      <button className='btn' onClick={fetchApiData}>fetch Product</button>
      <div>ApiProducts</div>
      {
        isLoading
        &&
        <p>loading...</p>
      }
      <ul className='pl-10 list-disc'>
        {
          products.map(el => {
            return <li>
              {el.title}
            </li>
          })
        }
      </ul>

    </>
  )
}
