import React from 'react';

export const SearchPanel = () => {
    return (
        <div className="relative -mt-14 px-4 z-10">
            <div className="w-full max-w-5xl mx-auto bg-white rounded-[18px] shadow-lg overflow-hidden border border-gray-100">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    {/* Location Dropdown */}
                    <div className="flex-1 px-4 py-2 border-r relative">
                        <label className="block font-inter font-medium text-[17px] text-black">Location</label>
                        <div className="flex items-center">
                            <select className="w-full text-sm appearance-none bg-white outline-none pr-6">
                                <option>Select Area</option>
                                <option>Bodakdev</option>
                                <option>Satellite</option>
                                <option>Prahlad Nagar</option>
                            </select>
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                className="h-4 w-4 absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>

                    {/* Property Type Dropdown */}
                    <div className="flex-1 px-4 py-2 border-r relative">
                        <label className="block font-inter font-medium text-[17px] text-black">Property Type</label>
                        <div className="flex items-center">
                            <select className="w-full text-sm appearance-none bg-white outline-none pr-6">
                                <option>Choose Property Type</option>
                                <option>Apartment</option>
                                <option>Villa</option>
                                <option>Penthouse</option>
                            </select>
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                className="h-4 w-4 absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>

                    {/* Price Range Dropdown */}
                    <div className="flex-1 px-4 py-2 border-r relative">
                        <label className="block font-inter font-medium text-[17px] text-black">Price Range</label>
                        <div className="flex items-center">
                            <select className="w-full text-sm appearance-none bg-white outline-none pr-6">
                                <option>Choose Price Range</option>
                                <option>₹50L - ₹1Cr</option>
                                <option>₹1Cr - ₹2Cr</option>
                                <option>₹2Cr+</option>
                            </select>
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                className="h-4 w-4 absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>

                    {/* Search Button */}
                    <div className="w-full md:w-auto py-3 px-4 flex justify-center">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-2xl w-full md:w-12 h-12 flex items-center justify-center transition-colors duration-300 shadow-md">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchPanel;