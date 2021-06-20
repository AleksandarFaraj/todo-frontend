import React from "react";
import { Link } from "react-router-dom";
import { DashboardComponent } from "./components/dashboard/DashboardComponent";
import { SearchBar } from "./components/search/component/SearchBar";

export const OverviewView: React.FunctionComponent<{}> = () => (
    <div>
        <SearchBar />
        <DashboardComponent />
        <div className="bottom-0 fixed m-2">
            <Link to="/todo/add">
                <div className="p-4">
                    <span className="text-bold">Add todo</span>
                </div>
            </Link>
        </div>
    </div>
)