import React from 'react';
import {Card} from "@mui/material";
import { palette } from '@mui/system';



const Minicard = () => {
    return (
        <div>
            <Card className="w-1/4 h-2/3 m-8" sx={{ borderBlockColor: 'black', height: '100%' }}>
                <h1 className="text-white text-2xs font-bold text-left">DATA:</h1>
            </Card>
        </div>
    );
};

export default Minicard;