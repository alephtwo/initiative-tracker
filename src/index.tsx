import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Application from './components/Application';

const app = <Application />;
const mount = document.getElementById('app');

ReactDOM.render(app, mount);
