import React from "react";

export const AppStyleComponent: React.FunctionComponent<{}> = ({ children }) => (
    <div className="text-gray-600 mt-2">
        {children}
    </div>
);