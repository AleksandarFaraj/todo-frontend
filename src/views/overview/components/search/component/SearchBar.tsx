import React from "react";
import { Link } from "react-router-dom";

export const SearchBar: React.FunctionComponent<{}> = () => (
    <div className="px-4">
        <div className="relative focus-within:text-gray-100 w-full">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <div className="mr-2 center p-1 focus:outline-none">🔍</div>
            </span>
            <input type="search" name="q" className="py-4 my-2 pr-4 text-sm text-gray-700 bg-gray-100 pl-10 focus:outline-none focus:bg-white focus:text-gray-700 w-full" placeholder="Search..." />
        </div>
    </div>
)
