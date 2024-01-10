import React from 'react';

const WebsiteURL = () => {
    return (
        <div>
            <form className="max-w-sm mx-auto">
                <h2 className="text-black text-2xl font-bold text-left m-8 mb-0">Upload Images:</h2>
                <div className="mb-2">
                    <label htmlFor="name"
                           className="block text-sm font-medium text-gray-900 dark:text-white text-left m-8 mb-0 mt-4">
                        Main image:</label>
                    <input
                        className="m-8 mt-2 block w-auto text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                        id="file_input" type="file"/>
                </div>
                <div className="mb-2">
                    <label htmlFor="address"
                           className="block text-sm font-medium text-gray-900 dark:text-white text-left m-8 mb-0 mt-4">
                        Logo:</label>
                    <input
                        className="m-8 mt-2 block w-auto text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                        id="file_input" type="file"/>
                </div>
                <div className="mb-2">
                    <label htmlFor="city"
                           className="block text-sm font-medium text-gray-900 dark:text-white text-left m-8 mb-0 mt-4">
                        First Picture:</label>
                    <input
                        className="m-8 mt-2 block w-auto text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                        id="file_input" type="file"/>
                </div>
                <div className="mb-2">
                    <label htmlFor="postcode"
                           className="block text-sm font-medium text-gray-900 dark:text-white text-left m-8 mb-0 mt-4">Second Picture:</label>
                    <input
                        className="m-8 mt-2 block w-auto text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                        id="file_input" type="file"/>
                </div>
                <div className="mb-2">
                    <label htmlFor="phone"
                           className="block text-sm font-medium text-gray-900 dark:text-white text-left m-8 mb-0 mt-4">Third Picture:</label>
                    <input
                        className="m-8 mt-2 block w-auto text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                        id="file_input" type="file"/>
                </div>
            </form>
        </div>
    );
};

export default WebsiteURL;