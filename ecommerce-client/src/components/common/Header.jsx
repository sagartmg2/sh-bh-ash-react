import { Link } from "react-router-dom";
import {
  CiLogin,
  CiMail,
  CiMenuBurger,
  CiSearch,
  CiShoppingCart,
} from "react-icons/ci";

export default function Header() {
  return (
    <header className="">
      <nav className="bg-primary py-3 text-white">
        <div className="container flex flex-col items-center  font-semibold  md:flex-row md:justify-between  ">
          <div className="flex items-center gap-2">
            <CiMail className="text-xl text-white" />
            <span>mhhasanul@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <span>login</span>
            <CiShoppingCart className="text-xl text-white" />
          </div>
        </div>
      </nav>
      <nav className="container flex items-center justify-between flex-wrap ">
        <span className="text-blue- text-[34px] font-semibold">Hekto</span>
        <CiMenuBurger className="text-2xl lg:hidden" />

        <ul className="w-full transition-all max-h-[999px] overflow-hidden  flex flex-col items-center lg:flex-row lg:gap-4 ">
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/products">products</Link>
          </li>
        </ul>
        <form className="hidden lg:block">
          <input className="border border-[#E7E6EF]" type="text" />
          <button className="bg-secondary">
            <CiSearch className="text-white" />
          </button>
        </form>
      </nav>
    </header>
  );
}
