const defaultHeaders = {
    'Content-Type': 'application/json'
};
export const todoAdd = async (todo: Partial<Todo>): Promise<Todo> => {
    const response = await fetch(`http://localhost:8080/todo/${todo.id}`, {
        method: "POST",
        headers: defaultHeaders,
        body: JSON.stringify(todo)
    })
    return response.json();
}
export const todoPut = async (todo: Todo): Promise<Todo> => {
    const response = await fetch(`http://localhost:8080/todo/${todo.id}`, {
        method: "PUT",
        headers: defaultHeaders,
        body: JSON.stringify(todo)
    })
    return response.json();
}

export const todoDelete = async (todo: Todo): Promise<Todo> => {
    const response = await fetch(`http://localhost:8080/todo/${todo.id}`, {
        method: "DELETE",
        headers: defaultHeaders,
    })
    return response.json();
}