import React from 'react';
import './LogiClike.scss'
import Tags from '../Tags/Tags';
import Courses from '../Courses/Courses';
import { useLogiClike } from './useLogiClike';

const LogiClike = () => {
    const {tags,handleTagClick,courses} = useLogiClike()
  return (
    <div className='logClike'>
       <Tags tags={tags} handleTagClick={handleTagClick}/>
       <Courses courses={courses}/>
    </div>
  );
}

export default LogiClike;
