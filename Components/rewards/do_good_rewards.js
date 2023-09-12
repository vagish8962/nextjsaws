import React, { useState, useEffect } from "react";
import {
  getInitiativetypes,
  getContentStatictics,
  getInitiativeStatictics,
} from "@/api/api-handler-helpers";
import Link from "next/link";

const DoGoodRewards = () => {
  const [availabletypes, setAvailableTypes] = useState();
  const [array, setArray] = useState([])

  useEffect(() => {
    getInitiativetypesfunction();
    getInitiativeStaticticsfunction();
  }, []);

  const getInitiativetypesfunction = () => {      //get Initiativetypes fetch API
    array.splice = 0;
    getInitiativetypes().then((typeRes) => {
        typeRes.length > 0 & typeRes.map((value) => {
            getContentStatictics(value.initiativeType === "DonateAMeal"? "contentDonateMeal": "contentPlantTree").then((res) => {
                let data = {
                  points: value.points,
                  description: res.description,
                  title: res.title,
                  type: value.initiativeType,
                  image: res.image,
                  icon: res.icon,
                };
                setArray((myValue) => [...myValue, data]);
              }).catch((err) => {
                console.log("Something Went Wrong");
              });
          });
      }).catch((err) => {
        console.log("Something Went Wrong");
      });
  };
  const getInitiativeStaticticsfunction = () => {   //InitiativeStatictics getapi
    getInitiativeStatictics()
      .then((res) => {
        setAvailableTypes(res);
      })
      .catch((err) => {
        console.log("Something went wrong", err);
      });
  };

  return (
    <section className=" text-center ">
      <main className="flex flex-col lg:flex-row lg:space-x-3">
        {array?.length > 0 && array ?.slice(0).reverse().map((Initiative, index) => {
              return (
                <div className="bg-white rounded-xl lg:basis-2/5 p-5 mb-4" key={`i${index}`}>
                  <div className="flex items-center relative">
                    <img
                      src={`${process.env.imageURL}${Initiative.icon.id}.${Initiative.icon.type}`}
                      className="rounded-full !w-14 !h-14 mr-2"
                      alt=""
                      layout="intrinsic"
                    />
                    <div className="bg-orange-900 font-unilevershilling text-base absolute top-0 left-9 rounded-full w-6 h-6 text-center">
                      {Initiative.type === "DonateAMeal" ? availabletypes?.DonateAMeal.availableInitiatives: availabletypes?.PlantATree.availableInitiatives}
                    </div>
                    <p className="font-unilevershillingMedium text-base">
                      Earn a{" "}
                      {Initiative.type === "DonateAMeal" ? "meal" : "tree"}{" "}
                      every {Initiative.points} points
                    </p>
                  </div>
                  <div className="relative">
                    <img
                      src={`${process.env.imageURL}${Initiative.image.id}.${Initiative.image.type}`}
                      className="rounded-t-2xl my-4"
                      alt=""
                      layout="intrinsic" 
                    />
                    <div className="bg-orange-900 font-unilevershilling text-base absolute top-3 right-2 rounded-full px-1.5 py-1">
                      {Initiative.type === "DonateAMeal" ? availabletypes?.DonateAMeal.availableInitiatives:availabletypes?.PlantATree.availableInitiatives}{" "}
                      available
                    </div>
                    <h3 className="font-unilevershillingMedium text-2xl mb-3">{Initiative.title}</h3>
                    <p className="font-unilevershilling text-gray-500">{Initiative.description}</p>
                    <Link
                      href={
                        Initiative.type === "DonateAMeal" ? "/rewards/do-good-rewards/donate-a-meal": "/rewards/do-good-rewards/plant-a-tree"
                      }
                      className="bg-green-800 py-3 flex justify-center mt-4 text-white font-shireTypesPro rounded-xl"
                    >{Initiative.type}</Link>
                  </div>
                </div>
              );
            })}
      </main>
    </section>
  );
};

export default DoGoodRewards;
