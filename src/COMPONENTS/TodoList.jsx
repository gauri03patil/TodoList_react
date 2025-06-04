import React, { useState } from "react";
import ToDoItem from "./TodoItems";

const ToDoList = ({ tasks, addTask, deleteTask, toggleComplete, editTask }) => {
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim()) {
      addTask(input);
      setInput("");
    }
  };

  return (
    <div>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter task"
          className="flex-1 p-2 border rounded"
        />
        <button
          onClick={handleAdd}
          className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
        >
          Add
        </button>
      </div>
      <ul>
        {tasks.map((task) => (
          <ToDoItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleComplete={toggleComplete}
            editTask={editTask}
          />
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;