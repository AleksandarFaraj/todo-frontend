import React from 'react';
import { render } from 'react-dom';
import { AppStyleComponent } from './components/AppStyleComponent';
import { RouteContainer } from './RouteContainer';
import { TodoServiceProvider } from './TodoServiceContext';
import { SearchBarProvider } from './views/overview/components/search/component/SearchBarContext';
import "/src/tailwind.css";



const AppContainer: React.FunctionComponent<{}> = () => (
    <AppStyleComponent>
        <TodoServiceProvider>
            <SearchBarProvider>
                <RouteContainer></RouteContainer>
            </SearchBarProvider>
        </TodoServiceProvider>
    </AppStyleComponent>
);
render(<AppContainer />, document.getElementById('todo-app'));