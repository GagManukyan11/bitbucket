import React from 'react';
import { ITagsParams } from './types';
import './Tags.scss';
import Tag from './components/Tag/Tag';

const Tags = ({ tags, handleTagClick }: ITagsParams) => {
    return (
        <div className='tags'>
            {tags.map(tag => (
                <Tag
                    key={tag.id}
                    id={tag.id}
                    name={tag.name}
                    active={tag.active}
                    onClick={() => handleTagClick(tag.id)}
                />
            ))}
        </div>
    );
}

export default Tags;