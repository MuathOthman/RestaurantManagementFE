import React from 'react';
import {Avatar} from "@mui/material";
import Card from "../components/Minicard";

const Employees = () => {
    return (
        <div className="box-content h-dvh w-full bg-white rounded-l-[3rem]">
            <br></br>
            <h1 className="text-[#DB504A] text-3xl font-bold text-left m-8 mb-0">Stuff</h1>
            <div className="flex flex-row">
                <Avatar className="m-8 w-1/2" sx={{ width: 150, height: 150 }}>+</Avatar>
            </div>
        </div>
    );
};

export default Employees;