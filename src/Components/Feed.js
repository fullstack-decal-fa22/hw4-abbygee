import { useState } from 'react';
import React from 'react';

import Block from './Block';
import Menu from './Menu';

const Feed = () => {
    /* useState (Lesson 4) */
    const [listOfBlocks, setListOfBlocks] = useState([]);

    /* Map function with components (Lesson 5) */
    // STAFF TODO: note the unique key when mapping, bad to use indexes as keys, better practice?
    const posts = listOfBlocks.map((color, i) => 
        <Block key={i} color={color} caption={color}></Block>
    );

    const handleClick = (color) => {
        setListOfBlocks(posts => [color, ...posts]);
    }

    return (
        <div>
            <Menu handleClick={handleClick}></Menu>

            {posts}
        </div>
    );
}

export default Feed;