import React from "react";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="bg-gradient-to-r from-emerald-400 to-cyan-400 flex justify-center items-center h-screen flex-col">
      <h1 className="font-bold text-3xl font-mono text-white">
        Welcome to Productify
      </h1>
      <div className="text-2xl font-mono text-cyan-200">
        <TypeAnimation
          sequence={[
            "We manage Tasks",
            1000,
            "We manage Notes",
            1000,
            "We manage Habits",
            1000,
          ]}
          wrapper="span"
          speed={20}
          repeat={Infinity}
        />
      </div>
      <div className="ml-72">
        <Link to="/notes">
          <button className="bg-slate-300 text-emerald-600 border-0 p-3 rounded-4xl mt-8  font-bold font-mono hover:cursor-pointer">
            Enter Productify
          </button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
