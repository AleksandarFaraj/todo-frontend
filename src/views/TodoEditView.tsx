import React from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import useSWR, { mutate } from "swr";
import { todoPut } from "~/src/api/TodosApi";
import { CardFormComponent } from "~/src/components/CardForm/CardFormComponent";
import { CardFormDateTimePicker } from "~/src/components/CardForm/CardFormDatePicker";
import { CardFormInput } from "~/src/components/CardForm/CardFormInput";
import { CardFormTextArea } from "~/src/components/CardForm/CardFormTextArea";
import { BackButton } from "~/src/components/util/BackButton";
import { fetcher } from "~/src/util/fetcher";
import { CardFormTypeSelector } from "../components/CardForm/CardFormTypeSelector";

export const TodoEditView: React.FunctionComponent<{ todo?: Todo }> = ({ todo = { title: "Fix styling after this", description: "what" } }) => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm({ defaultValues: { title: todo.title, description: todo.description } });
    const onSubmit = (data: any) => console.log(data);

    return (<div className="m-8">
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-row my-4 items-end">
                <BackButton>Cancel</BackButton>
                <div className="flex-grow text-center">
                    <h1 className="text-md font-bold">Details</h1>
                </div>
                <button type="submit">Done</button>
            </div>
            <CardFormComponent>
                <CardFormInput refRegister={() => register("title")} placeholder="Todo" defaultValue={data.title} />
                <CardFormTextArea refRegister={() => register("description")} placeholder="Notes" defaultValue={data.description} />
            </CardFormComponent>
            <CardFormComponent>
                <CardFormDateTimePicker control={control} name="due_date" defaultValue={new Date(data.due_date)}></CardFormDateTimePicker>
            </CardFormComponent>
            <div>
                <CardFormTypeSelector refRegister={() => register("todo_type")} placeholder="Todo" defaultValue={data.title} ></CardFormTypeSelector>
            </div>


        </form>
        <button>Delete</button>
    </div>);
}
