import React from "react";
import { ImRadioUnchecked } from "react-icons/im";
import { FaRegCheckCircle } from "react-icons/fa";

import { RiDeleteBin6Line } from "react-icons/ri";
function Task({ name, completed, id, fetchTasks }) {
  function handleChange(id) {
    fetch(`http://localhost:8080/api/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => fetchTasks());
  }

  function deleteTask(id) {
    fetch(`http://localhost:8080/api/tasks/${id}`, {
      method: "DELETE",
    }).then(() => fetchTasks());
  }

  return (
    <div className="text-xl  inline-flex gap-3 pb-3 pt-2 px-3 bg-indigo-500 rounded-4xl w-auto">
      <button onClick={() => deleteTask(id)} className="cursor-pointer">
        <RiDeleteBin6Line className="fill-white mt-1.5" />
      </button>
      <p>{name}</p>
      {completed ? (
        <button className="mt-1.5 cursor-pointer">
          <FaRegCheckCircle />
        </button>
      ) : (
        <button
          className="mt-1.5 cursor-pointer"
          onClick={() => handleChange(id)}
        >
          <ImRadioUnchecked />
        </button>
      )}
    </div>
  );
}

export default Task;
