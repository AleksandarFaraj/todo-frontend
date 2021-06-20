

import React from 'react';
import useSWR from 'swr';
import { fetcher } from '~/src/util/fetcher';
import { DashboardTodoItem } from './DashboardTodoItem';

export const DashboardTodoList: React.FunctionComponent<{}> = () => {
    const { data, error } = useSWR<Todos>(
        `/todo`,
        fetcher
    );
    if (!data) return (<>"Loading..."</>)
    return (
        <div className="flex flex-col">
            {
                data.map((todo) => (
                    <DashboardTodoItem key={todo.id} todo={todo} />
                ))
            }

        </div>
    );
}