import React from "react";
import { useHistory } from "react-router-dom";



export const BackButton: React.FunctionComponent<{}> = () => {
    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }
    return (<button type="button" onClick={goBack}>
        X
    </button>)
}
