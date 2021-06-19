import React from "react";
import { SearchBar } from "./components/search/component/SearchBar";
import { DashboardComponent } from "./components/dashboard/DashboardComponent";

export const OverviewView: React.FunctionComponent<{}> = () => (
    <div>
        <SearchBar />
        <DashboardComponent />
    </div>
)