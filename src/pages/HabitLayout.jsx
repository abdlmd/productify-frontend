import React, { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import Task from "../components/Task.jsx";
import Habit from "../components/Habit.jsx";

function HabitLayout() {
  const [data, setData] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [text, setText] = useState("");

  async function fetchHabits() {
    const res = await fetch("http://localhost:8080/api/habit");
    const data = await res.json();
    setData(data);
    console.log(data);
  }

  useEffect(() => {
    fetchHabits();
  }, []);
  function handleClick() {
    setShowForm(true);
  }
  function handleSubmit() {
    event.preventDefault();
    if (!text) return;
    const newHabit = { name: text, completedToday: false, streakDays: 0 };
    fetch("http://localhost:8080/api/habit", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(newHabit),
    })
      .then(() => setShowForm(false))
      .then(() => fetchHabits())
      .then(() => setText(""));
  }
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
              <Habit
                name={d.name}
                streak={d.streakDays}
                completed={d.completedToday}
                id={d.id}
                fetchHabit={() => fetchHabits()}
              />
            </li>
          ))}
        </ul>
        {!showForm ? (
          <button
            className="text-2xl pb-1.5 cursor-pointer bg-orange-500 rounded-full w-10 h-10"
            onClick={() => handleClick()}
          >
            +
          </button>
        ) : (
          <form className="flex flex-col gap-5">
            <label className="ml-2 uppercase font-semibold text-xl">
              Enter name of the new Habit
            </label>
            <input
              className="bg-white rounded-2xl pl-2 text-black h-8 w-100"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button
              className="cursor-pointer bg-orange-500 rounded-2xl w-20 p-2"
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

export default HabitLayout;
