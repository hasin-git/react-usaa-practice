import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './redux/configureStore';
import TodoInputApp from './components/TodoInputApp';
import './index.css';

let store = configureStore();

ReactDOM.render((
            <Provider store={store}>
                <TodoInputApp />
            </Provider>),
            document.getElementById('root')
);
