import React from 'react';
import { render } from 'react-dom';

const Application: React.FunctionComponent<{}> = () => (
    <h1>Hello world</h1>
);

render(<Application />, document.getElementById('todo-app'));