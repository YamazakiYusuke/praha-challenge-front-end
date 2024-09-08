"use client";

import { useReducer, useEffect } from 'react';

interface Task {
  id: string;
  title: string;
}

interface ToDoState {
  tasks: Task[];
}

type Action =
  | { type: 'ADD_TASK'; title: string }
  | { type: 'DELETE_TASK'; id: string }
  | { type: 'SET_TASKS'; tasks: Task[] };

const initialState: ToDoState = { tasks: [] };

const reducer = (state: ToDoState, action: Action): ToDoState => {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [...state.tasks, { id: crypto.randomUUID(), title: action.title }],
      };
    case 'DELETE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.id),
      };
    case 'SET_TASKS':
      return {
        ...state,
        tasks: action.tasks,
      };
    default:
      return state;
  }
};

const useToDoState = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const initialTasks: Task[] = [
      { id: crypto.randomUUID(), title: 'Sample Task 1' },
      { id: crypto.randomUUID(), title: 'Sample Task 2' },
    ];
    dispatch({ type: 'SET_TASKS', tasks: initialTasks });
  }, []);

  const addTask = (title: string) => {
    dispatch({ type: 'ADD_TASK', title });
  };

  const deleteTask = (id: string) => {
    dispatch({ type: 'DELETE_TASK', id });
  };

  return { state, addTask, deleteTask };
};

export default useToDoState;