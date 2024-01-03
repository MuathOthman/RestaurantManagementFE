import React from 'react';
import {useContext} from "react";
import UserContext from "../contexts/user-context";
import nameImage from "./Styles/restaruntname(scaled).jpg";
import restaurantContext from "../contexts/restaurantName-context";
import NewRestaurantP1 from "../components/Form/newRestaurantP1";

const CreateRestaurant = () => {
    const [user] = useContext(UserContext);
    const [restaurant, setRestaurant] = React.useState("");
    return (
        <restaurantContext.Provider value={[restaurant, setRestaurant]}>
        <div className="grid grid-cols-2 divide-x">
            <div>
                <img className="w-full h-full object-cover" src={nameImage} alt="registerImage"/>
                <h1 className="text-[#615b4d] absolute text-5xl text-white top-[304px] left-1/4 -translate-x-1/2 -translate-y-1/2">{restaurant.toUpperCase()}</h1>
            </div>
            <div>
                <div className="flex flex-col justify-center items-center h-screen">
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="text-black text-center text-4xl">Welcome {user.firstName} 👋🏻</h1>
                        <br/>
                        <p className="text-black text-center text-2xl">Let's create your first restaurant</p>
                        <br/>
                        <div className="">
                            <NewRestaurantP1/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </restaurantContext.Provider>
    );
};


export default CreateRestaurant;