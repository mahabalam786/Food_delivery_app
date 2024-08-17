import React from "react";

import Hero from "../components/Hero";
import Card from "../components/Card";
import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Home = () => {
  const [foodItems, setfoodItems] = useState([]);
  const [foodCategory, setfoodCategory] = useState([]);

  const getfoodItems = () => {
    axios
      .get("/api/v1/getitems")
      .then((res) => {
        setfoodCategory(res.data.foodCategory);
        setfoodItems(res.data.foodItems);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getfoodItems();
  }, []);

  return (
    <>
     
      <Hero />
    
      {foodCategory !== [] ? (
        foodCategory.map((Category) => {
          return (
            <div className="w-full ">
            <ToastContainer></ToastContainer>
              <div
                key={Category._id}
                className="md:w-[80vw] w-[90vw] p-2 mx-auto "
              >
                <h1 className="text-4xl font-black h-fit mb-10 text-center">
                  {Category.categoryName}
                </h1>
                <hr className="border-2 mb-10 border-red-700"></hr>
              </div>
              <div className="my-5 md:w-[80vw] w-[90vw]    sm:grid-cols-2 grid-cols-1 lg:grid-cols-3  grid mx-auto gap-10">
                {foodItems !== [] ? (
                  foodItems
                    .filter(
                      (item) => item.CategoryName === Category.categoryName
                    )
                    .map((foodItem ,index) => {
                      return (
                        <div key={foodItem._id}>
                          <Card foodItem={foodItem}   toast = {toast} />
                        </div>
                      );
                    })
                ) : (
                  <div>LOADING...</div>
                )}
              </div>
            </div>
          );
        })
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default Home;
