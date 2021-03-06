

import React from 'react';
import { useHistory } from 'react-router-dom';
import { mutate } from 'swr';
import { todoPut } from '~/src/api/TodosApi';
import { EmojiIconComponent } from '~/src/components/EmojiIconComponent';

export const DashboardTodoItem: React.FunctionComponent<{ todo: Todo }> = ({ todo }) => {
    const history = useHistory();
    function gotoTodoHandleClick() {
        history.push("/todos/" + todo.id);
    }
    function updateStatusHandleClick(e: React.MouseEvent) {
        const updatedTodo = { ...todo, status: !todo.status };
        /* This pattern is re-occuring, should be able to a libary for this */
        mutate("/todos", (todos: Todos) => {
            if (todos) {
                const oldTodoIndex = todos.findIndex(_todo => _todo.id === todo.id);
                const newTodoList = [...todos]
                newTodoList[oldTodoIndex] = updatedTodo
                return newTodoList
            }
            return [updatedTodo]
        }, false)

        /*swr */
        /*send request */
        todoPut(updatedTodo)
            .catch((e) => {
                /* re-try logic */
                /* error notification */
                /* handle conflict */
            }).finally(() => {
                mutate("/todos")
            })
    }
    return (
        <div className="flex flex-row items-center hover:bg-gray-100 active:bg-gray-100" >
            <div>
                <label className="inline-block p-4" style={{ lineHeight: 0 }}>
                    <input type="checkbox" checked={todo.status} readOnly className="h-4 w-4" onClick={updateStatusHandleClick} />
                </label>
            </div>
            <div className="flex-grow py-3" onClick={gotoTodoHandleClick} >{todo.title}</div>
            <div className="pr-4 py-3" onClick={gotoTodoHandleClick} ><EmojiIconComponent className="text-xl" todo_type={todo.todo_type} /></div>
        </div >
    )

}