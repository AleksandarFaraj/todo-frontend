import React from "react";
import { Link } from "react-router-dom";
import useSWR from "swr";
import { useTodoService } from "~/src/TodoServiceContext";
import { fetcher } from "~/src/util/fetcher";
import { AddTodoButton } from "./components/AddTodoButton";
import { DashboardComponent } from "./components/dashboard/DashboardComponent";
import { SearchBar } from "./components/search/component/SearchBar";
import { SearchBarProvider, useSearchBar } from "./components/search/component/SearchBarContext";
import { SearchResult } from "./components/search/component/SearchResult";

export const OverviewView: React.FunctionComponent<{}> = () => {
    const { initialTodos } = useTodoService()
    const { isSearching } = useSearchBar();
    const options: { initialData?: Todos } = {}
    if (initialTodos) {
        options.initialData = initialTodos
    }

    const { data, error } = useSWR<Todos>(
        `/todos`,
        fetcher,
        options
    );
    if (!data) { return <>Data loading</> }

    return (
        <div>
            <div className="top-0 z-20 fixed w-full">
                <div className="bg-white">
                    <SearchBar />
                </div>
                <div className="bg-gradient-to-b from-white p-4">
                </div>
            </div>
            <div id="searchbar-header-padding" className="padding pt-20"></div>
            {isSearching ? <SearchResult></SearchResult> : (<>
                <DashboardComponent todos={data} />
                <div className={`bottom-0 fixed w-full ${data && data.length === 0 ? "hidden" : ""}`}>
                    <div className="bg-gradient-to-t from-white p-4">
                    </div>
                    <div className="bg-white"><AddTodoButton></AddTodoButton></div>
                </div>
            </>)

            }
        </div>

    )
}