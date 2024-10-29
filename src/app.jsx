import { useState } from 'preact/hooks';
//Preact components
import { FormBox } from './components/FormBox';
import { ListControlButtons } from './components/ListControlButtons';
import { ListBox } from './components/ListBox';

//Css
import './app.css';

import { useStudentStore } from './store/StudentStore';

export function App() {
  const students = useStudentStore(state => state);
  const [student, setStudent] = useState({});
  const clearStudent = () => {
    setStudent({ name: '' }); // Resets student state
  };

  return (
    <>
      <main class='container'>
        <h1>Preact Student Controller App</h1>
        <FormBox
          student={student}
          setStudent={setStudent}
        ></FormBox>
        <ListControlButtons
          objectToPersist={student}
          list={students.students}
          setList={students.setStudents}
          clearStudent={clearStudent}
        ></ListControlButtons>
        <ListBox
          list={students.students}
          setList={students.setStudents}
        ></ListBox>
      </main>
    </>
  );
}
