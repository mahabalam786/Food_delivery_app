import React, { useState  ,useRef, useEffect } from "react";

import { useDispatch } from "./ContextReducer";




const Card = ({foodItem ,toast}) => {


  let dispatch = useDispatch()

  
  const refElement = useRef()
  const [quantity, setquantity] = useState(1);
  const [size, setsize] = useState(''); 
  const options = Object.keys(foodItem.options[0])
  
 async function  handleCart (){
    await dispatch({
      type:"ADD",
      img:foodItem.img,
      id:foodItem._id,
      price:finalPrice,
      name:foodItem.name,
      quantity:quantity,
      size:size,
      description:foodItem.description,

    })
    toast.success("Added to Cart", {
      position: "bottom-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }


  useEffect(() => {
    setsize(refElement.current.value)

  }, [])

  let finalPrice =  quantity * parseInt(foodItem.options[0][size])
  
  return (
    <>
      <div className="flex items-center text-center justify-center">
        <div className=" block  w-full  rounded-[20px] bg-gradient-to-r  from-fuchsia-50 via-yellow-50 to-fuchsia-50 border-2 border-gray-200 shadow-md shadow-slate-300">
          <img
            className="rounded-t-[20px]  h-[25vh] object-cover w-full"
            src={foodItem.img}
            alt=""
          />

          <div className="p-6">
            <h5 className="mb-2 text-xl font-bold leading-tight text-neutral-800">
         {foodItem.name}
            </h5>
            <p className="mb-4 text-base text-neutral-600 ">
              {foodItem.description.substring(0,70)}...
            </p>
            <hr className="border-2  border-red-700 mb-8"></hr>
            <div className="mb-4 flex gap-5 justify-center  flex-row leading-tight">
              <div className="w-fit rounded-lg border-gray-400 border-2">
                <button
                  className="w-fit border-r-2 border-gray-400 p-2"
                  disabled={quantity <= 1 ? true : false}
                  onClick={() => setquantity(quantity - 1)}
                >
                  -
                </button>
                <span className="w-fit border-r-2 border-gray-400 p-2">{quantity}</span>
                <button
                  onClick={() => setquantity(quantity + 1)}
                  className="w-fit  p-2"
                  disabled={quantity >= 12 ? true : false}
                >
                  +
                </button>
              </div>

              <select onChange={(e)=> setsize(e.target.value)} ref={refElement} className="border-2 border-gray-400 rounded-lg px-2 " name="category" id="category">
                {options.map((option) => {
                 
                  return(

                    <option key={option}  value={option}>{option}</option>
                  )
                })}
               
              </select>
              
            </div>
            <div className="flex mb-4 justify-center leading-tight text-2xl font-blac flex-row gap-5">
              
                <h5 className=" font-bold">&#8377;{finalPrice}</h5>
              </div>
             
            <button  onClick={handleCart}     className="inline-block w-full rounded-xl bg-fuchsia-600 px-6 py-2.5 hover:rounded-full  text-xs font-medium uppercase leading-normal text-white shadow-2xl transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
 >add to cart</button>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
