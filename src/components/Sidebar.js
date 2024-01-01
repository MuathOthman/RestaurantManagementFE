import React from 'react';
import { BiLogoFlask } from "react-icons/bi";
import { GoHomeFill, GoPersonFill, GoTelescopeFill } from "react-icons/go";
import { IoDocuments, IoHelpCircleSharp, IoCog, IoLogOut } from "react-icons/io5";
import {NavLink} from "react-router-dom";



function Sidebar() {
    return (
        <div>
            <nav className="hs-accordion-group p-4 w-full flex flex-col flex-wrap">
                <BiLogoFlask className="text-white text-5xl"/>
                <a href="#" className="hs-accordion-title text-white text-lg font-semibold mb-20">LOGO</a>
                <ul className="space-y-7 items-center justify-items-center ml-2">
                    <li>
                        <NavLink to="/dashboard">
                            <GoHomeFill className="text-white text-3xl hover:text-[#084c61]"/>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/restaurants"}>
                            <GoTelescopeFill className="text-white text-3xl hover:text-[#084c61]"/>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/employees"}>
                            <GoPersonFill className="text-white text-3xl hover:text-[#084c61]"/>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/documents"}>
                            <IoDocuments className="text-white text-3xl hover:text-[#084c61]"/>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/help"}>
                            <IoHelpCircleSharp className="text-white text-3xl hover:text-[#084c61]"/>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/settings"}>
                            <IoCog className="text-white text-3xl mb-52 hover:text-[#084c61]"/>
                        </NavLink>
                    </li>
                    <li>
                        <IoLogOut className="text-white text-3xl hover:text-[#084c61]"/>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Sidebar;