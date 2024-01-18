import React from 'react'
import { Link } from "react-router-dom";

import {
  CiLogin,
  CiMail,
  CiMenuBurger,
  CiSearch,
  CiShoppingCart,
} from "react-icons/ci";

export default function TopNavBar({user,setUser}) {
  return (
    <nav className="bg-primary py-3 text-white">
        <div className="container flex flex-col items-center  font-semibold  md:flex-row md:justify-between   ">
          <div className="flex items-center gap-2">
            <CiMail className="text-xl text-white" />
            <span>mhhasanul@gmail.com</span>
          </div>
          <span onClick={() =>{
            setUser({
              name:"ram"
            })
          }}>simulate Login {JSON.stringify(user)}</span>
          
          {/* buyerName
          &nbsp;
          logout */}

          <div className="flex items-center gap-2">
            {
              user
              ?
              <>
              <span onClick={() =>{
                setUser(null)
              }}>logout</span>
              <span>{user.name}</span>
              </>
              :
              <>
              <span><Link to="/login">login</Link></span>
              </>
            }
            <CiShoppingCart className="text-xl text-white" />
          </div>
        </div>
      </nav>
  )
}
