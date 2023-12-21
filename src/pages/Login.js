import React from 'react';
import "./Styles/register.css";
import registerImage from "./Styles/RegisterDark.jpg"
import LoginForm from "../components/Form/LoginForm";

const Register = () => {
    return (
        <div className="grid grid-cols-2 divide-x">
            <div>
                <img className="w-full h-full object-cover" src={registerImage} alt="registerImage"/>
            </div>
            <div>
                <div className="flex flex-col justify-center items-center h-screen">
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="text-3xl font-bold mb-4">Let's get started with your</h1>
                        <h2 className="text-2xl mb-2">14-day free trial</h2>
                        <br/>
                        <LoginForm type="text" placeholder="Username" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
