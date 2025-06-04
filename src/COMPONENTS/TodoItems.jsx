import React, { useState } from "react";

const ToDoItem = ({ task, deleteTask, toggleComplete, editTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleSave = () => {
    editTask(task.id, newText);
    setIsEditing(false);
  };

  return (
    <li
      className={`flex justify-between items-center p-2 mb-2 rounded ${
        task.completed ? "bg-green-100 line-through" : "bg-gray-100"
      }`}
    >
      {isEditing ? (
        <input
          className="flex-1 mr-2 p-1 border rounded"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        />
      ) : (
        <span>{task.text}</span>
      )}

      <div className="flex gap-2 ml-2">
        {isEditing ? (
          <button
            onClick={handleSave}
            className="text-sm bg-blue-500 text-white px-2 py-1 rounded"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="text-sm bg-yellow-500 text-white px-2 py-1 rounded"
          >
            Edit
          </button>
        )}
        <button
          onClick={() => toggleComplete(task.id)}
          className="text-sm bg-green-500 text-white px-2 py-1 rounded"
        >
          {task.completed ? "Undo" : "Done"}
        </button>
        <button
          onClick={() => deleteTask(task.id)}
          className="text-sm bg-red-500 text-white px-2 py-1 rounded"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default ToDoItem;