import React, { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import Task from "../components/Task.jsx";
import Habit from "../components/Habit.jsx";

function HabitLayout() {
  const [data, setData] = useState([]);

  async function fetchHabits() {
    const res = await fetch("http://localhost:8080/api/habit");
    const data = await res.json();
    setData(data);
    console.log(data);
  }

  useEffect(() => {
    fetchHabits();
  }, []);
  return (
    <div className="bg-gray-900 h-screen text-white font-mono">
      <div className="pl-40 pt-20">
        {" "}
        <h2 className="font-bold text-3xl">Welcome to Habit Tracking</h2>
        <TypeAnimation
          sequence={[
            "Stay Focused",
            1000,
            "Stay Consistent",
            1000,
            "Stay On Track",
            1000,
          ]}
          wrapper="span"
          speed={20}
          repeat={Infinity}
        />
        <ul className="mt-2">
          {data.map((d) => (
            <li className="mb-4">
              <Habit name={d.name} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default HabitLayout;
