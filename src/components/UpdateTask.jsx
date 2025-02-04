import React, { useState } from "react";

const UpdateTask = ({ task, updateTask, cancelEdit }) => {
  const [updatedText, setUpdatedText] = useState(task.text);

  const handleUpdateInputChange = (event) => {
    setUpdatedText(event.target.value);
  };

  const handleUpdateTask = () => {
    updateTask(task.id, updatedText);
  };

  return (
    <div className="m-12">
      <input
        type="text"
        value={updatedText}
        onChange={handleUpdateInputChange}
        className="px-8 py-4 text-base rounded-xl w-2/5 mb-8 mr-2 bg-blue-50"
      />
      <button
        onClick={handleUpdateTask}
        className="px-8 py-4 bg-green-600 text-white border-none cursor-pointer text-base mr-2.5 rounded-xl"
      >
        Update Task
      </button>
      <button
        onClick={cancelEdit}
        className="px-8 py-4 bg-red-600 text-white border-none cursor-pointer text-base mx-8 rounded-xl"
      >
        Cancel
      </button>
    </div>
  );
};

export default UpdateTask;
