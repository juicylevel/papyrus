import React, { Component } from 'react';
import Todo from '../todo/Todo';
import './TodoList.css';

class TodoList extends Component {
    render() {
        return (
            <div className="TodoList">
                <Todo id={0} />
            </div>
        )
    }
}

export default TodoList;
