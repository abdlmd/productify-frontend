import React, { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import Task from "../components/Task.jsx";
function TaskLayout() {
  const [data, setData] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [text, setText] = useState("");
  async function fetchTasks() {
    const res = await fetch("http://localhost:8080/api/tasks");
    const data = await res.json();
    setData(data);
  }
  function handleClick() {
    setShowForm(true);
  }
  function handleSubmit() {
    event.preventDefault();
    if (!text) return;
    const newTask = { name: text, completed: false };
    fetch("http://localhost:8080/api/tasks", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(newTask),
    })
      .then(() => setShowForm(false))
      .then(() => fetchTasks())
      .then(() => setText(""));
  }

  useEffect(() => {
    fetchTasks();
  }, []);
  return (
    <div className="bg-gray-900 h-screen text-white">
      <div className="pl-40 pt-20">
        <h2 className="font-bold text-3xl">Welcome to To-Do List</h2>

        <div className="font-mono">
          <TypeAnimation
            sequence={[
              "Stay Focused",
              1000,
              "Stay organized",
              1000,
              "Stay On Track",
              1000,
            ]}
            wrapper="span"
            speed={20}
            repeat={Infinity}
          />
        </div>
        <ul className="mt-2">
          {data.map((d) => (
            <li className="mb-4" key={d.id}>
              <Task
                name={d.name}
                completed={d.completed}
                id={d.id}
                fetchTasks={() => fetchTasks()}
              />
            </li>
          ))}
        </ul>
        {!showForm ? (
          <button
            className="text-2xl pb-1.5 cursor-pointer bg-indigo-500 rounded-full w-10 h-10"
            onClick={() => handleClick()}
          >
            +
          </button>
        ) : (
          <form className="flex flex-col gap-5">
            <label className="ml-2 uppercase font-semibold text-xl">
              Enter name of the new task
            </label>
            <input
              className="bg-white rounded-2xl pl-2 text-black h-8 w-100"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button
              className="cursor-pointer bg-indigo-500 rounded-2xl w-20 p-2"
              onClick={() => handleSubmit()}
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default TaskLayout;
