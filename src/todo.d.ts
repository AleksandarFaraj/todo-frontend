type Todo = {
    id: string,
    title: string,
    description: string,
    todo_type: string
    created_at: Date,
    updated_at: Date,
    due_date: Date
    status: boolean
}
type Todos = Todo[]