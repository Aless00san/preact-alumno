import { useState, useEffect } from 'preact/hooks';
import './ListBox.css';

export function ListBox({ list, setList }) {
  const [fadeOutName, setFadeOutName] = useState(null);
  const [students, setStudents] = useState([]);

  const removeStudent = student => {
    // Set the fade-out state for the student being removed
    setFadeOutName(student.name);

    // Delay the actual removal to allow the fade-out animation to complete
    setTimeout(() => {
      setList(list.filter(s => student.name !== s.name));
      setFadeOutName(null); // Reset fade-out state
    }, 500);
  };

  useEffect(() => {
    setStudents(list);
  }, [list]);

  return (
    <>
      <ul className="list">
        {list.length === 0 ? (
          <li> No students found</li>
        ) : (
          list.map(student => (
            <li
              key={student.name}
              className={`student-item ${
                fadeOutName === student.name ? 'fade-out' : ''
              }`}
            >
              {student.name}, {student.age}, {student.course}
              <button
                className="removeButton"
                onClick={() => removeStudent(student)}
              >
                ❌
              </button>
            </li>
          ))
        )}
      </ul>
    </>
  );
}
