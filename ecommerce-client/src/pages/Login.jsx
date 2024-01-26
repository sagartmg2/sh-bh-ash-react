import React from "react";
import BreadCrumb from "../components/common/BreadCrumb";
import axios from "axios";
import {  toast } from 'react-toastify';
import { useNavigate,Link, Navigate } from "react-router-dom";
import { setUser } from "../app/slice/userSlice";
import { useDispatch } from "react-redux";
import { API_URL } from "../constants/domain";

export default function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleSubmit = (event) =>{
    event.preventDefault()
    axios.post(`${API_URL}/users/login`,{
      email:event.target.email.value,
      password:event.target.password.value
    })
    .then(res =>{
      // when status code in 2's line
      toast("Login successful!")
      console.log(res.data.user)
      navigate("/")
      dispatch(setUser(res.data.user))
      localStorage.setItem("access_token",res.data.access_token)
      
    })
    .catch(err =>{
      toast.error("Inavld creadentails")
      // when status code 3,4,5 
    })
  }
 

  return (
    <>
      <BreadCrumb
        title={"login"}
        links={[
          { title: "Home", url: "/" },
          { title: "Login", url: "#" },
        ]}
      />
      <div className="w-full max-w-xs container my-20">
        <form onSubmit={handleSubmit}className="mb-4 rounded bg-white px-8 pb-8 pt-6 shadow-md">
          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              for="email"
            >
              email
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              id="email"
              // value={"b@b.com"}
              type="email"
              name="email"
              placeholder="email"
            />
          </div>
          <div className="mb-6">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              for="password"
            >
              Password
            </label>
            <input
              className="focus:shadow-outline mb-3 w-full appearance-none rounded border border-red-5000 px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              id="password"
              type="password"
              value= "password"
              name="password"
              placeholder="******************"
            />
            {/* <p className="text-xs italic text-red-5000">
              Please choose a password.
            </p> */}
          </div>
          <div className="flex items-center justify-between">
            <button
              className="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
              type="submit"
            >
              Sign In
            </button>
            <a
              className="inline-block align-baseline text-sm font-bold text-blue-500 hover:text-blue-800"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
        </form>
        <span>No account ?</span><Link to="/signup">signup</Link>
        <p className="text-center text-xs text-gray-500">
          &copy;2020 Acme Corp. All rights reserved.
        </p>
      </div>
    </>
  );
}
