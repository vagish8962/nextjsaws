import React, { useEffect, useState } from "react";
import {getContentStatictics, getInitiativeResponse, getInitiativeStatictics} from "@/pages/api/api-handler-helpers";
import Modalpopup from "@/Components/rewards/modal";
import { AiOutlineDown } from "react-icons/ai";
import { useRouter } from "next/router";
import {PlantATreePopup} from "@/Components/rewards/modalContent";

export default function DoGoodRewards() {
  const [donateMeal, setDonateMeal] = useState();
  const [AvailablePlantTree, setAvailablePlantTree]=useState();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const router=useRouter();

  //getContentStatictics fetchAPI
  useEffect(() => {
    getContentStaticticsfunction();
    getAvailablityTreefunction();   //PlantATree availableInitiative fetchapi
  }, []);

  const getContentStaticticsfunction = () => {
    getContentStatictics("contentPlantTree").then((response) => {
        setDonateMeal(response);
      }).catch((error) => {
        console.log("Something Went Wrong");
      });
  };
  const openModal = () => {setIsOpenModal(true)};   //Modalpopup functionalities
  const closeModal = () => {setIsOpenModal(false)};

  const getInitiativeResponsefunction = () => {     //plant response api
    let bodyContentObject = {
      initiativeType: "PlantATree",
    };
    getInitiativeResponse(bodyContentObject).then((res) => {
        if(res?.status){
          router.push({
            pathname: `/rewards/do-good-rewards/confirm-plant-tree`,
        })
        }else{
          setIsOpenModal(false)
        } 
      }).catch((err) => {console.log("Something Went Wrong", err)});
  }

   const getAvailablityTreefunction = () =>{
    getInitiativeStatictics().then((res)=>{
      setAvailablePlantTree(res)
    })
    .catch((err)=>{console.log("Something Went Wrong", err)})
  }
  const handleCancel=()=>{setIsOpenModal(false)};   //Popup cancle button
  
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
            <div className="mt-10 flex">
              <img src={`${process.env.imageURL}${donateMeal?.sections[0].image.id}.${donateMeal?.sections[0].image.type}`}
                alt={donateMeal?.title}
                className="w-auto rounded-xl"/>
            </div>
          </article>
          <article className="basis-2/5">
            <div className="flex flex-row text-white items-center my-10">
              <div className="bg-white rounded-full flex flex-col justify-center w-28 h-28 mr-5">
                <img src={`${process.env.imageURL}${donateMeal?.icon.id}.${donateMeal?.icon.type}`}   
                  alt="Rounded avatar"/>
              </div>
              <div>
              <h1 className="font-unilevershillingBold text-xl">{donateMeal?.title}</h1>
              <p className="font-unilevershilling text-base">{donateMeal?.subTitle}</p>
              </div>
            </div>
            <div className="text-white mb-5">
              <p className="font-unilevershilling text-base">{donateMeal?.description}</p>
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
          <PlantATreePopup AvailablePlantTree={AvailablePlantTree} donateMeal={donateMeal} handleCancel={handleCancel} getInitiativeResponsefunction={getInitiativeResponsefunction}/></Modalpopup>
          </article>
        </div>
      </div>
      </div>
  );
}
