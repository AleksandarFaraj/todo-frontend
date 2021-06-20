import React, { useRef, useState } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import TextareaAutosize, { TextareaAutosizeProps } from 'react-textarea-autosize';

export const CardFormTextArea: React.FunctionComponent<TextareaAutosizeProps & { refRegister: () => UseFormRegisterReturn }> = ({ refRegister, ...props }) => (
    <TextareaAutosize
        {...props}
        {...refRegister()}
        className="my-2 py-1 bg-transparent placeholder-gray-300 w-full outline-none resize-none" maxRows={7}
    />
)
