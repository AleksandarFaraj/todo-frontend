

import React from 'react';
import { ProgressBar } from '~/src/components/ProgressBar';

export const DashboardProgressComponent: React.FunctionComponent<{ todos: Todos }> = ({ todos }) => {
    return (
        <div className="flex flex-col items-center mt-16 mx-8" >
            <div className="text-5xl m-4">😊</div>
            <div className="text-xl m-4">Lets get started</div>
            {todos && todos.length > 0 ? <ProgressBar value={todos.reduce((p, todo) => todo.status ? p + 1 : p, 0) / todos.length} /> : <div>There are no items here! Perhaps you should add some?</div>}

        </div >
    )
}