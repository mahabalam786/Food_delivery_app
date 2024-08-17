import React, { useEffect, useState } from "react";
import { BsFillEmojiFrownFill } from "react-icons/bs";
import Button from "../components/Button";
import { Link} from "react-router-dom";
import axios from "axios";
import CartCard from "../components/CartCard";

const Myorders = () => {
  const [orders, setorders] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .post("/api/v1/getorders", { token: token })
      .then((res) => {
        setorders([...res.data]);
      })
      .catch((err) => console.log(err));
  }, []);



  return (
    <>
      {orders.length === 0 ? (
        <div className="w-full absolute p-2 text-center h-full bg-cover ">
          <div className="w-full my-10 items-center justify-center h-fit flex flex-row">
            <div className="w-full flex flex-col items-center justify-center gap-10">
              <BsFillEmojiFrownFill size={155} color="yellow" />
              <h1 className="text-4xl font-black ">
                AWW! YOU NEVER GIVE US CHANCE
              </h1>
              <Link to={"/"}>
                <Button>View Products</Button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div>
          
          
     
          {orders[0].orders.map((orderdata) => {
            return (
              <div
                className="flex flex-col justify-center items-center    gap-5 mx-auto  w-[90vw] md:w-[80vw]  my-10"
                
              >
                <h1 className="text-2xl font-black">{ new Date(orderdata.orderDate).toLocaleString()}</h1>
                <hr className="border-[1px] w-full border-red-700 "></hr>
                <div className="w-full grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 ">
                  {orderdata.orderData.map((data,index) => {
                    return (
                      <div key={index}>
                        <CartCard
                          img={data.img}
                          name={data.name}
                          description={data.description}
                          quantity={data.quantity}
                          price={data.price}
                          size={data.size}
                          index={index}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Myorders;
