"use client";

import { useEffect, useReducer } from 'react';

export interface Task {
  id: string;
  title: string;
  isEditing: boolean;
}

interface ToDoState {
  tasks: Task[];
}

type Action =
  | { type: 'ADD_TASK'; title: string }
  | { type: 'DELETE_TASK'; id: string }
  | { type: 'SET_TASKS'; tasks: Task[] }
  | { type: 'START_EDIT_TASK'; id: string }
  | { type: 'FINISH_EDIT_TASK'; id: string; title: string };

const initialState: ToDoState = { tasks: [] };

const reducer = (state: ToDoState, action: Action): ToDoState => {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [...state.tasks, { id: crypto.randomUUID(), title: action.title, isEditing: false }],
      };
    case 'START_EDIT_TASK':
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.id ? { ...task, isEditing: true } : task
        ),
      };
    case 'FINISH_EDIT_TASK':
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.id ? { ...task, title: action.title, isEditing: false } : task
        ),
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
      { id: crypto.randomUUID(), title: 'Sample Task 1', isEditing: false },
      { id: crypto.randomUUID(), title: 'Sample Task 2', isEditing: false },
    ];
    dispatch({ type: 'SET_TASKS', tasks: initialTasks });
  }, []);

  const addTask = (title: string) => {
    dispatch({ type: 'ADD_TASK', title });
  };

  const startEditTask = (id: string) => {
    dispatch({ type: 'START_EDIT_TASK', id });
  };

  const finishEditTask = (id: string, title: string) => {
    dispatch({ type: 'FINISH_EDIT_TASK', id, title });
  };

  const deleteTask = (id: string) => {
    dispatch({ type: 'DELETE_TASK', id });
  };

  return { state, addTask, startEditTask, finishEditTask, deleteTask };
};

export default useToDoState;