import React, { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { Navdata } from "../constant/Navdata";
import { useSelector } from "react-redux";
import { CiSearch } from "react-icons/ci";
import { IoSearch } from "react-icons/io5";

import Search from "../Pages/Search";

const Header = () => {
  const [toggle, settoggle] = useState(false);
  const [inp, setinp] = useState(true);
  const items = useSelector((state) => state.cart.cart);
  
  return (
    <header
      className={`text-black  body-font bg-gradient-to-r from-rose-100 to-teal-100 fixed z-10 w-full h-20 pt-2 mt-[-10px] text-xl font-['https://fonts.googleapis.com/css?family=Sofia']  `}
    >
      {/* desktop */}
      <div className="hidden md:flex justify-around items-center mt-4 -mx-6">
        <NavLink to="/" className="text-4xl uppercase font-bold ">
        Ecommerce
        </NavLink>
        <nav className="flex space-x-6">
          {Navdata.map((data) => {
            return (
              <NavLink
                to={data.Path}
                className={`font-semibold text-xl uppercase  hover:text-green-600`}
              >
                {data.Name}
              </NavLink>
            );
          })}
        </nav>
        <div className="flex items-center">
          {/* serach */}
          <div className="flex items-center justify-center ">
            <div className="flex rounded-full bg-[#0d1829] px-2 w-full max-w-[600px]">
              <button className="self-center flex p-1 cursor-pointer bg-[#0d1829]">
                {" "}
              </button>

              <input
                type="text"
                className="w-44 text-md bg-[#0d1829] flex bg-transparent  text-[#cccccc] outline-0"
                placeholder="Search"
              />
              <button
                type="submit"
                className="relative p-1 h-4 bg-[#0d1829] rounded-full"
              >
                <svg width="20px" height="20px">
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                      stroke="#999"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />{" "}
                  </g>
                </svg>
              </button>
            </div>
          </div>
          <div className="flex px-3 mt-[-8px]">
            <NavLink to="/cart">
              {" "}
              <img
                  src="https://cdn-icons-png.flaticon.com/128/9453/9453946.png"
                  alt=""
                  className="h-10"
                />{" "}            </NavLink>
            <sup className="mt-2  text-orange-500 font-bold">{items.length}</sup>

     </div>
     <NavLink to="/login" className="bg-green-300 px-2 -mt-2 rounded-sm ">Login</NavLink>     
        </div>
      </div>

     

      {/* mobile */}

      <div className="md:hidden">
        <div className="flex flex-col justify-between h-[64px] py-2 z-10  ">
          <div className=" flex justify-between items-cen">
            <div className="flex items-center p-2 ">
              {toggle ? (
                <img
                  className="h-8"
                  src="https://cdn-icons-png.flaticon.com/128/8001/8001499.png"
                  alt=""
                  onClick={() => settoggle(!toggle)}
                />
              ) : (
                <img
                  className="h-10"
                  src="https://cdn-icons-png.flaticon.com/128/10613/10613684.png"
                  alt=""
                  onClick={() => settoggle(!toggle)}
                />
              )}
            </div>
            <NavLink to="/"  className="text-4xl font-bold uppercase mt-2 mx-4 ">
             Ecommerce
            </NavLink>
          
            <div className="flex px-3 mt-1 ">
              <NavLink to="/cart">
                {" "}
                <img
                  src="https://cdn-icons-png.flaticon.com/128/9453/9453946.png"
                  alt=""
                  className="h-10"
                />{" "}
              </NavLink>
              <sup className="mt-2 text-orange-600 font-bold">{items.length}</sup>
            </div>
          </div>

          <div
            className={` duration-500 absolute z-10 h-screen bg-gradient-to-r from-rose-100 to-teal-100 mt-16 w-[70%] px-2 ${
              toggle ? "left-[0%] duration-1500" : "left-[-100%]"
            }`}
          >
            <ul className="flex flex-col  ">
              {Navdata.map((data, idx) => {
                return (
                  <NavLink
                    to={data.Path}
                    key={idx}
                    className="text-xl uppercase tracking-wider  py-2"
                  >
                    {data.Name}
                  </NavLink>
                );
              })}
            </ul>
            
            <NavLink to="/login" className="bg-red-400 w-24 px-4 py-2 ">Login</NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
