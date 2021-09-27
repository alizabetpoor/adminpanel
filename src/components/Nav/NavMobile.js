import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import ProfileMenu from "../ProfileMenu/ProfileMenu";
import SearchBox from "../SearchBox/SearchBox";
import Menu from "./Menu";
import "./Menu.css";
const NavMobile = () => {
  const [showMenuMobile, setShowMenuMobile] = useState(false);
  return (
    <div className="flex nav-mobile p-2 items-center text-black justify-between fixed z-40 lg:hidden top-0 left-0 w-full h-14 bg-p-nav-blue">
      <div
        onClick={() => setShowMenuMobile((prev) => !prev)}
        className="rounded-md p-2 bg-p-gray-box cursor-pointer"
      >
        <BiMenu className="text-lg" />
      </div>
      <div
        className={`fixed ${
          showMenuMobile ? "block" : "hidden"
        } transition menu-mobile text-white right-0 top-14 w-3/5 sm:w-2/5 md:w-1/5 pt-5 px-2 h-full bg-p-nav-blue`}
      >
        <Menu />
      </div>
      <div className="flex space-x-3 space-x-reverse md:hidden">
        <ProfileMenu color="text-white" />
        <SearchBox />
      </div>
    </div>
  );
};

export default NavMobile;
