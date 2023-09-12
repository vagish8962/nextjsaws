import React, {useState, useEffect} from "react";
import ConfirmIcon from "@/assets/images/confirm.svg";
import RewardsIcon from "@/assets/images/about-leap-banner.jpg";
import ArrowRight from "@/assets/images/arrow-right.svg";
import Link from "next/link";
import Image from "next/image";
import {getContentStatictics,getInitiativeStatictics} from "@/pages/api/api-handler-helpers";

export default function ConfirmDoGoodRewards() {
  const [donateMeal, setDonateMeal] = useState();
  const [plantTree, setPlantTree] = useState();
  const [availableDonateMeal, setAvailableDonateMeal]=useState()
  useEffect(() => {             //SuccessDonateMeal Page
    getDonateMealFunction();
    getInitiativeStaticticsfunction();
    getPlantTreeFunction();
  }, []);

const getDonateMealFunction = () => {   //DonateContetn getAPI
    getContentStatictics("contentDonateMeal")
      .then((response) => {
        setDonateMeal(response);
      }).catch((error) => {
        console.log("Something Went Wrong");
      });
  }; 
  const getPlantTreeFunction = () => {    //PlantContent getAPI
    getContentStatictics("contentPlantTree")
      .then((response) => {
        setPlantTree(response);
      }).catch((error) => {
        console.log("Something Went Wrong");
      });
  };
  const getInitiativeStaticticsfunction = () =>{  //Initiative availablitycounts getapi
    getInitiativeStatictics().then((res)=>{
      setAvailableDonateMeal(res)
    }).catch((err)=>{
      console.log("Something Went Wrong", err)
    })
  }

  return (
    <section className="bg-orange-600 pb-24">
      <div className="container mx-auto px-5 lg:px-5">
        <article className="text-center pt-24 flex flex-row justify-center">
            <div className="w-2/5">
              <Image src={ConfirmIcon} alt="confirm icon" className="w-24 h-24 m-auto mb-5" />
               {/* <img src={ConfirmIcon} alt="confirm icon" className="w-24 h-24 m-auto mb-5" />  */}
            <h1 className="font-shireTypesPro text-4xl text-green-900 mb-3">{donateMeal?.successMessage.title}</h1>
            <p className="text-base font-unilevershilling">{donateMeal?.successMessage.description}</p>
            </div>      
        </article>
        <article className="text-center mt-16 mb-5">
            <h2 className="text-2xl font-unilevershillingMedium mb-8">You have more rewards to claim</h2>
            <div className="mb-6 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-6 text-left">
                <div className="group relative rounded-2xl overflow-hidden bg-white flex flex-row items-center p-3">
                    <div className="mr-4 w-20 relative">
                    <img src={`${process.env.imageURL}${plantTree?.image.id}.${plantTree?.image.type}`} alt="confirm icon" className="w-16 h-16 rounded-full object-cover border border-black"/>
                    <div className="bg-orange-900 text-white px-1 rounded-full absolute top-1 bottom-1 right-0 w-7 h-7 text-center">{availableDonateMeal?.PlantATree?.availableInitiatives}</div>
                    </div>
                    <div className="w-80">
                    <h2 className="font-unilevershillingMedium text-base">{plantTree?.title}</h2>
                    <p className="text-base font-unilevershilling">{plantTree?.subTitle}</p>
                    </div>
                    <div> <img src={ArrowRight} alt="" className="flex" /></div>
                </div>
                <div className="group relative rounded-2xl overflow-hidden bg-white flex flex-row items-center p-3">
                    <div className="mr-4 w-20 relative">
                    <img src={`${process.env.imageURL}${donateMeal?.image.id}.${donateMeal?.image.type}`} alt="confirm icon" className="w-16 h-16 rounded-full object-cover  border border-black"/>
                    <div className="bg-orange-900 text-white px-1 rounded-full absolute top-1 bottom-1 right-0 w-7 h-7 text-center">{availableDonateMeal?.DonateAMeal?.availableInitiatives}</div>
                    </div>
                    <div className="w-80">
                    <h2 className="font-unilevershillingMedium text-base">{donateMeal?.title}</h2>
                    <p className="text-base font-unilevershilling">{donateMeal?.subTitle}</p>
                    </div>
                    <div> <img src={ArrowRight} alt="" className="flex" /></div>
                </div>
                <div className="group relative rounded-2xl overflow-hidden bg-white flex flex-row items-center p-3">
                    <div className="mr-4 w-20 relative">
                    <Image src={RewardsIcon} alt="confirm icon" className="w-16 h-16 rounded-full object-cover  border border-black"/>
                    </div>
                    <div className="w-80">
                    <h2 className="font-unilevershillingMedium text-base">Purchase coupons</h2>
                    <p className="text-base font-unilevershilling">All your favourite brands</p>
                    </div>
                    <div> <img src={ArrowRight} alt="" className="flex" /></div>
                </div>
             </div>   
            <div className="flex flex-row justify-center mt-10">   
            <Link href={"/rewards"} className="font-shireTypesPro text-lg text-white bg-green-800 rounded-xl px-4 py-4 w-2/5">Use more rewards</Link>  
        </div>  
        </article>
      </div>
    </section>
  );
}
