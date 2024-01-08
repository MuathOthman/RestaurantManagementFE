import React from 'react';

const WebsiteURL = () => {
    return (
        <div>
            <form className="max-w-sm mx-auto">
                <h2 className="text-black text-2xl font-bold text-left m-8 mb-0">Internet Information:</h2>
                <div className="mb-2">
                    <label htmlFor="name"
                           className="block text-sm font-medium text-gray-900 dark:text-white text-left m-8 mb-0 mt-4">
                        Website Address:</label>
                    <input type="text" id="name"
                           className="m-8 mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           placeholder="" required/>
                </div>
                <div className="mb-2">
                    <label htmlFor="address"
                           className="block text-sm font-medium text-gray-900 dark:text-white text-left m-8 mb-0 mt-4">
                        Facebook Address:</label>
                    <input type="text" id="address"
                           className="m-8 mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           placeholder="" required/>
                </div>
                <div className="mb-2">
                    <label htmlFor="city"
                           className="block text-sm font-medium text-gray-900 dark:text-white text-left m-8 mb-0 mt-4">Instagram Address:</label>
                    <input type="text" id="city"
                           className="m-8 mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           placeholder="" required/>
                </div>
                <div className="mb-2">
                    <label htmlFor="postcode"
                           className="block text-sm font-medium text-gray-900 dark:text-white text-left m-8 mb-0 mt-4">Wolt Address:</label>
                    <input type="text" id="postcode"
                           className="m-8 mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           placeholder="" required/>
                </div>
                <div className="mb-2">
                    <label htmlFor="phone"
                           className="block text-sm font-medium text-gray-900 dark:text-white text-left m-8 mb-0 mt-4">Foodora Address:</label>
                    <input type="text" id="phone"
                           className="m-8 mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           placeholder="" required/>
                </div>
            </form>
        </div>
    );
};

export default WebsiteURL;