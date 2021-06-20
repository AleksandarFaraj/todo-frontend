import React, { ChangeEvent, InputHTMLAttributes, useState } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

export const CardFormInput: React.FunctionComponent<React.InputHTMLAttributes<HTMLInputElement> & { refRegister: () => UseFormRegisterReturn }> = ({ refRegister, ...props }) => {
    return (
        <input className="my-1 py-1 bg-transparent placeholder-gray-300 w-full outline-none"
            {...props}
            {...refRegister()}
            onKeyPress={(e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => { e.key === 'Enter' && e.preventDefault(); }}
        />
    )
}