import React, { useEffect, useState } from "react";
import NotePreview from "../components/NotePreview.jsx";

function Notes() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://localhost:8080/api/note");
      const result = await res.json();
      setData(result);
    }
    fetchData();
  }, []);

  console.log(data);
  return (
    <div className="grid grid-cols-5 bg-emerald-400">
      <div className="col-span-1">
        <h1 className=" text-white text-xl font-mono font-bold mb-4 text-center mt-2">
          All Notes
        </h1>
        <hr className="border-t-1 border-cyan-300 mb-4" />

        {data.map((d) => (
          <NotePreview noteDescription={d.noteDescription} />
        ))}
      </div>
      <div className="w-[1px] bg-cyan-300 h-screen"></div>
    </div>
  );
}

export default Notes;
