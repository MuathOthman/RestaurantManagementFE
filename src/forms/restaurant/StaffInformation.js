import React from 'react';

const StaffInformation = () => {
    return (
        <div>
            <form className="max-w-sm mx-auto">
                <h2 className="text-black text-2xl font-bold text-left m-8 mb-0">Staff Information:</h2>
                <div className="mb-2">
                    <label htmlFor="name"
                           className="block text-sm font-medium text-gray-900 dark:text-white text-left m-8 mb-0 mt-4">Main
                        manager:</label>
                    <select id="name"
                            className="m-8 mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="1">Muath Othman</option>
                        <option value="2">Jane Smith</option>
                        <option value="3">John Doe</option>
                        <option value="4">Jane Doe</option>
                    </select>
                </div>
                <div className="mb-2">
                    <label htmlFor="name"
                           className="block text-sm font-medium text-gray-900 dark:text-white text-left m-8 mb-0 mt-4">
                        Management Team:</label>
                    <select id="name"
                            className="m-8 mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="1">Subway Team</option>
                        <option value="2">Jane Smith</option>
                        <option value="3">John Doe</option>
                        <option value="4">Jane Doe</option>
                    </select>
                </div>
                <div className="mb-2">
                    <label htmlFor="name"
                           className="block text-sm font-medium text-gray-900 dark:text-white text-left m-8 mb-0 mt-4">Main
                        Stuff:</label>
                    <select id="name"
                            className="m-8 mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="1">Muath Othman</option>
                        <option value="2">Jane Smith</option>
                        <option value="3">John Doe</option>
                        <option value="4">Jane Doe</option>
                    </select>
                </div>
                <div className="mb-2">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-900 dark:text-white text-left m-8 mb-0 mt-4">Stuff Team:</label>
                    <select id="name"
                            className="m-8 mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="1">Muath Othman</option>
                        <option value="2">Jane Smith</option>
                        <option value="3">John Doe</option>
                        <option value="4">Jane Doe</option>
                    </select>
                </div>
                <div className="mb-2">
                    <label htmlFor="postcode"
                           className="block text-sm font-medium text-gray-900 dark:text-white text-left m-8 mb-0 mt-4">Postcode</label>
                    <input type="text" id="postcode"
                           className="m-8 mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           placeholder="" required/>
                </div>
            </form>
        </div>
    );
};

export default StaffInformation;