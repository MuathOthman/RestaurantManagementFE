import React from 'react';
import {Avatar} from "@mui/material";
import Profile from "../components/Profile";
import Minicard from "../components/Minicard";

const CustomEmployee = () => {
    return (
        <div>
            <div className="fixed right-0">
                <Profile/>
            </div>
            <div className="box-content h-dvh w-full bg-[#F8F9FB] rounded-l-[3rem]">
                <br></br>
                <h1 className="text-[#DB504A] text-3xl font-bold text-left m-8 -mb-3"></h1>
                <div className="flex flex-row ml-16">

                </div>
            </div>
        </div>
    );
};

export default CustomEmployee;