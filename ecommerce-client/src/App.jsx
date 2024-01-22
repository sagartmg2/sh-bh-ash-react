import React, { useEffect, useState } from "react";
import Header from "./components/common/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Products from "./pages/products/Products";
import SingleProduct from "./pages/products/SingleProduct";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Singup from "./pages/SingnUp";
import Cart from "./pages/Cart";
import axios from "axios";
import { setUser } from "./app/slice/userSlice";
import { useDispatch } from "react-redux";
import Addproduct from "./pages/products/Addproduct";
import ProtectedRoute from "./components/common/ProtectedRoute";

export default function App() {
  const dispatch = useDispatch();
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    let access_token = localStorage.getItem("access_token");
    if (access_token) {
      axios
        .get("https://ecommerce-sagartmg2.vercel.app/api/users/get-user", {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        })
        .then((res) => {
          setisLoading(false);
          dispatch(setUser(res.data)); // populatate user data in redux  .i.e, users gets logged in
        })
        .catch((err) => {
          setisLoading(false);
        });
    } else {
      setisLoading(false);
    }
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="flex h-screen items-center justify-center">
          <p>logo./ quotes/ spinner</p>
        </div>
      ) : (
        <>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Singup />} />
            <Route path="" element={<ProtectedRoute role="buyer" />}>
              <Route path="carts" element={<Cart />} />
            </Route>

            {/* <Route path='products' element={<Products />} />
        <Route path='products/:slug' element={<SingleProduct />} /> */}

            <Route path="products">
              <Route path="" element={<Products />} />
              <Route path=":slug" element={<SingleProduct />} />
            </Route>
            <Route path="products" element={<ProtectedRoute role="seller" />}>
              <Route path="add" element={<Addproduct />} />
            </Route>
          </Routes>
          <footer />
        </>
      )}

      <ToastContainer />
    </>
  );
}
