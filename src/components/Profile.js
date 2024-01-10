import React from 'react';

const Profile = () => {
    return (
        <div className="bg-[#DB504A] h-dvh w-80 flex justify-center">
            <div className="flex flex-col">
                <img
                    src={"https://media.licdn.com/dms/image/D4D03AQE8ZF1Hwz7AYA/profile-displayphoto-shrink_400_400/0/1704836031933?e=1710374400&v=beta&t=JRq2WZtJDfK43XLzgKwNkUv_EdCxMkius67OaCE8YxQ"}
                    alt="Placeholder" className="w-56 h-56 text-white object-cover rounded-full m-8"/>
                <h1 className="text-white text-3xl font-bold text-center">Muath Othman</h1>
                <h2 className="text-white text-l font-bold text-center mt-4">muaothman@gmail.com</h2>
                <h2 className="text-white text-l font-bold text-center">0442379461</h2>
                <div className="flex items-center justify-center mt-10">
                    <div className="box-content h-fit w-52 p-4 bg-[#F8F9FB] rounded-xl">
                        <div className="text-[#DB504A] text-l font-bold text-left mb-4">Restaurant:</div>
                        <div className="text-[#DB504A] text-l font-bold text-left mb-4">Supervisor:</div>
                        <div className="text-[#DB504A] text-l font-bold text-left mb-4">Position:</div>
                    </div>
                </div>
                <button className="bg-[#F8F9FB] text-[#DB504A] text-l font-bold text-center mt-10 rounded-xl p-4">Edit</button>
                <button className="bg-yellow-400 text-white text-l font-bold text-center mt-4 rounded-xl p-4">Remove</button>
            </div>
        </div>
    );
};

export default Profile;