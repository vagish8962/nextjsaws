import React, { useEffect, useState } from "react";
import {getContentStatictics,getInitiativeResponse,getInitiativeStatictics
} from "@/pages/api/api-handler-helpers";
import {DonateMealPopup} from "@/Components/rewards/modalContent";
import Modalpopup from "@/Components/rewards/modal";
import { AiOutlineDown } from "react-icons/ai";
import { useRouter } from "next/router";

export default function DoGoodRewards() {
  const [donateMeal, setDonateMeal] = useState();
  const [availableDonateMeal, setAvailableDonateMeal]=useState();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const router = useRouter();
  useEffect(() => {                   
    getContentStaticticsfunction(); 
    getAvailablityMealfunction();     //Donate a Meal availableInitiative fetchapi
  }, []);
  const getContentStaticticsfunction = () => {
    getContentStatictics("contentDonateMeal")
      .then((response) => {
        setDonateMeal(response);
      })
      .catch((error) => {
        console.log("Something Went Wrong");
      });
  };
  const openModal = () => {setIsOpenModal(true)}; //ModalPopup
  const closeModal = () => {setIsOpenModal(false)};
 
  const getInitiativeResponsefunction = () => {
    let bodyContentObject = {
      initiativeType: "DonateAMeal",       //donatea meal response api
    };
    getInitiativeResponse(bodyContentObject).then((res) => {
        if(res?.status){
          router.push({
            pathname: `/rewards/do-good-rewards/confirm-meal-donate`,
        })
        }else{
          setIsOpenModal(false)
        }
      })
      .catch((err) => {console.log("Something Went Wrong", err)});
  };
  const getAvailablityMealfunction = () =>{
    getInitiativeStatictics().then((res)=>{
      setAvailableDonateMeal(res)
    })
    .catch((err)=>{
      console.log("Something Went Wrong", err)
    })
  }
 const handleCancle=()=>{setIsOpenModal(false)}
  return (
    <div className="bg-green-900">
      <div
        className="h-[600px] w-full flex items-end justify-center overflow-hidden"
        style={{
          background: `url(https://assets.unileversolutions.com/v1/${donateMeal?.image.id}.${donateMeal?.image.type}?im=Resize=1920x600)`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}>
        <div className="backdrop-brightness-75 bg-black/30 w-full h-full relative">
          <p className="text-white cursor-pointer  flex items-center flex-col mb-10 text-lg lg:text-xl font-unilevershillingMedium w-full absolute bottom-0 left-auto">
            <AiOutlineDown size={30} className="animate-bounce"></AiOutlineDown>
            Read the story
          </p>
        </div>
      </div>
      <div className="container mx-auto px-5 lg:px-5">
        <div className="flex flex-row space-x-5">
          <article className="basis-3/5">
            <img
              src={`${process.env.imageURL}${donateMeal?.sections[0].image.id}.${donateMeal?.sections[0].image.type}`}
              alt={donateMeal?.title}
              className="w-auto"
            />
          </article>
          <article className="basis-2/5">
            <div className="flex flex-row text-white items-center my-10">
              <div className="bg-white rounded-full flex flex-col justify-center w-28 h-28 mr-5">
                <img
                  src={`${process.env.imageURL}${donateMeal?.icon.id}.${donateMeal?.icon.type}`}
                  alt="Rounded avatar"/>
              </div>
              <div>
                <h1 className="font-unilevershillingBold text-xl">
                  {donateMeal?.title}
                </h1>
                <p className="font-unilevershilling text-base">
                  {donateMeal?.subTitle}
                </p>
              </div>
            </div>
            <div className="text-white mb-5">
              <p className="font-unilevershilling text-base">
                {donateMeal?.description}
              </p>
            </div>
            <div className="text-white">
              {donateMeal?.sections?.map((textData, index) => (
                <div key={`t${index}`} className="mb-5">
                  <h1 className="font-unilevershillingBold text-xl pb-2">{textData.title}</h1>
                  <p className="font-unilevershilling text-base">{textData.description}</p>
                </div>
              ))}
            </div>
            <div className="text-white text-justify font-unilevershilling mb-16">
              <p className="font-unilevershilling text-base">
                {donateMeal?.learnMore.text}{" "}
                <a href={donateMeal?.learnMore.cta.url} className="underline">{donateMeal?.learnMore.cta.title}</a>
              </p>
            </div>
            <button
              className="text-center p-4 bg-white text-green-800 
         font-extrabold w-96 text-lgtext-transform: uppercase rounded-xl mb-20"
              onClick={() => openModal()}>{donateMeal?.title}</button>
            <Modalpopup isOpen={isOpenModal} onClose={closeModal}>
                <DonateMealPopup availableDonateMeal={availableDonateMeal} donateMeal={donateMeal} handleCancle={handleCancle} getInitiativeResponsefunction={getInitiativeResponsefunction}/>
            </Modalpopup>
          </article>
        </div>
      </div>
    </div>
  );
}
