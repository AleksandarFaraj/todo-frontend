import React from "react";

export const CardFormComponent: React.FunctionComponent<{}> = ({ children }) => (
    <div className="rounded-sm bg-gray-50 rounded-xl py-2 px-4 mt-8 mb-4 ">
        {children &&
            React.Children.map(children, child => (
                <div className="border-gray-150 border-solid border-b-2 last:border-b-0">{child}</div>
            ))
        }
    </div>
)