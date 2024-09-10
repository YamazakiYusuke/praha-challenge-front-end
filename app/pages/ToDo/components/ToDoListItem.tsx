import NavigationButton from "@/app/components/UI/NavigationButton";
import { Task } from "@/app/hooks/pageHooks/useToDoState";
import { useRef } from "react";

export default function ToDoListItem({
  task,
  finishEditTask,
  startEditTask,
  deleteTask,
  toggleTaskDone
}: {
  task: Task,
  finishEditTask: (id: string, title: string) => void,
  startEditTask: (id: string) => void,
  deleteTask: (id: string) => void,
  toggleTaskDone: (id: string) => void
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div className="flex justify-between items-center p-2 border-b border-gray-300">
      <div className="flex items-center">
        <input 
          type="checkbox" 
          className="h-4 w-4 mr-2"
          checked={task.isDone} 
          onChange={() => toggleTaskDone(task.id)} 
        />
        {task.isEditing ? (
          <input
            type="text"
            className="border p-2 mr-2"
            placeholder="Enter new task"
            ref={inputRef}
            defaultValue={task.title}
          />
        ) : (
          <span>{task.title}</span>
        )}
      </div>
      <div className="flex space-x-2">
        <NavigationButton
          title={task.isEditing ? "Save" : "Edit"}
          onClick={() => {
            if (task.isEditing) {
              if (inputRef.current && inputRef.current.value.trim() !== '') {
                finishEditTask(task.id, inputRef.current.value);
                inputRef.current.value = '';
              }
            } else {
              startEditTask(task.id);
            }
          }}
        />
        <NavigationButton
          title="Delete"
          onClick={() => {
            deleteTask(task.id)
          }}
        />
      </div>
    </div>
  )
}