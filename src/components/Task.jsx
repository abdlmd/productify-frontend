import React from "react";
import { ImRadioUnchecked } from "react-icons/im";
import { FaRegCheckCircle } from "react-icons/fa";
function Task({ name, completed, id }) {
  function handleChange(id) {
    fetch(`http://localhost:8080/api/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  return (
    <div className="text-xl  inline-flex gap-3 pb-3 pt-2 px-3 bg-indigo-500 rounded-4xl w-auto">
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
