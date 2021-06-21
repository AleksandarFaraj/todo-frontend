import React from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Controller, UseFormRegisterReturn } from "react-hook-form";
export const CardFormDateTimePicker: React.FunctionComponent<any & { refRegister: () => UseFormRegisterReturn, control: any }> = ({ refRegister, control, ...props }) => (
    <div>
        <div className="border-b-2 border-gray-200 border-w-1 flex items-center text-sm focus:outline-none">
            <label className="mr-8 font-medium py-1"><span className="mr-4">Due date</span>
                <Controller
                    control={control}
                    {...props}
                    render={(props) => (
                        <ReactDatePicker
                            name={props.field.name}
                            showTimeSelect
                            className="input bg-transparent focus:outline-none"
                            placeholderText=""

                            onChange={(e) => props.field.onChange(e)}
                            selected={props.field.value}
                            timeFormat="HH:mm"
                            dateFormat="yyyy-MM-dd HH:mm"
                        />
                    )}
                />
            </label>
        </div>
    </div>
)
