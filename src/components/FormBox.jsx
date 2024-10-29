import { useState } from 'preact/hooks';
import './FormBox.css';

export function FormBox({ student, setStudent }) {
  const handleAgeChange = e => {
    const newStudent = { ...student };
    newStudent.age = e.target.value;
    setStudent(newStudent);
  };

  const handleNameChange = e => {
    const newStudent = { ...student };
    newStudent.name = e.target.value;
    setStudent(newStudent);
  };

  const handleCourseChange = e => {
    const newStudent = { ...student };
    newStudent.course = e.target.value;
    setStudent(newStudent);
  };

  return (
    <>
      <form id="form">
        <label>Name: </label>
        <input
          type="text"
          value={student.name || ''}
          onChange={handleNameChange}
        />
        <label>Age: </label>
        <input
          type="text"
          value={student.age || ''}
          onChange={handleAgeChange}
        />
        <label>Course: </label>
        <select
          id="cursoSelector"
          onChange={handleCourseChange}
          value={student.course || 'Course'}
        >
          <option
            selected="true"
            disabled="disabled"
          >
            Course
          </option>
          <option value="1st">1st</option>
          <option value="2nd">2nd</option>
          <option value="3rd">3rd</option>
        </select>
      </form>
    </>
  );
}
