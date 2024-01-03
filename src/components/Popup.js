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
                            <h3 className="text-lg leading-6 font-medium text-gray-900">Popup Title</h3>
                            <div className="mt-2 px-7 py-3">
                                <p className="text-sm text-gray-500">
                                    Your popup content goes here.
                                </p>
                            </div>
                            <div className="items-center px-4 py-3">
                                <button
                                    id="ok-btn"
                                    className="px-4 py-2 bg-green-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-300"
                                    onClick={closePopup}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Popup;
