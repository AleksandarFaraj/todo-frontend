

import React from 'react';
import useSWR from 'swr';
import { useTodoService } from '~/src/TodoServiceContext';
import { fetcher } from '~/src/util/fetcher';
import { DashboardProgressComponent } from './DashboardProgressComponent';
import { DashboardTodoList } from './DashboardTodoList';

export const DashboardComponent: React.FunctionComponent<{ todos: Todos }> = ({ todos }) => {


    return (
        <>
            <div className="p-0"></div>
            <DashboardProgressComponent todos={todos} />
            <DashboardTodoList todos={todos} />
            <div className="p-16"></div>
        </>
    )
};