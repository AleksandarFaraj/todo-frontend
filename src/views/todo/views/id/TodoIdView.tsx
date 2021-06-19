import { BackButton } from "~/src/components/util/BackButton"
import React from "react"

export const TodoContainer: React.FunctionComponent<{}> = () => (
    <div>
        <h1>Title</h1>
        <BackButton></BackButton>
        <div>
            Due date
        </div>
        <div>
            Description
        </div>
        <div>
            Type
        </div>
        <button>Delete</button>
    </div>
)
