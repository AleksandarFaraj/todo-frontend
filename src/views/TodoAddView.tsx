
import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import useSWR from "swr";
import { BackButton } from "~/src/components/util/BackButton";
import { todoAdd } from "../api/TodosApi";
import { CardFormComponent } from "../components/CardForm/CardFormComponent";
import { CardFormDateTimePicker } from "../components/CardForm/CardFormDatePicker";
import { CardFormInput } from "../components/CardForm/CardFormInput";
import { CardFormTextArea } from "../components/CardForm/CardFormTextArea";
import { CardFormTypeSelector } from "../components/CardForm/CardFormTypeSelector";
import { useTodoService } from "../TodoServiceContext";
import { fetcher } from "../util/fetcher";

export const TodoAddView: React.FunctionComponent<{}> = () => {
    const { setInitialTodos } = useTodoService()
    const history = useHistory()
    const { register, handleSubmit, formState: { errors }, control } = useForm({});
    const { mutate } = useSWR("/todo", fetcher) /* pre-fetch */
    const onSubmit = async ({ title, description, due_date }: Todo) => {
        const addTodo = { title, description, due_date, id: "123" } as Todo;
        /* mutation of /todo. Disable re-validate locally */
        await mutate((todos: Todos) => {
            if (todos) {
                const newTodoList: Todos = [...todos]
                newTodoList.push(addTodo);
                setInitialTodos(newTodoList)
                history.push("/") /* send initial state */
                return newTodoList
            }
            return [addTodo]
        }, false)
        todoAdd(addTodo)
            .catch((e) => {
                /* re-try logic */
                /* error notification */
                /* handle conflict */
            }).finally(async () => {
                /* */
                //await mutate()
                setInitialTodos()
            })
        return false
    }


    return (<div className="m-8">
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-row my-4 items-end">
                <BackButton>Cancel</BackButton>
                <div className="flex-grow text-center">
                    <h1 className="text-md font-medium">New Todo</h1>
                </div>
                <button type="submit">Add</button>
            </div>
            <CardFormComponent>
                <CardFormInput refRegister={() => register("title")} placeholder="Todo" />
                <CardFormTextArea refRegister={() => register("description")} placeholder="Notes" />
            </CardFormComponent>
            <CardFormComponent>
                <CardFormDateTimePicker control={control} name="due_date" defaultValue={null}></CardFormDateTimePicker>
            </CardFormComponent>
            <div className="mt-4">
                <CardFormComponent>
                    <CardFormTypeSelector refRegister={() => register("todo_type")} placeholder="Todo" >
                        <option value="default">📩 Default</option>
                        <option value="web">🕸 Web Development</option>
                        <option value="music">🏠 Music</option>
                    </CardFormTypeSelector>
                </CardFormComponent>
            </div>


        </form>
    </div>)
}
