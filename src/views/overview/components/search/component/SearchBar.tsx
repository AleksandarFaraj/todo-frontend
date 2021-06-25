import React, { ChangeEvent } from "react";
import { useState } from "react";
import { useSearchBar } from "./SearchBarContext";

export const SearchBar: React.FunctionComponent<{}> = () => {
    const [recentlyClicked, setRecentlyClicked] = useState<boolean>(false);
    const { isSearching, setIsSearching, searchingFor, setSearchingFor } = useSearchBar();
    const handleFocus = () => {
        setRecentlyClicked(true);
    }
    const handleBlur = () => {
        if (!searchingFor && recentlyClicked) {
            setIsSearching(false);
            setRecentlyClicked(false);
        }
        setRecentlyClicked(false);
    }
    const onClick = () => {
        setRecentlyClicked(true);
    }
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setIsSearching(true);
        setRecentlyClicked(false);
        setSearchingFor(e.target.value)
        if (e.target.value === "") {
            setIsSearching(false);
            setRecentlyClicked(false);
        }
    }

    return (
        <div className="px-4">
            <div className="relative w-full">
                <label className={`transition-all `}>
                    <div className="mr-2 center p-1 focus:outline-none outline-none">
                        <span className={`transition-all absolute inset-y-0 left-0 flex items-center pl-2`}>
                            🔍
                        </span>
                    </div>
                    <input type="search"
                        onClick={onClick}
                        onFocus={handleFocus}
                        defaultValue={searchingFor}
                        onChange={onChange}
                        onBlur={handleBlur}
                        name="q"
                        className={`py-4 my-2 pr-4 text-sm pl-10 outline-none w-full ${(isSearching || searchingFor) ? "bg-white text-gray-700" : "text-gray-700 bg-gray-50 "}`}
                        placeholder="Search..." />
                </label>
            </div>
        </div>
    )
}
