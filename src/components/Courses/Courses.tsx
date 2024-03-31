import React from 'react';
import './Courses.scss'
import { ICourseParams } from './types';
import Course from './components/Course/Course';
const Courses = ({courses} : ICourseParams) => {
  return (
    <div className='courses'>
        {courses.length && courses.map(e => <Course key={e.id} course={e}/>)}
    </div>
  );
}

export default Courses;
