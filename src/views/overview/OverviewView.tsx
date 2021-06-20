import React from "react";
import { DashboardComponent } from "./components/dashboard/DashboardComponent";
import { SearchBar } from "./components/search/component/SearchBar";

export const OverviewView: React.FunctionComponent<{}> = () => (
    <div>
        <SearchBar />
        <DashboardComponent />
    </div>
)