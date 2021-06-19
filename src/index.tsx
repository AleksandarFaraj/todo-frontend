import React from 'react';
import { render } from 'react-dom';
import { RouteContainer } from './RouteContainer'
const ApplicationContainer: React.FunctionComponent<{}> = () => (
    <RouteContainer></RouteContainer>
);
render(<ApplicationContainer />, document.getElementById('todo-app'));