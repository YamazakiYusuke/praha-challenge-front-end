"use client";

import NavigationButton from '@/app/components/UI/NavigationButton';
import useToDoState from '@/app/hooks/pageHooks/useToDoState';
import ToDoListItem from '@/app/pages/ToDo/components/ToDoListItem';
import Head from 'next/head';
import { useRef } from 'react';

export default function ToDo() {
  const { state, addTask, startEditTask, finishEditTask, deleteTask, toggleTaskDone, switchSortTask } = useToDoState();
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <>
      <Head>
        <title>ToDo List</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      </Head>
      <div className="bg-gray-100 min-h-screen p-6">
        <h1 className="text-4xl font-bold text-center">ToDo List</h1>
        <div className="p-4">
          <div className="flex space-x-2">
            <input
              type="text"
              id="new-task-input"
              className="border p-2 flex-grow"
              placeholder="Enter new task"
              ref={inputRef}
            />
            <NavigationButton
              title="Add Task"
              onClick={() => {
                if (inputRef.current && inputRef.current.value.trim() !== '') {
                  addTask(inputRef.current.value);
                  inputRef.current.value = '';
                }
              }}
            />
          </div>
          <div className="flex justify-end mt-2">
            <span onClick={switchSortTask} className="cursor-pointer">
              {state.isSortAsc ? '↓: ASC' : '↑: DESC'}
            </span>
          </div>
          <div className="mt-4">
            {state.tasks.length > 0 ? (
              <ul>
                {state.tasks.map((task) => (
                  <ToDoListItem
                    key={task.id}
                    task={task}
                    finishEditTask={finishEditTask}
                    startEditTask={startEditTask}
                    deleteTask={deleteTask}
                    toggleTaskDone={toggleTaskDone}
                  />
                ))}
              </ul>
            ) : (
              <p>No tasks available. Please add a task.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}