type Todo = {
    id: string,
    title: string,
    description: string,
    created_at: Date,
    updated_at: Date,
    due_date: Date
}
type Todos = Array<Todo>