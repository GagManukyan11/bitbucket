import React from 'react';
import './Tag.scss';
import { ITagParam } from './types';

const Tag = ({name, active, onClick } : ITagParam) => {
    return (
        <div className={active ? 'ativeTag' : 'notActive'} onClick={onClick}>
            <span className='text'>{name}</span>
        </div>
    );
}

export default Tag;