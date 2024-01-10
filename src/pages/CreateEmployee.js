import React from 'react';
import PersonalInformation from "../forms/employee/PersonalInformation";
import StaffInformation from "../forms/restaurant/StaffInformation";
import WebsiteURL from "../forms/restaurant/WebsiteURL";
import ImagesInformation from "../forms/restaurant/ImagesInformation";
import NameHeader from "../forms/employee/NameHeader";
import UploadPicture from "../forms/employee/UploadPicture";
import EmploymentDetails from "../forms/employee/EmploymentDetails";

const CreateEmployee = () => {
    return (
        <div className="box-content h-dvh w-full bg-white rounded-l-[3rem]">
            <br></br>
            <h1 className="text-[#DB504A] text-3xl font-bold text-left m-8 mb-0">Add Employee</h1>
            <div className="flex flex-row">
                <UploadPicture/>
                <PersonalInformation/>
                <div className="ml-20">
                    <EmploymentDetails/>
                </div>
            </div>
            <button
                className="bg-[#DB504A] hover:bg-[#DB504A] text-white font-bold py-2 px-4 rounded-full ml-50% mt-5">Create
                Employee
            </button>
        </div>
    );
};

export default CreateEmployee;