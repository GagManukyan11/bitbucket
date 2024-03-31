import React from 'react';
import './Course.scss'
import { ICourseParams } from './types';

const Course = ({course}: ICourseParams) => {
  return (
    <div className='course'>
      <div className='imgContainer' style={{background:course.bgColor}}>
        <img className='imgC' src={course.image} alt={course.name} />
      </div>
      <div className='textC'>
        <span className='text'>{course.name}</span>
      </div>
    </div>
  );
}

export default Course;
