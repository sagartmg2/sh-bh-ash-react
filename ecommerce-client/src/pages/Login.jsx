import React from "react";
import BreadCrumb from "../components/common/BreadCrumb";
import axios from "axios";
import {  toast } from 'react-toastify';
import { useNavigate,Link } from "react-router-dom";

export default function Login({setUser}) {
  const navigate = useNavigate()

  const handleSubmit = (event) =>{
    event.preventDefault()
    axios.post("https://ecommerce-sagartmg2.vercel.app/api/users/login",{
      email:event.target.email.value,
      password:event.target.password.value
    })
    .then(res =>{
      // when status code in 2's line
      // let naame = fullName
      toast("Login successful!")
      console.log(res.data.user)
      setUser(res.data.user)
      navigate("/")
      
    })
    .catch(err =>{
      console.log(err)
      if(err.response?.status === 401){
        return toast.error("Inavld creadentails")
      }
      toast.error("Something Went Wrong. try again later")

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
              // value={"em@gmail.com"}
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
