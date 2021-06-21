

import React from 'react';
import { DashboardTodoItem } from './DashboardTodoItem';

export const DashboardTodoList: React.FunctionComponent<{ todos: Todos }> = ({ todos }) => {
    return (
        <div className="flex flex-col">
            {
                todos.map((todo) => (
                    <DashboardTodoItem key={todo.id} todo={todo} />
                ))
            }
        </div>
    );
}