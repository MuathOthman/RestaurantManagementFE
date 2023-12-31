import React from 'react';
import {Avatar} from "@mui/material";
import Card from "../components/Card";

const Employees = () => {
    return (
        <div className="box-content h-dvh w-full bg-white rounded-l-[3rem]">
            <br></br>
            <h1 className="text-[#DB504A] text-3xl font-bold text-left m-8">Stuff</h1>
            <div className="flex flex-row">
                <Avatar className="m-8 w-1/2 " sx={{ width: 150, height: 150 }} alt="Muath" src="https://www.subway.com/fi-fi/-/media/EMEA/Europe/Finland/AboutUs/AboutUs_ComeWorkAtSubway_2CardUp_Desktop_565x318.jpg?sc_lang=fi-FI&la=fi-FI&h=318&w=565&mw=1280&hash=0B6A8EB32C632B4BA177D4D1B19910CD" />
                <Avatar className="m-8 w-1/2" sx={{ width: 150, height: 150 }} alt="Muath" src="https://avatars.githubusercontent.com/u/77038758?v=4" />
                <Avatar className="m-8 w-1/2" sx={{ width: 150, height: 150 }} alt="Muath" src="https://avatars.githubusercontent.com/u/77038758?v=4" />
                <Avatar className="m-8 w-1/2" sx={{ width: 150, height: 150 }} alt="Muath" src="https://avatars.githubusercontent.com/u/77038758?v=4" />
                <Avatar className="m-8 w-1/2" sx={{ width: 150, height: 150 }} alt="Muath" src="https://avatars.githubusercontent.com/u/77038758?v=4" />
                <Avatar className="m-8 w-1/3" sx={{ width: 150, height: 150 }} alt="Muath" src="https://avatars.githubusercontent.com/u/77038758?v=4" />

            </div>
        </div>
    );
};

export default Employees;