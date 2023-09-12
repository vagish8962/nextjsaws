import React from "react";
import Logo from "../Commons/logo";
import MenuOptions from "./MenuOptions";
import SearchBox from "./searchBox";
import Profile from "./Profile";

function Navbar() {
  return (
    <div className="z-10 absolute top-0 bg-white/10 border-b border-white w-full h-auto">
      <article className="container mx-auto">
        <div className="flex flex-col justify-between items-center sm:flex-row sm:h-28">
          <div className="flex items-center justify-center sm:justify-start w-full sm:w-auto">
            <Logo></Logo>
            <MenuOptions></MenuOptions>
          </div>
          <div className="flex items-center justify-center sm:justify-start w-full sm:w-auto">
            <SearchBox></SearchBox>
            <Profile></Profile>
          </div>
        </div>
      </article>
    </div>
  );
}

export default Navbar;
