import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { TodoContainer } from '~/src/views/todo/views/id/TodoIdView';
import { DashboardComponent } from '~/src/views/overview/components/dashboard/DashboardComponent';
import { AddContainer } from '~/src/views/todo/views/add/TodoAddView';
import { OverviewView } from '~/src/views/overview/OverviewView';
import { SearchView } from '~/src/views/overview/components/search/SearchComponent';


export const RouteContainer: React.FunctionComponent<{}> = () => (
    <Router>
        <Switch>

            <Route path="/todo/add">
                <AddContainer></AddContainer>
            </Route>
            <Route path="/todo/search">
                <SearchView></SearchView>
            </Route>
            <Route path="/todo/:id">
                <TodoContainer></TodoContainer>
            </Route>
            <Route path="/">
                <OverviewView></OverviewView>
            </Route>
        </Switch>
    </Router>
)
