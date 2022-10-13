import '../Styles/Block.css';
import React from 'react';

const Block = (props) => {
    /* Props (Lesson 2) */
    let bgColor = props.color;
    let captionText = props.caption;

    /* Defining styles within a react component (as opposed to linking css)*/
    const postColor = {
        backgroundColor: bgColor,
    };

    return (
        <div data-testid='main-component'>
            <div className="post" style={postColor}></div>
            <div className="caption">{captionText}</div>
        </div>
    );
}

export default Block;