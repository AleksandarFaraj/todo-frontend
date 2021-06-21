import React from "react";
import { Link } from "react-router-dom";
import useSWR from "swr";
import { useTodoService } from "~/src/TodoServiceContext";
import { fetcher } from "~/src/util/fetcher";
import { AddTodoButton } from "./components/AddTodoButton";
import { DashboardComponent } from "./components/dashboard/DashboardComponent";
import { SearchBar } from "./components/search/component/SearchBar";

export const OverviewView: React.FunctionComponent<{}> = () => {
    const { initialTodos } = useTodoService()
    const options: { initialData?: Todos } = {}
    if (initialTodos) {
        options.initialData = initialTodos
    }

    const { data, error } = useSWR<Todos>(
        `/todos`,
        fetcher,
        options
    );
    if (!data) { return <></> }
    return (
        <div>
            <div className="top-0 z-20 fixed w-full">
                <div className="bg-white">
                    <SearchBar />
                </div>
                <div className="bg-gradient-to-b from-white p-4 to-transparent to-transparent">
                </div>
            </div>
            <DashboardComponent todos={data} />
            <div className={`bottom-0 fixed w-full ${data && data.length === 0 ? "hidden" : ""}`}>
                <div className="bg-gradient-to-t from-white p-4 to-transparent to-transparent">
                </div>
                <div className="bg-white"><AddTodoButton></AddTodoButton></div>
            </div>
        </div>
    )
}