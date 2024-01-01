import React from 'react';
import {Card} from "@mui/material";
import TinyLineChart from "./TinyLineChart";



const Minicard = ({title, quantity, data, color}) => {
    return (
        <div>
            <Card className="m-8 mb-0" sx={{borderBlockColor: 'black', height: '100%'}}>
                <div className="text-gray-500 text-left m-4 -mb-3">{title}</div>
                <h4 className="text-2xl font-semibold text-gray-700 text-left m-4 mb-0">{quantity}</h4>
                <TinyLineChart data={data} color={color}/>
            </Card>
        </div>
    );
};

export default Minicard;