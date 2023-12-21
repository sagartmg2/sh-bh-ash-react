import axios from 'axios'
import React, { useEffect, useState } from 'react'

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

  useEffect(() => {
    fetchApiData()
    /* componentDidMount */
  }, [])

  return (
    <>
      <button className='btn' onClick={fetchApiData}>fetch Product</button>
      <div>ApiProducts</div>
      {
        isLoading
        &&
        <p>loading...</p>
      }
      <ul className='pl-10 grid gap-4   md:grid-cols-2 lg:grid-cols-3 xl:1280 2xl:1536 '>
        {
          products.map((el, index) => {
            return <li key={el.id} className='border p-4 rounded-sm text-center'>
              <img src={el.thumbnail} alt="" className='mx-auto' />
              {el.title}
            </li>
          })
        }

        {products.map((el) => (
          <div className="bg-white p-4 rounded">
            <img src={el.thumbnail} className="w-full h-48 mb-4" />
            <div>
              <h2 className="text-xl font-semibold mb-2">{el.title}</h2>
              <p className="mb-2">{el.description}</p>
              <p className="text-green-700 font-bold">Price: ${el.price}</p>
            </div>
          </div>
        ))}
      </ul>

    </>
  )
}
