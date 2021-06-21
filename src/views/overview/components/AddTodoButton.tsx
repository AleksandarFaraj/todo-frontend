import React from "react";
import { Link } from "react-router-dom";

export const AddTodoButton: React.FunctionComponent<React.HTMLAttributes<HTMLButtonElement> & {}> = () => (
    <div>
        <Link to="/todos/add">
            <div>
                <button className="p-8 text-bold">Add todo</button>
            </div>
        </Link>
    </div>
)