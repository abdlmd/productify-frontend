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
    <div className="grid grid-cols-5 bg-gray-500">
      <div className="col-span-1">
        <h1 className=" text-white font-mono font-bold mb-8 text-center">
          All Notes
        </h1>

        {data.map((d) => (
          <NotePreview noteDescription={d.noteDescription} />
        ))}
      </div>
      <div className="w-[1px] bg-cyan-300 h-screen"></div>
    </div>
  );
}

export default Notes;
