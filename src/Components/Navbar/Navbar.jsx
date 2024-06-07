import React from "react";
import NavbarLink from "./NavbarLink/NavbarLink";
import { GrHomeRounded } from "react-icons/gr";
import { HiOutlinePencilAlt } from "react-icons/hi";
export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">LogoSait</div>

      <ul className="navbar_wrapper">
        <NavbarLink href={"/"} icon={<GrHomeRounded />} text={"Dashboard"} />
        <NavbarLink href={"/aplications"} icon={<HiOutlinePencilAlt />} text={"Applications"} />
      </ul>
      
    
    </div>
  );
}
