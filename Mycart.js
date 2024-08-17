import React from "react";
import { BsCartX } from "react-icons/bs";
import Button from "../components/Button";
import { useCart,useDispatch } from "../components/ContextReducer";
import CartCard from "../components/CartCard";
import {Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";


const Mycart = () => {
  let datas = useCart();
  let dispatch = useDispatch()
  const navigate = useNavigate()
  var finalprice = datas.reduce((total, data) => total + data.price, 0);

;


const handleCheckout = () => {
  const token = localStorage.getItem('token')
  if(token === null){
    navigate('/login')
    return
  }
  else{
    axios.post('/api/v1/genrateorders',{
      "token":token,
      "cartItems":datas
    }).then(res => {
      console.log(res.data)
    }).catch(err => {
      console.log(err)
    })
    toast.success("Order Places Succesfully", {
      position: "bottom-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  dispatch({type:'CHECKOUT'})

  }
}

  return (
    <>
    <ToastContainer></ToastContainer>
      {datas.length === 0 ? (
        <div className="w-full absolute h-full bg-cover ">
          <div className="w-full my-10 items-center justify-center h-fit flex flex-row">
            <div className="w-full flex flex-col items-center justify-center gap-10">
              <BsCartX size={155} color="red" />
              <h1 className="text-4xl font-black ">Your Cart is empty</h1>
              <Link to={'/'}>
                <Button>View Products</Button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center gap-10 mx-auto  w-[95vw] md:w-[80vw]  my-10">
          <div className="w-fit">
            <h2 className="text-4xl font-black">YOUR CART</h2>
          </div>
          <hr className="border-2 w-full border-red-700 "></hr>
          <div className="w-full grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 h-fit">
            {datas.map((data, index) => {
              return (
                <div key={index}>
                  <CartCard
                    img={data.img}
                    name={data.name}
                    description={data.description}
                    quantity={data.quantity}
                    price={data.price}
                    size={data.size}
                    index = {index}
                    remove={true}
                    toast={toast}
                  />
                </div>
              );
            })}
          </div>
          <hr className="border-2 w-full border-red-700 "></hr>
          <div className="flex gap-5 flex-col">
            <h1 className="text-2xl font-black">Final Price- {finalprice}</h1>
            <button onClick={handleCheckout} className="inline-block w-full rounded-xl bg-fuchsia-600 px-6 py-2.5 hover:rounded-full  text-xs font-medium uppercase leading-normal text-white shadow-2xl transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
              Checkout
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Mycart;
