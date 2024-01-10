import React from 'react';
import {Avatar} from "@mui/material";
import Card from "../components/Minicard";
import BasicInformation from "../forms/restaurant/BasicInformation";
import StaffInformation from "../forms/restaurant/StaffInformation";
import WebsiteURL from "../forms/restaurant/WebsiteURL";
import ImagesInformation from "../forms/restaurant/ImagesInformation";

const CreateRestaurant = () => {
    return (
        <div className="box-content h-dvh w-full bg-white rounded-l-[3rem]">
            <br></br>
            <h1 className="text-[#DB504A] text-3xl font-bold text-left m-8 mb-0">Create Restaurant</h1>
            <div className="flex flex-row">
                <BasicInformation/>
                <div className="ml-20">
                    <StaffInformation/>
                </div>
                <div className="ml-20">
                    <WebsiteURL/>
                </div>
                <div className="ml-20">
                    <ImagesInformation/>
                </div>
            </div>
            <button className="bg-[#DB504A] hover:bg-[#DB504A] text-white font-bold py-2 px-4 rounded-full ml-20 mt-5">Create Restaurant</button>
        </div>
    );
};

export default CreateRestaurant;