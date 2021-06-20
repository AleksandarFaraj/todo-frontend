

import React from 'react';
import { Link } from 'react-router-dom';
import useSWR from 'swr';
import { fetcher } from '~/src/util/fetcher';
import { DashboardProgressComponent } from './DashboardProgressComponent';
import { DashboardTodoList } from './DashboardTodoList';

export const DashboardComponent: React.FunctionComponent<{}> = () => {
    const { data, error } = useSWR<Todos>(
        `/todo`,
        fetcher
    );
    if (!data) { return <></> }
    return (
        <>
            <DashboardProgressComponent />
            <DashboardTodoList />
        </>
    )
};