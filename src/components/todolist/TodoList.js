import React, { Component } from 'react';
import { forEach } from 'lodash';
import Todo from '../todo/Todo';
import './TodoList.css';

class TodoList extends Component {
    renderTodos () {
        const { data } = this.props;

        const createTodos = items => {
            let todos = []; 

            forEach(items, item => {
                todos.push(
                    <Todo key={item.id} { ...item } />
                );

                if (item.items) {
                    todos = [
                        ...todos,
                        ...createTodos(item.items)
                    ]
                }
            });

            return todos;
        };

        return createTodos(data.items);
    }

    render () {
        const todos = this.renderTodos();

        console.log(todos);

        return (
            <div className="TodoList">
                { todos }
            </div>
        ) 
    }
}

TodoList.defaultProps = {
    data: {
        id: 1,
        date: '2018-05-27',
        items: [{
            id: 1,
            text: 'todo 1'
        }, {
            id: 2,
            text: 'todo 2'
        }, {
            id: 3,
            text: 'todo 3',
            items: [{
                id: 4,
                text: 'todo 4'
            }, {
                id: 5,
                text: 'todo 5'
            }]
        }]
    }
}

export default TodoList;