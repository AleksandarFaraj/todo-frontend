import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { TodoContainer } from './views/todo/id/TodoContainer';
import { DashboardContainer } from './views/dashboard/DashboardContainer';
import { AddContainer } from './views/todo/add/AddContainer';


export const RouteContainer: React.FunctionComponent<{}> = () => {
    return (<Router>
        <Switch>
            <Route path="/todo/:id">
                <TodoContainer></TodoContainer>
            </Route>
            <Route path="/todo/add">
                <AddContainer></AddContainer>
            </Route>
            <Route path="/">
                <DashboardContainer></DashboardContainer>
            </Route>
        </Switch>
    </Router>)
}