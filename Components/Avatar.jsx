import React from "react";
import Image from "next/image";
import avatarImg from "@/assets/images/avatar.svg"

function Avatar() {
    return <div className="cursor-pointer p-2 bg-green-800 flex justify-center items-center rounded-full">
        <Image  src={avatarImg} width={40} height={40} color="white"></Image>
    </div>
}

export default Avatar;