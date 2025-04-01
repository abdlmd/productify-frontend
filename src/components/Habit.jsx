import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegCheckCircle } from "react-icons/fa";
import { ImRadioUnchecked } from "react-icons/im";

function Habit({ name }) {
  return (
    <div className="text-xl  inline-flex gap-3 pb-3 pt-2 px-3 bg-orange-500 rounded-4xl w-auto">
      <button className="cursor-pointer">
        <RiDeleteBin6Line className="fill-white mt-1.5" />
      </button>
      <p>{name}</p>? (
      <button className="mt-1.5 cursor-pointer">
        <FaRegCheckCircle />
      </button>
      ) : (
      <button className="mt-1.5 cursor-pointer">
        <ImRadioUnchecked />
      </button>
      )
    </div>
  );
}

export default Habit;
