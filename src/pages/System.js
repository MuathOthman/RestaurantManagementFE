// System.jsx

import React from 'react';
import Sidebar from "../components/Sidebar";
import "./Styles/System.css";
import Dashboard from "./Dashboard";


const System = () => {
    return (
        <div className="flex h-screen">
            <div id="docs-sidebar" className="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 start-0 bottom-0 z-[60] w-20 bg-[#DB504A] lg:block lg:translate-x-0 lg:end-auto lg:bottom-0">
                <Sidebar/>
            </div>
            <div className="flex-1 ml-20 ">

            </div>
        </div>
    );
};

export default System;
