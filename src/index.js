import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import App from './components/App';
import { unregister } from './registerServiceWorker';
import 'normalize.css';
import './index.css';

const initialState = {
    todo: {
        0: {
            id: 0,
            childIds: [1, 4, 5]
        },
        1: {
            id: 1,
            text: 'Todo 1',
            childIds: [2, 3]
        },
        2: {
            id: 2,
            text: 'Todo 2'
        },
        3: {
            id: 3,
            text: 'Todo 3'
        },
        4: {
            id: 4,
            text: 'Todo 4'
        },
        5: {
            id: 5,
            text: 'Todo 5',
            childIds: [6, 7, 8]
        },
        6: {
            id: 6,
            text: 'Todo 6'
        },
        7: {
            id: 7,
            text: 'Todo 7'
        },
        8: {
            id: 8,
            text: 'Todo 8'
        }
    }
};

const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

unregister();
