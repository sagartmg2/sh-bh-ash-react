import { Link } from "react-router-dom";
import {
  CiLogin,
  CiMail,
  CiMenuBurger,
  CiSearch,
  CiShoppingCart,
} from "react-icons/ci";
import { useState } from "react";
import { useSelector } from "react-redux";
import TopNavBar from "./TopNavBar";
import BuyerComponent from "./BuyerComponent";
import SellerComponent from "./SellerComponent";
import ProtectedComponent from "./ProtectedComponent";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const user = useSelector((store) => store.user.value); //

  const toggleMenu = () => {
    // setIsMenuOpen(!isMenuOpen)
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="">
      <TopNavBar />
      <nav className=" container flex flex-wrap items-center justify-between ">
        <span className="text-blue- text-[34px] font-semibold">Hekto</span>
        <CiMenuBurger
          onClick={() => {
            setIsMenuOpen((prev) => !prev);
          }}
          className="text-2xl lg:hidden"
        />
        <ul
          className={`${
            isMenuOpen ? "max-h-[999px]" : "max-h-0 lg:max-h-full"
          }   flex w-full flex-col items-center  overflow-hidden transition-all duration-500 lg:w-auto lg:flex-row lg:gap-4 `}
        >
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/products">products</Link>
          </li>
          {/* {user.role == "buyer" && (
                <li>
                  <Link to="/carts">carts</Link>
                </li>
              )} */}
          <BuyerComponent>
            <li>
              <Link to="/carts">carts</Link>
            </li>
          </BuyerComponent>
          {/* {user.role == "seller" && (
            <>
              <li>
                <Link to="/products/add">add-products</Link>
              </li>
            </>
          )} */}

          {/* <SellerComponent>
            <li>
              <Link to="/products/add">add-products</Link>
            </li>
          </SellerComponent> */}
           
          <ProtectedComponent role="seller">
            <li>
              <Link to="/products/add">add-products</Link>
            </li>
          </ProtectedComponent>
        </ul>
        <form className="flex w-full justify-center lg:w-auto">
          <input
            className="border border-[#E7E6EF] px-3 focus:border-secondary focus:outline-none"
            type="text"
          />
          <button type="submit" className="bg-secondary px-1">
            <CiSearch className="text-white" />
          </button>
        </form>
      </nav>
    </header>
  );
}
