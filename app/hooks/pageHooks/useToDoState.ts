"use client";

import { useEffect, useReducer } from 'react';

export interface Task {
  id: string;
  title: string;
  isEditing: boolean;
  isDone: boolean;
}

interface ToDoState {
  tasks: Task[];
  isSortAsc: Boolean;
}

type Action =
  | { type: 'ADD_TASK'; title: string }
  | { type: 'DELETE_TASK'; id: string }
  | { type: 'SET_TASKS'; tasks: Task[] }
  | { type: 'START_EDIT_TASK'; id: string }
  | { type: 'FINISH_EDIT_TASK'; id: string; title: string }
  | { type: 'TOGGLE_TASK_DONE'; id: string }
  | { type: 'SWITCH_SORT_TASK' }
  | { type: 'SORT_TASK' };

const initialState: ToDoState = { tasks: [], isSortAsc: true };

const reducer = (state: ToDoState, action: Action): ToDoState => {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [...state.tasks, { id: crypto.randomUUID(), title: action.title, isEditing: false, isDone: false }],
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
    case 'TOGGLE_TASK_DONE':
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.id ? { ...task, isDone: !task.isDone } : task
        ),
      };
    case 'SWITCH_SORT_TASK':
      return {
        ...state,
        isSortAsc: !state.isSortAsc
      };
    case 'SORT_TASK':
      const sortTask = (tasks: Task[]): Task[] => {
        return tasks.slice().sort((a, b) => {
          if (state.isSortAsc) {
            return a.title.localeCompare(b.title);
          } else {
            return b.title.localeCompare(a.title);
          }
        });
      };
      return {
        ...state,
        tasks: sortTask(state.tasks),
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
      { id: crypto.randomUUID(), title: 'Sample Task 1', isEditing: false, isDone: false },
      { id: crypto.randomUUID(), title: 'Sample Task 2', isEditing: false, isDone: false },
    ];
    dispatch({ type: 'SET_TASKS', tasks: initialTasks });
    dispatch({ type: 'SORT_TASK' });
  }, []);

  const addTask = (title: string) => {
    dispatch({ type: 'ADD_TASK', title });
    dispatch({ type: 'SORT_TASK' });
  };

  const startEditTask = (id: string) => {
    dispatch({ type: 'START_EDIT_TASK', id });
  };

  const finishEditTask = (id: string, title: string) => {
    dispatch({ type: 'FINISH_EDIT_TASK', id, title });
    dispatch({ type: 'SORT_TASK' });
  };

  const deleteTask = (id: string) => {
    dispatch({ type: 'DELETE_TASK', id });
  };

  const toggleTaskDone = (id: string) => {
    dispatch({ type: 'TOGGLE_TASK_DONE', id });
  };


  const switchSortTask = () => {
    dispatch({ type: 'SWITCH_SORT_TASK' });
    dispatch({ type: 'SORT_TASK' });
  };

  return { state, addTask, startEditTask, finishEditTask, deleteTask, toggleTaskDone, switchSortTask };
};

export default useToDoState;