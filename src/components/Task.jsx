import React from "react";
import { ImRadioUnchecked } from "react-icons/im";
import { FaRegCheckCircle } from "react-icons/fa";
function Task({ name, completed }) {
  return (
    <div className="text-xl  inline-flex gap-3 pb-3 pt-2 px-3 bg-indigo-500 rounded-4xl w-auto">
      <p>{name}</p>
      {completed ? (
        <button className="mt-1.5 cursor-pointer">
          <FaRegCheckCircle />
        </button>
      ) : (
        <button className="mt-1.5 cursor-pointer">
          <ImRadioUnchecked />
        </button>
      )}
    </div>
  );
}

export default Task;
