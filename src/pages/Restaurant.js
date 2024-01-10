import React from 'react';
import Minicard from "../components/Minicard";
import Card from "../components/Card";
import Example from "../components/Card";
import ImageGrid from "../components/ImageGrid";

const data1 = [3100, 1398, 2800, 6908, 3800, 8800, 5300];
const data2 = [4100, 5398, 5800, 2908, 1800, 2800, 3300];
const data3 = [8100, 7398, 6800, 8908, 5800, 2800, 4300];



const Dashboard = () => {
    return (
        <div className="box-content h-dvh w-full bg-[#F8F9FB] rounded-l-[3rem]">
            <br></br>
            <h1 className="text-[#DB504A] text-3xl font-bold text-left m-8 -mb-3">Welcome Muath 👋🏻</h1>
            <h2 className="text-black text-2xl font-bold text-left m-8 -mb-3">Here's what's happening with your business today:</h2>
            <ImageGrid/>
        </div>
    );
};

export default Dashboard;