import React from "react";
import animationData from "@/assets/animation/please-wait.gif"
import Image from "next/image";

function Loading() {
    return (
        <div className="custom-modal w-10 flex justify-center items-center">
            <Image src={animationData} width={100} height={100}></Image>
        </div>
    );
}

export default Loading;
