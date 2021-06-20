import { BackButton } from "~/src/components/util/BackButton"
import React from "react"
import { useForm } from "react-hook-form";
import { CardFormComponent } from "~/src/components/CardForm/CardFormComponent";
import { CardFormInput } from "~/src/components/CardForm/CardFormInput";
import { CardFormTextArea } from "~/src/components/CardForm/CardFormTextArea";

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
                <CardFormInput refRegister={() => register("title")} placeholder="Todo" />
                <CardFormTextArea refRegister={() => register("description")} placeholder="Notes" />
            </CardFormComponent>
            <div>
                Type
            </div>
            <div>
                Do date
            </div>

        </form>
        <button>Delete</button>
    </div>);
}
