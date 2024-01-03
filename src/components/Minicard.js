import * as React from 'react';




const Minicard = ({title, icon, amount, color, content}) => {
    return (
        <div className="flex-1 p-6 bg-white rounded-lg shadow-md mx-5 hover:shadow-lg ">
            <div className="flex items-center space-x-4">
                <div className="p-4 rounded-full bg-[#f1e8b8] text-4xl">{icon}</div>
                <div>
                    <div className="text-sm font-semibold text-gray-500">{title}</div>
                    <div className="text-2xl font-bold text-left">{amount}</div>
                </div>
            </div>
        </div>
    );
};

export default Minicard;