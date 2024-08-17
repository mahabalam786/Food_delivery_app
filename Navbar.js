import React, { useState } from "react";
import { BsList, BsXLg, } from "react-icons/bs";
import TextGradient from "./TextGradient";
import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";
const Navbar = () => {
  const [nav, setnav] = useState(false);

  const navigate = useNavigate();

  function handlenav() {
    setnav(!nav);
  }

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <>
      <nav className="w-full shadow-md  mx-auto  bg-cover  h-fit ">
        <div className="p-5 flex flex-row justify-between items-center ">
          <Link onClick={()=>setnav(false)} to={"/"}>
            <TextGradient>FOODIEZZ</TextGradient>
          </Link>
          <div className="md:flex hidden text-gray-700 flex-row gap-5 text-xl font-semibold md:">
         <Link
              to={"/myorders"}
              className="hover:text-gray-500 font-black cursor-pointer"
            >
              MY-ORDERS
            </Link>
            <Link to={"/mycart"} className="hover:text-gray-500 font-black cursor-pointer">
              MY-CART
            </Link>
          </div>
          {!localStorage.getItem("token") ? (
            <div className="gap-5 md:flex flex-row hidden ">
              <Link to={"/login"}>
                {" "}
                <Button>LOG-IN</Button>
              </Link>
              <Link to={"/signin"}>
                {" "}
                <Button>SIGN-IN</Button>
              </Link>
            </div>
          ) : (
            <div className="hidden md:block">
              {" "}
              <button
                onClick={handleLogout}
                className="inline-block w-full rounded-xl bg-fuchsia-600 px-6 py-2.5 hover:rounded-full  text-xs font-medium uppercase leading-normal text-white shadow-2xl transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
              >
                LOG-OUT
              </button>
            </div>
          )}
          <div className="md:hidden">
            <div
              className={nav === false ? "w-fit" : "hidden"}
              onClick={handlenav}
            >
              {" "}
              <BsList color="red" size={35} />
            </div>
            <div
              className={nav === true ? "w-fit" : "hidden"}
              onClick={handlenav}
            >
              {" "}
              <BsXLg color="red" size={35} />
            </div>
          </div>
        </div>
      </nav>
      <div
        className={
          nav === true
            ? "  w-full h-fit  md:hidden shadow-md rounded-b-2xl  flex flex-col text-center text-xl font-semibold gap-5 p-8 "
            : "hidden"
        }
      >
        <Link
          to={"/mycart"}
          className="hover:text-gray-700 pb-2 cursor-pointer border-b-2 border-gray-500"
       onClick={()=>setnav(false)} >
          MY-CART
        </Link>
        <Link
          to={"/myorders"}
          className="hover:text-gray-700 pb-2 cursor-pointer border-b-2 border-gray-500"
          onClick={()=>setnav(false)} 
        >
          MY-ORDERS
        </Link>
        {!localStorage.getItem("token") ? (
          <div className="flex flex-col gap-5">
            <Link onClick={()=> setnav(false)} className="w-full" to={"/login"}>
              <Button>LOG-IN</Button>
            </Link>
            <Link onClick={()=> setnav(false)} to={"/signin"}>
              <Button>SIGN-IN</Button>
            </Link>
          </div>
        ) : (
          <div>
            {" "}
            <button
              onClick={handleLogout}
              className="inline-block w-full rounded-xl bg-fuchsia-600 px-6 py-2.5 hover:rounded-full  text-xs font-medium uppercase leading-normal text-white shadow-2xl transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
            >
              LOG-OUT
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
