import React from "react";
import BreadCrumb from "../components/common/BreadCrumb";
import axios from "axios";
import {  toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

export default function Singup() {
  const navigate = useNavigate()

  const handleSubmit = (event) =>{
    event.preventDefault()
    axios.post("https://ecommerce-sagartmg2.vercel.app/api/users/signup",{
      name:event.target.name.value,
      role:event.target.role.value,
      email:event.target.email.value,
      password:event.target.password.value
    })
    .then(res =>{
      // when status code in 2's line
      toast("singup successful!")
      navigate("/login")
      
    })
    .catch(err =>{
        console.log(err)
         /* 
         "errors": [
        {
            "value": "ram@gmail.com",
            "msg": "E-mail already in use",
            "param": "email",
            "location": "body"
        },
        {
            "value": "ram@gmail.com",
            "msg": "E-mail already in use",
            "param": "email",
            "location": "body"
        },
    ]
     */
    let errorMsg = ""
        err.response.data.errors.forEach(el =>{
            errorMsg+= `${el.param}: ${el.msg} , `
        }) 
      toast.error(errorMsg)
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
              for="name"
            >
              name
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              id="name"
              type="text"
              name="name"
              placeholder="name"
            />
          </div>
          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              for="email"
            >
              role
            </label>
            <select name="role" id="">
                <option value="">select</option>
                <option value="seller">seller</option>
                <option value="buyer">buyer</option>
            </select>
          </div>
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
              Sign Up
            </button>
            <a
              className="inline-block align-baseline text-sm font-bold text-blue-500 hover:text-blue-800"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
        </form>
        <p className="text-center text-xs text-gray-500">
          &copy;2020 Acme Corp. All rights reserved.
        </p>
      </div>
    </>
  );
}
