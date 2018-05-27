import React from 'react';

const draggable = params => {
    return Component => {
        return class Draggable extends React.Component {
            constructor(props) {
                super(props);

                this.elRef = React.createRef();

                this.handleMouseDown = this.handleMouseDown.bind(this);
            }

            handleMouseDown(e) {
                const el = this.elRef.current;

                const left = e.pageX - el.offsetWidth / 2 + 'px';
                const top = e.pageY - el.offsetHeight / 2 + 'px';

                console.log({left, top});
            }

            render() {
                return (
                    <Component 
                        {...this.props}
                        forwardedRef={this.elRef} 
                        onMouseDown={this.handleMouseDown}
                    />
                )
            }

            componentDidMount() {
                
            }
        }
    }
}

export default draggable;