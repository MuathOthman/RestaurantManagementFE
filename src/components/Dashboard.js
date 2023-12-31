import React from 'react';
import Card from "./Card";
import {Avatar} from "@mui/material";
const Dashboard = () => {
    return (
        <div className="box-content h-dvh w-full bg-white rounded-l-[3rem]">
            <br></br>
                <h1 className="text-[#DB504A] text-3xl font-bold text-left m-8">Welcome Muath 👋🏻</h1>
            <Card/>
        </div>
    );
};

export default Dashboard;