import React from 'react';
import {
    BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import { SearchComponent } from '~/src/views/overview/components/search/SearchComponent';
import { OverviewView } from '~/src/views/overview/OverviewView';
import { TodoAddView } from '~/src/views/TodoAddView';
import { TodoEditView } from './views/TodoEditView';



export const RouteContainer: React.FunctionComponent<{}> = () => (
    <Router>
        <Switch>
            <Route path="/todo/add">
                <TodoAddView></TodoAddView>
            </Route>
            <Route path="/todo/search">
                <SearchComponent></SearchComponent>
            </Route>
            <Route path="/todo/:id">
                <TodoEditView></TodoEditView>
            </Route>
            <Route path="/">
                <OverviewView></OverviewView>
            </Route>
        </Switch>
    </Router>
)
