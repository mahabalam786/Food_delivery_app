import React from "react";
import { useDispatch } from "./ContextReducer";

const CartCard = ({
  img,
  name,
  description,
  quantity,
  price,
  size,
  index,
  remove,
  toast,
}) => {
  let dispatch = useDispatch();
  return (
    <div className="block w-full rounded-[20px] bg-gradient-to-r  from-fuchsia-50 via-yellow-50 to-fuchsia-50 border-2 border-gray-200 shadow-md shadow-slate-300">
      <img
        className="rounded-t-[20px]  h-[20vh] object-cover w-full"
        src={img}
        alt="foodimage"
      />

      <div className="p-6">
        <h5 className="mb-2 text-xl font-bold leading-tight text-neutral-800">
          {name}
        </h5>
        <p className="mb-4 text-base text-neutral-600 ">
          {description.substring(0, 70)}...
        </p>
        <hr className="border-2  border-red-700 mb-4"></hr>
        <div className="flex flex-col">
          <div className="flex mb-4  leading-tight text-xl  flex-row gap-1">
            <h5>Quantity-</h5>
            <h5>{quantity}</h5>
          </div>
          <div className="flex mb-4  leading-tight text-xl font-normal flex-row gap-1">
            <h5>Price-</h5>
            <h5>&#8377;{price}</h5>
          </div>

          <div className="flex mb-4  leading-tight text-xl font-blac flex-row gap-1">
            <h5>Size-</h5>
            <h5>{size}</h5>
          </div>
        </div>
{remove===true?
        <button
          onClick={() => {
            dispatch({ type: "REMOVE", index: index });
            toast.success("Removed From Cart Succesfully", {
              position: "bottom-center",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          }}
          className="inline-block w-full rounded-xl bg-fuchsia-600 px-6 py-2.5 hover:rounded-full  text-xs font-medium uppercase leading-normal text-white shadow-2xl transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
        >
          Remove item
        </button>:null}
      </div>
    </div>
  );
};

export default CartCard;
