import { create } from 'zustand';
import { Student } from '../types/types';
import { persist } from 'zustand/middleware';

interface State {
  students: Student[];
  fetchStudents: () => Promise<void>;
}

export const useStudentStore = create<State>()(
  persist(
    (set, get) => {
      return {
        students: [],
        setStudents: students => set({ students }),
        addStudent: student => set({ students: [...get().students, student] }),
        fetchStudents: async () => {
          //Todo fetch from local storage
          console.log('fetching students');
        },
      };
    },
    {
      name: 'studentStore',
    }
  )
);
