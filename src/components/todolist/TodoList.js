import React, { Component } from 'react';
import Todo from '../todo/Todo';
import DragAvatar from '../dnd/DragAvatar';
import './TodoList.css';

class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            displayAvatar: false,
            shiftX: 0,
            shiftY: 0,
            xAvatar: 0,
            yAvatar: 0,
            avatarWidth: 200
        };

        this.handleStartDrag = this.handleStartDrag.bind(this);
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.handleMouseUp = this.handleMouseUp.bind(this);
    }

    getElBox(el) {
        const box = el.getBoundingClientRect();
        return {
            x: box.left + window.pageXOffset,
            y: box.top + window.pageYOffset,
            width: box.width
        };
    }

    getShiftParams(event) {
        const el = event.target;
        const box = this.getElBox(el);
        const shiftX = event.pageX - box.x;
        const shiftY = event.pageY - box.y;
        const avatarWidth = box.width;
        return {
            shiftX,
            shiftY,
            avatarWidth
        }
    }

    getAvatarCoords(event, shiftX, shiftY) {
        const xAvatar = event.pageX - shiftX;
        const yAvatar = event.pageY - shiftY;
        return {
            xAvatar,
            yAvatar
        };
    }

    handleStartDrag(event) {
        event.preventDefault();
        event.stopPropagation();
    }

    handleMouseDown(event) {
        const shiftParams = this.getShiftParams(event);
        const {shiftX, shiftY, avatarWidth} = shiftParams;
        const avatarCoords = this.getAvatarCoords(shiftX, shiftY);

        this.setState({
            ...avatarCoords,
            shiftX,
            shiftY,
            avatarWidth
        });

        document.addEventListener('mousemove', this.handleMouseMove);
        document.addEventListener('mouseup', this.handleMouseUp);
    }

    handleMouseMove(event) {
        const {shiftX, shiftY} = this.state;
        const avatarCoords = this.getAvatarCoords(event, shiftX, shiftY);

        this.setState({
            ...avatarCoords,
            displayAvatar: true
        });
    }

    handleMouseUp(event) {
        this.setState({
            displayAvatar: false
        });

        document.removeEventListener('mousemove', this.handleMouseMove);
        document.removeEventListener('mouseup', this.handleMouseUp);
    }

    render() {
        const {displayAvatar, xAvatar, yAvatar, avatarWidth} = this.state;

        return (
            <div className="TodoList">
                <Todo id={0}
                    onDragStart={this.handleStartDrag}
                    onMouseDown={this.handleMouseDown}
                />
                <DragAvatar
                    display={displayAvatar}
                    x={xAvatar}
                    y={yAvatar}
                    width={avatarWidth}
                />
            </div>
        )
    }
}

export default TodoList;
