/**
 * TodoServiceContext provides a global state for initialTodo values. It's purpose is to transport data to other views. 
 * The main reason is because SWR does not seem to have an option to pause re-validation. 
 * This pattern really should be a library/swr feature request, can't find info about SWR and pushing the deduplication timer with either time or promise?
*/
import React, { createContext, useState } from "react";

const TodoServiceContext = createContext<{ initialTodos?: Todos, setInitialTodos: (todos?: Todos) => void }>({ setInitialTodos: () => { } });

export const TodoServiceProvider: React.FunctionComponent<{}> = (props) => {
    const [initialTodos, setInitialTodos] = useState<Todos>()
    return (<TodoServiceContext.Provider value={{ initialTodos, setInitialTodos }} {...props} />)
}
export const useTodoService = () => React.useContext(TodoServiceContext);