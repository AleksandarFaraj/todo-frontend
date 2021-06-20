import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

export const CardFormTypeSelector: React.FunctionComponent<React.SelectHTMLAttributes<HTMLSelectElement> & { refRegister: () => UseFormRegisterReturn }> = ({ refRegister, children, ...props }) => {
    return (
        <select className="my-1 pb-1 bg-transparent placeholder-gray-300 text-gray-400 w-full outline-none text-sm"
            {...props}
            {...refRegister()}>
            {children}
        </select>
    )
}