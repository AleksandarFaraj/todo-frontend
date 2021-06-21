import { apiUrl } from "../util/env";

const defaultHeaders = {
    'Content-Type': 'application/json'
};
export const todoAdd = async (todo: Partial<Todo>): Promise<Todo> => {
    const response = await fetch(apiUrl("/todos"), {
        method: "POST",
        headers: defaultHeaders,
        body: JSON.stringify(todo)
    })
    return response.json();
}
export const todoPut = async (todo: Todo): Promise<Todo> => {
    const response = await fetch(apiUrl("/todos", todo.id), {
        method: "PATCH",
        headers: defaultHeaders,
        body: JSON.stringify(todo)
    })
    return response.json();
}

export const todoDelete = async (todo: Todo): Promise<Todo> => {
    const response = await fetch(apiUrl("/todos", todo.id), {
        method: "DELETE",
        headers: defaultHeaders,
    })
    return response.json();
}