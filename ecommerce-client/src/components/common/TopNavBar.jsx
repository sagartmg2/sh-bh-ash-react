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
import BuyerComponent from "./BuyerComponent";
import ProtectedComponent from "./ProtectedComponent";

export default function TopNavBar() {

  // const user = useSelector((store) => store.user.value);
  // const cart = useSelector((store) => store.cart.value);

  const reduxStore = useSelector((store) => store);
  const user = reduxStore.user.value;
  const cart = reduxStore.cart.value;


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
        {/* falsy values
              false
              null
              undefined
              0
              NaN
              ""

               if(!false){
                
               }
        */}

        <div className="flex items-center gap-2">
          <BuyerComponent>cart({cart})</BuyerComponent>
          {user ? (
            <>
              <span>{user.name}</span>
              {/* <span onClick={handleLogout}>logout</span> */}
              <span
                onClick={() => {
                  dispatach(logout());
                }}
              >
                logout
              </span>
            </>
          ) : (
            <span>
              <Link to="/login">login</Link>
            </span>
          )}
          {/* {user.role == "buyer" && (
            <CiShoppingCart className="text-xl text-white" />
          )} */}
          {/* <BuyerComponent>
            <CiShoppingCart className="text-xl text-white" />
          </BuyerComponent> */}
          <ProtectedComponent role="buyer">
            <CiShoppingCart className="text-xl text-white" />
          </ProtectedComponent>
        </div>
      </div>
    </nav>
  );
}
