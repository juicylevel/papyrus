import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Todo.css';

class Todo extends Component {
    render () {
        const { depth } = this.props;
        const className = `Todo depth-${depth}`;
        return (
            <div className={className}>
                Todo
            </div>
        )
    }
}

Todo.propTypes = {
    depth: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
}

Todo.defaultProps = {
    depth: 1
}

export default Todo;