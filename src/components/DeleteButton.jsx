import React from "react";

const DeleteButton = ({ taskId, deleteTask }) => {
  return (
    <button
      onClick={() => deleteTask(taskId)}
      className="px-8 py-4 bg-red-600 text-white border-none cursor-pointer text-base mx-8 rounded-xl"
    >
      Delete
    </button>
  );
};

export default DeleteButton;
