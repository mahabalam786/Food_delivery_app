import React from "react";

const Button = ({type, children }) => {
  return (
    <button
      type={type}
      className="inline-block w-full rounded-xl bg-fuchsia-600 px-6 py-2.5 hover:rounded-full  text-xs font-medium uppercase leading-normal text-white shadow-2xl transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
    >
     {children}
    </button>
  );
};

export default Button;
