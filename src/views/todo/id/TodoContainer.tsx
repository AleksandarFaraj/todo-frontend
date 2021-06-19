import { BackButton } from "../../../containers/util/BackButton"
import React from "react"

export const TodoContainer: React.FunctionComponent<{}> = () => {
    return (<div>
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
    </div>)
}