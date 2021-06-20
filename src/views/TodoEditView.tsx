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


export const TodoEditView: React.FunctionComponent<{}> = ({ }) => {
    let { id } = useParams<{ id: string }>();
    /** preload */
    const { data, error } = useSWR<Todo>("/todos/" + id, fetcher)
    const { register, handleSubmit, formState: { errors }, control } = useForm({});
    if (!data) return <></>;

    const onSubmit = ({ title, description, due_date }: Todo) => {
        const updatedTodo = { ...data, title, description, due_date };
        /** Updates will most likely happen. Don't block with async, rather update state and validate data later. **/
        mutate("/todo", (todos: Todos) => {
            if (todos) {
                const oldTodoIndex = todos.findIndex(todo => todo.id === id);

                /** Might be an edge case where it mutates todos. */
                if (oldTodoIndex === -1) {
                    console.error("Warning: TodoEditView cannot find the Todo item supposed to be updated.")
                    return todos;
                }

                const newTodoList = [...todos]
                newTodoList[oldTodoIndex] = updatedTodo
                return newTodoList
            }
            return [updatedTodo]
        }, false)
        /**send request */
        todoPut(updatedTodo)
            .catch((e) => {
                /** re-try logic **/
                /** error notification **/
                /** handle conflict **/
            }).finally(() => {
                mutate("/todo")
            })
    };

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
                <CardFormTypeSelector refRegister={() => register("todo_type")} placeholder="Todo" defaultValue={data.title} >
                    <option value="default">📩 Default</option>
                    <option value="web">🕸 Web Development</option>
                    <option value="music">🏠 Music</option>
                </CardFormTypeSelector>
            </div>


        </form>
        <button>Delete</button>
    </div>);
}
