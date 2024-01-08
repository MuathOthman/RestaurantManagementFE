import React, {useContext, useState} from 'react';
import UserContext from "../contexts/user-context";
import PopupContext from "../contexts/popup-context";

const Popup = ({ closePopup }) => {
    const [available] = useContext(PopupContext);
    console.log(available)
    return (
        <div>
            {available && (
                <div className="fixed inset-0 bg-black bg-opacity-20 overflow-y-auto h-full w-full rounded-l-[3rem]">
                    <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
                        <div className="mt-3 text-center">
                            <h3 className="text-lg leading-6 font-bold text-black">Create Restaurant</h3>
                            <form className="space-y-4 md:space-y-6">
                                <div>
                                    <label htmlFor="restaurantName"
                                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name:</label>
                                    <div className="relative">
                                        <div
                                            className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                                 xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                 viewBox="0 0 20 20">
                                                <path
                                                    d="M17.876.517A1 1 0 0 0 17 0H3a1 1 0 0 0-.871.508C1.63 1.393 0 5.385 0 6.75a3.236 3.236 0 0 0 1 2.336V19a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-6h4v6a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V9.044a3.242 3.242 0 0 0 1-2.294c0-1.283-1.626-5.33-2.124-6.233ZM15.5 14.7a.8.8 0 0 1-.8.8h-2.4a.8.8 0 0 1-.8-.8v-2.4a.8.8 0 0 1 .8-.8h2.4a.8.8 0 0 1 .8.8v2.4ZM16.75 8a1.252 1.252 0 0 1-1.25-1.25 1 1 0 0 0-2 0 1.25 1.25 0 0 1-2.5 0 1 1 0 0 0-2 0 1.25 1.25 0 0 1-2.5 0 1 1 0 0 0-2 0A1.252 1.252 0 0 1 3.25 8 1.266 1.266 0 0 1 2 6.75C2.306 5.1 2.841 3.501 3.591 2H16.4A19.015 19.015 0 0 1 18 6.75 1.337 1.337 0 0 1 16.75 8Z"/>
                                            </svg>
                                        </div>
                                        <input type="text" aria-describedby="helper-text-explanation"
                                               name="restaurantName" id="restaurantName"
                                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                               placeholder="Subway" pattern="^\d{5}(-\d{4})?$" required
                                               />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="address"
                                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address:</label>
                                    <div className="relative">
                                        <div
                                            className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                                 xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                 viewBox="0 0 16 20">
                                                <path
                                                    d="M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"/>
                                            </svg>
                                        </div>
                                        <input type="text" id="address" name="address"
                                               aria-describedby="helper-text-explanation"
                                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                               placeholder="Hämeenlinnantie 23D" pattern="^\d{5}(-\d{4})?$" required
                                              />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="city"
                                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">City:</label>
                                    <div className="relative">
                                        <div
                                            className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                                 xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                 viewBox="0 0 16 20">
                                                <path
                                                    d="M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"/>
                                            </svg>
                                        </div>
                                        <input type="text" id="city" name="city"
                                               aria-describedby="helper-text-explanation"
                                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                               placeholder="Helsinki" pattern="^\d{5}(-\d{4})?$" required
                                               />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="zipCode"
                                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ZIP
                                        code:</label>
                                    <div className="relative">
                                        <div
                                            className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                                 xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                 viewBox="0 0 16 20">
                                                <path
                                                    d="M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"/>
                                            </svg>
                                        </div>
                                        <input type="text" id="zipCode" name="zipCode"
                                               aria-describedby="helper-text-explanation"
                                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                               placeholder="12345" pattern="^\d{5}(-\d{4})?$" required
                                              />
                                    </div>
                                    <p id="helper-text-explanation"
                                       className="mt-2 text-sm text-gray-500 dark:text-gray-400">Please select a 5 digit
                                        number from 0 to 9.</p>
                                </div>
                                <button
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">NEXT
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Popup;
