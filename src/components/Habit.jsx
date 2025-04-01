import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegCheckCircle } from "react-icons/fa";
import { ImRadioUnchecked } from "react-icons/im";

function Habit({ id, name, streak, completed, fetchHabit }) {
  function handleChange(id) {
    fetch(`http://localhost:8080/api/habit/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => fetchHabit());
  }

  function deleteTask(id) {
    fetch(`http://localhost:8080/api/habit/${id}`, {
      method: "DELETE",
    }).then(() => fetchHabit());
  }
  return (
    <div className="text-xl flex flex-col gap-0.5  px-6 w-fit bg-orange-500 rounded-4xl ">
      <div className="flex gap-3">
        <button onClick={() => deleteTask(id)} className="cursor-pointer">
          <RiDeleteBin6Line className="fill-white mt-1.5" />
        </button>
        <p className="mt-2">{name}</p>
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
      <p className="text-sm ml-4 ">Streak:{streak}</p>
    </div>
  );
}

export default Habit;
