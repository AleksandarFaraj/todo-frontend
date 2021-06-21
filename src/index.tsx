import React from 'react';
import { render } from 'react-dom';
import { AppStyleComponent } from './components/AppStyleComponent';
import { RouteContainer } from './RouteContainer';
import { TodoServiceProvider } from './TodoServiceContext';
import "/src/tailwind.css";



const AppContainer: React.FunctionComponent<{}> = () => (
    <AppStyleComponent>
        <TodoServiceProvider>
            <RouteContainer></RouteContainer>
        </TodoServiceProvider>
    </AppStyleComponent>    
);
render(<AppContainer />, document.getElementById('todo-app'));