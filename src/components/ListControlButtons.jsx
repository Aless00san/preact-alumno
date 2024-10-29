import React from 'react';
import './ListControlButtons.css';

import { useStudentStore } from '../store/StudentStore';

export function ListControlButtons({
  objectToPersist,
  list,
  setList,
  clearStudent,
}) {
  // Function to add a new student
  const addObject = () => {
    const newObject = { ...objectToPersist };

    // Check for duplicate names
    if (list.find(student => student.name === newObject.name)) {
      alert(`There can't be two students with the same name`);
      return;
    } else if (!newObject.name) {
      alert('The student name cannot be empty');
      return;
    } else if (!newObject.course) {
      alert('The student course cannot be empty');
      return;
    }

    // sets the new array with the new student
    setList([...list, newObject]);
    clearStudent();
  };

  const clearList = () => {
    setList([]);
  };

  return (
    <div className='buttons'>
      <button onClick={addObject}>Add</button>
      <button onClick={clearList}>Clear</button>
    </div>
  );
}
