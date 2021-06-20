
import React from "react"
import { BackButton } from "~/src/components/util/BackButton"

export const TodoAddView: React.FunctionComponent<{}> = () => (
    <div>
        <h1>Add todo</h1>
        <BackButton></BackButton>

        <div>
            Title
        </div>
        <div>
            Description
        </div>
        <div>
            Due date
        </div>
        <button>Add</button>
    </div>
)
