import React, { useEffect, useState } from 'react'
import Header from './components/common/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Products from './pages/Products'
import SingleProduct from './pages/SingleProduct'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Singup from './pages/SingnUp'

export default function App() {
  const [user, setUser] = useState(null);
  
  return (
    <>
      <Header user={user} setUser={setUser} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='login' element={<Login setUser={setUser} />} />
        <Route path='signup' element={<Singup />} />

        {/* <Route path='products' element={<Products />} />
        <Route path='products/:slug' element={<SingleProduct />} /> */}
        
        <Route path='products'>
          <Route path='' element={<Products/>}/>
          <Route path=':slug' element={<SingleProduct/>}/>
        </Route>
      </Routes>
      <footer/>
      <ToastContainer/>
    </>

  )
}
