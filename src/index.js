import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
    {id: 1, message: 'hi', likesCount: 13},
    {id: 1, message: 'Hello', likesCount: 21}
];
let dialogs = [
    {id: 1, name: 'Lexa'},
    {id: 2, name: 'Nastya'},
    {id: 3, name: 'Roma'}
];
let messages = [
    {id: 1, message: 'Hey'},
    {id: 2, message: 'Hi'},
    {id: 3, message: 'Yo'}
]

ReactDOM.render(
    <React.StrictMode>
        <App posts={posts} dialogs={dialogs} messages={messages}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
