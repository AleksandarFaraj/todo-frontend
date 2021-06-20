

import React from 'react';
import useSWR from 'swr';
import { ProgressBar } from '~/src/components/ProgressBar';
import { fetcher } from '~/src/util/fetcher';

export const DashboardProgressComponent: React.FunctionComponent<{}> = () => {
    const { data, error } = useSWR<Todos>(
        `/todo`,
        fetcher
    );
    return (
        <div className="flex flex-col items-center mt-16 mx-8" >
            <div className="text-5xl m-4">😊</div>
            <div className="text-xl m-4">Lets get started</div>
            {data && data.length > 0 ? <ProgressBar finished={data.reduce((p, todo) => todo.status ? p+1 : p, 0) / data.length} /> : <div>There are no items here! Perhaps you should add some?</div>}

        </div >
    )
}