const defaultHeaders = {
    'Content-Type': 'application/json'
};

export const todoPut = async (todo: Todo): Promise<Todos> => {
    const response = await fetch(`http://localhost:8080/todos/${todo.id}`, {
        method: "PUT",
        headers: defaultHeaders,
        body: JSON.stringify(todo)
    })
    return response.json();
}