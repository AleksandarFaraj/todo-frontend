import React, { createContext } from 'react';
import { render } from 'react-dom';
import { AppStyleComponent } from './components/AppStyleComponent';
import { RouteContainer } from './RouteContainer'
import "/src/tailwind.css";

export const TodosContext = createContext({ todos: [] })

const AppContainer: React.FunctionComponent<{}> = () => (
    <AppStyleComponent>
        <RouteContainer></RouteContainer>
    </AppStyleComponent>
);
render(<AppContainer />, document.getElementById('todo-app'));