import React from "react";

export const AppStyleComponent: React.FunctionComponent<{}> = ({ children }) => (
    <div className="text-gray-600">
        {children}
    </div>
);