import React, { useEffect } from 'react'
import Header from './components/common/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Products from './pages/Products'
import SingleProduct from './pages/SingleProduct'


export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='login' element={<Login />} />

        {/* <Route path='products' element={<Products />} />
        <Route path='products/:slug' element={<SingleProduct />} /> */}
        
        <Route path='products'>
          <Route path='' element={<Products/>}/>
          <Route path=':slug' element={<SingleProduct/>}/>
        </Route>
      </Routes>
      <footer/>
    </>

  )
}
