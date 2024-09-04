"use client";

import { randomUUID } from 'crypto';
import { useState, useEffect } from 'react';

interface Task {
  id: string;
  title: string;
}

interface ToDoState {
  tasks: Task[];
}

const useToDoState = () => {
  const [state, setState] = useState<ToDoState>({ tasks: [] });

  useEffect(() => {
    // This is where you might fetch initial data from an API or local storage
    const initialTasks: Task[] = [
      { id: crypto.randomUUID(), title: 'Sample Task 1' },
      { id: crypto.randomUUID(), title: 'Sample Task 2' },
    ];
    setState({ tasks: initialTasks });
  }, []);

  const addTask = (title: string) => {
    setState(prevState => ({
      tasks: [...prevState.tasks, { id: crypto.randomUUID(), title: title }]
    }));
  };

  const deleteTask = (id: string) => {
    setState(prevState => ({
      tasks: prevState.tasks.filter(task => task.id !== id)
    }));
  };

  return { state, addTask, deleteTask };
};

export default useToDoState;
