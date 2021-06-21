

import React from 'react';
import { ProgressBar } from '~/src/components/ProgressBar';
import { AddTodoButton } from '../AddTodoButton';

export const DashboardProgressComponent: React.FunctionComponent<{ todos: Todos }> = ({ todos }) => {
    let progression = 0;
    if (todos && todos.length > 0) {
        progression = todos.reduce((p, todo) => todo.status ? p + 1 : p, 0) / todos.length
    }
    let emojiPick = ["😊", "Lets get started"];
    if (progression > 0.4 && todos.length > 3) emojiPick = ["😀", "You are doing great!"]
    if (progression > 0.6 && todos.length > 5) emojiPick = ["😁", "We are on a roll!"]
    if (progression === 1) emojiPick = ["✔", "Done for today!"]
    if (progression === 1 &&  todos.length < 3) emojiPick = ["🧐", "Try adding more"]

    if (progression > 0.8 && todos.length > 7) emojiPick = ["🤩", "Rockstar!"]

    return (
        <div className="flex flex-col items-center mt-16 mx-8">
            <div className="text-5xl m-4">{emojiPick[0]}</div>
            <div className="text-xl m-4">{emojiPick[1]}</div>
            {
                todos &&
                    todos.length > 0 ? <ProgressBar value={progression} /> : <div className="text-center">
                    <p>There are no items here!</p>

                    <p>Perhaps you should add some?</p>

                    <AddTodoButton></AddTodoButton>
                </div>
            }
        </div>
    )
}