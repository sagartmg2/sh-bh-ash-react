import React, { useEffect } from 'react'
import Header from './components/common/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Products from './pages/Products'
import SingleProduct from './pages/SingleProduct'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Singup from './pages/SingnUp'
import Cart from './pages/Cart'
import axios from 'axios'
import { setUser } from './app/slice/userSlice'
import { useDispatch } from 'react-redux'

export default function App() {
  const dispatch = useDispatch()
  
  useEffect(() =>{
    let access_token =  localStorage.getItem("access_token")
    if(access_token){
      axios.get("https://ecommerce-sagartmg2.vercel.app/api/users/get-user",{
        headers:{
          Authorization:`Bearer ${access_token}` 
        }
      })
      .then(res =>{
        dispatch(setUser(res.data)) // populatate user data in redux
      })
      .catch(err =>{

      })
    }
  },[])

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Singup />} />
        <Route path='carts' element={<Cart />} />

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
