

import React from 'react';
import { Link } from 'react-router-dom';
import { DashboardProgressComponent } from './DashboardProgressComponent';
import { DashboardTodoList } from './DashboardTodoList';

export const DashboardComponent: React.FunctionComponent<{}> = () => (
    <div>
        <DashboardProgressComponent />
        <DashboardTodoList />
        <Link to="/todo/add"><div>Add todo</div></Link>
    </div>
);