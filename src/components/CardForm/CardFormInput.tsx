import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

export const CardFormInput: React.FunctionComponent<React.InputHTMLAttributes<HTMLInputElement> & { refRegister: () => UseFormRegisterReturn }> = ({ refRegister, ...props }) => {
    return (
        <input className="my-1 pb-1 bg-transparent placeholder-gray-300 text-gray-400 w-full outline-none text-sm"
            {...props}
            {...refRegister()}
            onKeyPress={(e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => { e.key === 'Enter' && e.preventDefault(); }}
        />
    )
}