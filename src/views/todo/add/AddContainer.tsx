import { BackButton } from "../../../containers/util/BackButton"
import React from "react"

export const AddContainer: React.FunctionComponent<{}> = () => {
    return (<div>
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
    </div>)
}