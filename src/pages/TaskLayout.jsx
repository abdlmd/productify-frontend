import React, { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import Task from "../components/Task.jsx";
function TaskLayout() {
  const [data, setData] = useState([]);
  async function fetchTasks() {
    const res = await fetch("http://localhost:8080/api/tasks");
    const data = await res.json();
    setData(data);
    console.log(data);
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
                fetchTasks={fetchTasks()}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TaskLayout;
