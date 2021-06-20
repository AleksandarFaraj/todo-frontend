import React from "react";
import ReactDatePicker from "react-datepicker";
import { Controller, UseFormRegisterReturn } from "react-hook-form";
import "react-datepicker/dist/react-datepicker.css";
export const CardFormDateTimePicker: React.FunctionComponent<any & { refRegister: () => UseFormRegisterReturn, control: any }> = ({ refRegister, control, ...props }) => {
    return (
        <div>
            <div className="border-b-2 border-gray-200 border-w-1 flex items-center justify-between">
                <label htmlFor={props.name}>Due date </label>
                <Controller
                    control={control}
                    {...props}
                    render={(props) => (
                        <ReactDatePicker
                            name={props.field.name}
                            showTimeSelect
                            className="input bg-transparent"
                            placeholderText="Due date"
                            onChange={(e) => props.field.onChange(e)}
                            selected={props.field.value}
                            dateFormat="yyyy-MM-dd HH:mm"
                        />
                    )}
                />
            </div>
        </div>
    )
}