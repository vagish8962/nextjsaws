import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import Avatar from "./Avatar";

function Profile() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return <div className="flex flex-col font-unilevershillingMedium sm:flex-row justify-center items-center w-full text-center sm:text-left sm:w-auto sm:ml-10">
        <div className="relative flex group" ref={dropdownRef} onClick={toggleDropdown}>
            <Avatar ></Avatar>
            <div className="flex items-center justify-evenly">
                <div className="font-bold text-green-800  p-2 sm:p-0 sm:px-4 sm:py-2 cursor-pointer" >
                    Profile
                </div>
                <div className="cursor-pointer text-green-800 transform transition-transform duration-300">
                    {isDropdownOpen ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            style={{ transform: `rotate(${isDropdownOpen ? "0deg" : "180deg"})` }}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            onClick={toggleDropdown}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                    )}
                </div>
            </div>
            {isDropdownOpen && (
                <div className="absolute z-50 w-[350px] flex flex-col mt-20 py-4 font-unilevershilling px-4 bg-white rounded-lg shadow-lg right-0 transform -translate-x-4">
                    <p className="text-green-800 text-lg font-bold">Welcome</p>
                    <p>To access account & manage rewards</p>
                    <button
                        className="bg-white cursor-pointer w-4/5 mt-6 text-lg text-green-800 border border-green-800 font-bold py-3 px-6 rounded-xl"
                        type="submit"
                    >
                        SIGN IN/SIGN UP
                    </button>
                    <div className="w-full mt-4 mb-4 border-2 border-gray-200"></div>
                    <Link href="/contact-leaprewards" className="mt-4 hover:bg-gray-200 p-2">Contact Leap Rewards</Link>
                    <Link href="/about-leap-rewards" className="mt-4 hover:bg-gray-200 p-2">About Leap Rewards</Link>
                </div>
            )}
        </div>
    </div>
}

export default Profile;
