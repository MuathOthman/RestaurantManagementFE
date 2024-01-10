import React from 'react';
import {Avatar} from "@mui/material";
import Popup from "../components/Popup";
import {useNavigate} from "react-router-dom";

const Employees = () => {
    const navigate = useNavigate();
    const handlePopup = () => {
        /* setAvailable(true);
        console.log("You have clicked me")
        console.log(available)*/
        navigate("/createemployee")
    };

    return (
        <div>
            <div className="box-content h-dvh w-full bg-[#F8F9FB] rounded-l-[3rem]">
                <br></br>
                <h1 className="text-[#DB504A] text-3xl font-bold text-left m-8 -mb-3">All Employees</h1>
                <div className="flex flex-row">
                    <Avatar className="m-8 w-1/2" sx={{width: 150, height: 150, bgcolor: '#DB504A', fontSize: '30px'}} onClick={handlePopup}>+</Avatar>
                </div>
            </div>
        </div>
    );
};

export default Employees;