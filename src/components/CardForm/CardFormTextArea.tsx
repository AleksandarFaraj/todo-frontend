import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import TextareaAutosize, { TextareaAutosizeProps } from 'react-textarea-autosize';

export const CardFormTextArea: React.FunctionComponent<TextareaAutosizeProps & { refRegister: () => UseFormRegisterReturn }> = ({ refRegister, ...props }) => (
    <TextareaAutosize
        {...props}
        {...refRegister()}
        className="mt-2 pb-1 bg-transparent placeholder-gray-300 w-full outline-none resize-none text-gray-400 text-sm" maxRows={7}
    />
)
