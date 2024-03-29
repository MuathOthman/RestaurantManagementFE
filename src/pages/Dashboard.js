import React from 'react';
import Minicard from "../components/Minicard";
import Card from "../components/Card";
import Example from "../components/Card";

const data1 = [3100, 1398, 2800, 6908, 3800, 8800, 5300];
const data2 = [4100, 5398, 5800, 2908, 1800, 2800, 3300];
const data3 = [8100, 7398, 6800, 8908, 5800, 2800, 4300];



const Dashboard = () => {
    return (
        <div className="box-content h-dvh w-full bg-[#F8F9FB] rounded-l-[3rem]">
            <br></br>
            <h1 className="text-[#DB504A] text-3xl font-bold text-left m-8 -mb-3">Welcome Muath 👋🏻</h1>
            <h2 className="text-black text-2xl font-bold text-left m-8 -mb-3">Here's what's happening with your business today:</h2>

            <div className="flex justify-around items-stretch px-4 py-2 mt-5">
                <Minicard title="Current Balance" content="Content for card 1 " icon="⚖️" amount="1500€"/>
                <Minicard title="Monthly Expenses" content="Content for card 2" icon="💸" amount="500€"/>
                <Minicard title="Managed Restaurants " content="Content for card 1 " icon="🏬️" amount="3"/>
                <Minicard title="Activity" content="Content for card 1 " icon="📈️" amount="200k"/>
            </div>
            <div className="flex justify-around items-stretch px-4 py-2 mt-5">
                <Card title="This month earning" content="5500€" amount=""/>
            </div>
        </div>
    );
};

export default Dashboard;