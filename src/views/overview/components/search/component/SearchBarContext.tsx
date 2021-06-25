import React, { createContext, useContext, useState } from "react";

const SearchBarContext = createContext<{
    searchingFor?: string,
    isSearching?: boolean,
    setIsSearching: (searching?: boolean) => void,
    setSearchingFor: (searchingFor?: string) => void
}>({
    isSearching: false,
    setIsSearching: (searching?: boolean) => { return; },
    searchingFor: "",
    setSearchingFor: (searchingFor?: string) => { return; },
});

export const SearchBarProvider: React.FunctionComponent<{}> = (props) => {
    const [isSearching, setIsSearching] = useState<boolean>()
    const [searchingFor, setSearchingFor] = useState<string>()
    return (<SearchBarContext.Provider value={{ isSearching, setIsSearching, searchingFor, setSearchingFor }} {...props} />)
}
export const useSearchBar = () => React.useContext(SearchBarContext);


