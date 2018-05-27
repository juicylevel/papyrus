import React, { Component } from 'react';
import PropTypes from 'prop-types';
import draggable from '../dnd/draggable';
import './Todo.css';

class Todo extends Component {
    render () {
        const {forwardedRef, depth, text, ...rest} = this.props;
        const className = `Todo depth-${depth}`;
        return (
            <div ref={forwardedRef} className={className} {...rest}>
                <span className="text">{ text }</span>
            </div>
        )
    }
}

Todo.propTypes = {
    depth: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    text: PropTypes.string.isRequired
}

Todo.defaultProps = {
    depth: 1
}

export default draggable()(Todo);