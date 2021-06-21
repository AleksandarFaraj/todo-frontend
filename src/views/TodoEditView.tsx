import React from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory, useParams } from "react-router-dom";
import useSWR, { mutate } from "swr";
import { todoDelete, todoPut } from "~/src/api/TodosApi";
import { CardFormComponent } from "~/src/components/CardForm/CardFormComponent";
import { CardFormDateTimePicker } from "~/src/components/CardForm/CardFormDatePicker";
import { CardFormInput } from "~/src/components/CardForm/CardFormInput";
import { CardFormTextArea } from "~/src/components/CardForm/CardFormTextArea";
import { BackButton } from "~/src/components/util/BackButton";
import { fetcher } from "~/src/util/fetcher";
import { CardFormTypeSelector } from "../components/CardForm/CardFormTypeSelector";
import { useTodoService } from "../TodoServiceContext";


export const TodoEditView: React.FunctionComponent<{}> = ({ }) => {
    const { setInitialTodos } = useTodoService();
    let { id } = useParams<{ id: string }>();
    const history = useHistory();
    /* preload */
    const { data, error } = useSWR<Todos>("/todos/", fetcher)


    const { register, handleSubmit, formState: { errors }, control } = useForm({});
    if (!data) return <></>;

    const todo = data!.find(_todo => _todo.id === id);
    if (!todo) {
        return <><Link to={"/"}><div>Todo could not be found</div></Link></>
    };
    const onSubmit = async ({ title, description, due_date, todo_type }: Todo) => {
        const updatedTodo = { ...todo, title, description, due_date, todo_type };
        mutate("/todos", (todos: Todos) => {
            if (todos) {
                const newTodoList = [...todos]
                const oldTodoIndex = todos.findIndex(todo => todo.id === id);
                newTodoList[oldTodoIndex] = updatedTodo
                if (oldTodoIndex === -1) {
                    console.error("Warning: TodoEditView cannot find the Todo item supposed to be updated.")
                    return todos;
                }
                setInitialTodos(newTodoList)
                history.push("/");
                /* send initial state */
                /* Might be an edge case where it mutates todos. */
                return newTodoList
            }
            return [updatedTodo]
        }, false)
        /*send request */

        todoPut(updatedTodo)
            .catch((e) => {
                /* re-try logic */
                /* error notification */
                /* handle conflict */
            }).finally(() => {
                mutate("/todos")
            })

    };
    const onDeleteClick = async () => {
        mutate("/todos", (todos: Todos) => {
            if (todos) {
                const filteredTodoList = todos.filter(todo => todo.id !== id);
                setInitialTodos(filteredTodoList)
                history.push("/");
                /* send initial state */
                /* Might be an edge case where it mutates todos. */
                return filteredTodoList
            }
            return []
        })
        /*send request */

        todoDelete({ id } as Todo)
            .catch((e) => {
                /* re-try logic */
                /* error notification */
                /* handle conflict */
            }).finally(() => {
                mutate("/todos")
            })

    }

    return (<div className="m-8">
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-row my-4 items-end">
                <BackButton>Cancel</BackButton>
                <div className="flex-grow text-center">
                    <h1 className="text-md font-medium">Details</h1>
                </div>
                <button type="submit">Done</button>
            </div>
            <CardFormComponent>
                <CardFormInput refRegister={() => register("title")} placeholder="Todo" defaultValue={todo.title} />
                <CardFormTextArea refRegister={() => register("description")} placeholder="Notes" defaultValue={todo.description} />
            </CardFormComponent>
            <CardFormComponent>
                <CardFormDateTimePicker control={control} name="due_date" defaultValue={todo.due_date && new Date(todo.due_date)}></CardFormDateTimePicker>
            </CardFormComponent>
            <div>
                <CardFormComponent>
                    <CardFormTypeSelector refRegister={() => register("todo_type")} placeholder="Todo" defaultValue={todo.todo_type} >
                        <option value="default">📩 Default</option>
                        <option value="web">🕸 Web Development</option>
                        <option value="music">🏠 Music</option>
                    </CardFormTypeSelector>
                </CardFormComponent>
            </div>


        </form>
        <div className="mt-8">
            <button className="" onClick={onDeleteClick}>Delete</button>
        </div>
    </div>);
}
