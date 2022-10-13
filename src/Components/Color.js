import React from 'react';

const Color = (props) => {
    // If we were to create a Menu Component, we would have to teach how to pass props back up from a child to a parent 

    return (
        <button onClick={() => props.handleClick(props.color)}>Post {props.color}</button>
    );
}

export default Color;