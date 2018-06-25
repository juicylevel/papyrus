import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { map } from 'lodash';
import './Todo.css';

class Todo extends Component {
    renderChildren() {
        const {id, childIds} = this.props;
        return map(childIds, childId => (
            <ConnectedTodo
                key={childId}
                id={childId}
                parentId={id}
            />
        ))
    }

    render() {
        const {
            forwardedRef,
            text,
            onDragStart,
            onMouseDown
        } = this.props;

        const childrenTodos = this.renderChildren();

        return (
            <div
                ref={forwardedRef}
                className="Todo"
                onDragStart={onDragStart}
                onMouseDown={onMouseDown}
            >
                <span className="text">{text}</span>
                {childrenTodos}
            </div>
        )
    }
}

Todo.propTypes = {
    id: PropTypes.number,
    parentId: PropTypes.number,
    text: PropTypes.string,
    childIds: PropTypes.arrayOf(PropTypes.number)
}

const ConnectedTodo = connect(
    (state, ownProps) => ({
        ...state.todo[ownProps.id]
    })
)(Todo);

export default ConnectedTodo;
