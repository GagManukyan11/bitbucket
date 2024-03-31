import React, { useEffect, useState } from 'react';
import { ICourse, ITag } from './types';

export const useLogiClike = () => {
    const [tags, setTags] = useState<ITag[]>([]);
    const [data, setData] = useState<ICourse[]>([])
    const [courses,setCourses] = useState<ICourse[]>([])

    const getData = async () => {
        try {
            const response = await fetch('https://logiclike.com/docs/courses.json');
            if (!response.ok) {
                throw new Error('Ошибка при загрузке данных');
            }
            const data: ICourse[] = await response.json();
            setData(data)
            setCourses(data)
            const uniqueTags: string[] = Array.from(new Set<string>(data.flatMap((course: ICourse) => course.tags)));
            const tagObjects = uniqueTags.map((tag, index) => ({ id: index+1, name: tag, active: false }));
            setTags([{ id: 0, name: 'Все темы', active: true }, ...tagObjects]);
        } catch (error) {
            console.error('Произошла ошибка:', error);
        }
    };

    const handleTagClick = (tagId: number) => {
        if (tagId === 0) {
            setCourses(data);
        } else {
            const filteredCourses = data.filter(course => course.tags.includes(tags.find(tag => tag.id === tagId)?.name || ''));
            setCourses(filteredCourses);
        }
        setTags(prevTags =>
            prevTags.map(tag => ({
                ...tag,
                active: tag.id === tagId
            }))
        );
    };

    useEffect(() => {
        getData();
    }, []);

    return { tags, handleTagClick, courses };
};