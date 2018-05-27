import React, { Component } from 'react';
import { forEach, isEmpty } from 'lodash';
import Todo from '../todo/Todo';
import './TodoList.css';

class TodoList extends Component {
    renderTodos () {
        const { data } = this.props;

        const createTodos = (items, depth) => {
            let todos = []; 

            forEach(items, item => {
                todos.push(
                    <Todo 
                        { ...item }
                        key={item.id} 
                        depth={depth} 
                    />
                );

                if (!isEmpty(item.items)) {
                    todos = [
                        ...todos,
                        ...createTodos(item.items, depth + 1)
                    ];
                }
            });

            return todos;
        };

        return createTodos(data.items, 1);
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
                text: 'todo 5',
                items: [{
                    id: 6,
                    text: 'todo 6'
                }, {
                    id: 7,
                    text: 'todo 7'
                }]
            }]
        }, {
            id: 8,
            text: 'todo 8'
        }]
    }
}

export default TodoList;