import React, { Component } from 'react';
import Todo from '../todo/Todo';
import './TodoList.css';

class TodoList extends Component {
    render () {
        return (
            <div className="TodoList">
                <Todo depth="1" />
                <Todo depth="2" />
                <Todo depth="3" />
            </div>
        ) 
    }
}

export default TodoList;