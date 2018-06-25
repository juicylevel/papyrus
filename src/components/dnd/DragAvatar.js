import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './DragAvatar.css';

class DragAvatar extends Component {
    render () {
        const {display, x, y, width, text} = this.props;
        const style = {
            left: `${x}px`,
            top: `${y}px`,
            display: display ? 'block' : 'none',
            width: `${width}px`,
        };
        return (
            <div
                className="DragAvatar"
                style={style}
            >
                {text}
            </div>
        );
    }
}

DragAvatar.propTypes = {
    display: PropTypes.bool,
    x: PropTypes.number,
    y: PropTypes.number,
    width: PropTypes.number,
    text: PropTypes.string
};

DragAvatar.defaultProps = {
    display: false,
    x: 0,
    y: 0,
    width: 200,
    text: 'Задача'
};

export default DragAvatar;
