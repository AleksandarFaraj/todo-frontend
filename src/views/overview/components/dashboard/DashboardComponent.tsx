

import React, { useEffect } from 'react';
import { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import useSWR from 'swr';
import { useTodoService } from '~/src/TodoServiceContext';
import { fetcher } from '~/src/util/fetcher';
import { DashboardProgressComponent } from './DashboardProgressComponent';
import { DashboardTodoList } from './DashboardTodoList';

export const DashboardComponent: React.FunctionComponent<{}> = () => {
    const { initialTodos } = useTodoService()
    const options: { initialData?: Todos } = {}
    if (initialTodos) {
        options.initialData = initialTodos
    }

    const { data, error } = useSWR<Todos>(
        `/todo`,
        fetcher,
        options
    );
    if (!data) { return <></> }

    return (
        <>
            <DashboardProgressComponent todos={data} />
            <DashboardTodoList todos={data} />
        </>
    )
};