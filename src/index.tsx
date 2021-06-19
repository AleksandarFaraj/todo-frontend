import React from 'react';
import { render } from 'react-dom';
import { RouteContainer } from './RouteContainer'
const AppContainer: React.FunctionComponent<{}> = () => (
    <RouteContainer></RouteContainer>
);
render(<AppContainer />, document.getElementById('todo-app'));