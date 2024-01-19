import React from "react";
import { Link } from "react-router-dom";
import {
  CiLogin,
  CiMail,
  CiMenuBurger,
  CiSearch,
  CiShoppingCart,
} from "react-icons/ci";
import { useSelector, useDispatch } from "react-redux";
import { logout, setUser } from "../../app/slice/userSlice";

export default function TopNavBar() {
  const user = useSelector((store) => store.user.value);
  const dispatach = useDispatch();

  const handleLogout = () => {
    // dispatach(setUser(null))  // this is also correct
    dispatach(logout());
  };

  return (
    <nav className="bg-primary py-3 text-white">
      <div className="container flex flex-col items-center  font-semibold  md:flex-row md:justify-between   ">
        <div className="flex items-center gap-2">
          <CiMail className="text-xl text-white" />
          <span>mhhasanul@gmail.com</span>
        </div>

        <div className="flex items-center gap-2">
          {user ? (
            <>
              cart(0)
              <span>{user.name}</span>
              <span onClick={handleLogout}>logout</span>
            </>
          ) : (
            <span>
              <Link to="/login">login</Link>
            </span>
          )}
          <CiShoppingCart className="text-xl text-white" />
        </div>
      </div>
    </nav>
  );
}
