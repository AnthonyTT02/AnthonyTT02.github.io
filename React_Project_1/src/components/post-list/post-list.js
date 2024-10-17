import React from 'react';

import PostListItem from '../post-list-item';
import './post-list.css';

// Funktsionaalne komponent postituste loendi kuvamiseks
const PostList = ({posts, onDelete, onToggleImportant, onToggleLiked}) => {

    // Loob iga postituse jaoks listi elemendi
    const elements = posts.map((item) => {
        const {id, ...itemProps} = item;
        return (
            <li key={id} className='list-group-item'>
                <PostListItem
                    {...itemProps}
                    onDelete={() => onDelete(id)}
                    onToggleImportant={() => onToggleImportant(id)}
                    onToggleLiked={() => onToggleLiked(id)}/>
            </li>
        )
    });

    // Funktsioon kogu loendi renderdamiseks
    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default PostList;
