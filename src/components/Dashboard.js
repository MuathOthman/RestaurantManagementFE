import React from 'react';
import {Avatar, Card} from "@mui/material";
import Minicard from "./Card";

const data1 = [3100, 1398, 2800, 6908, 3800, 8800, 5300];
const data2 = [4100, 5398, 5800, 2908, 1800, 2800, 3300];
const data3 = [8100, 7398, 6800, 8908, 5800, 2800, 4300];

const Dashboard = () => {
    return (
        <div className="box-content h-dvh w-full bg-white rounded-l-[3rem]">
            <br></br>
                <h1 className="text-[#DB504A] text-3xl font-bold text-left m-8 mb-0">Welcome Muath 👋🏻</h1>
                <div className="flex-row flex">
                    <Minicard title="REVENUE" quantity="300€" data={data1} color="'#db504a"/>
                    <Minicard title="CUSTOMERS" quantity="894" data={data2} color="#43aa8b"/>
                    <Minicard title="REVIEW" quantity="4.4" data={data3} color="#e3b505"/>
                    <Minicard title="REVIEW" quantity="4.4" data={data3} color="#e3b505"/>

                </div>
                <div className="mt-14">
                    <Card className="m-8 mb-0" sx={{borderBlockColor: 'black', height: '50vh'}}>
                        <div className="text-gray-500 text-left m-4 -mb-3">REVENUE</div>
                        <h4 className="text-2xl font-semibold text-gray-700 text-left m-4 mb-0">300€</h4>
                    </Card>
                </div>
        </div>
    );
};

export default Dashboard;