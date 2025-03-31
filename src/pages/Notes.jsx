import React, { useEffect, useState } from "react";
import NotePreview from "../components/NotePreview.jsx";

function Notes() {
  const [data, setData] = useState([]);
  const [note, setNote] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://localhost:8080/api/note");
      const result = await res.json();
      setData(result);
    }
    fetchData();
  }, []);
  async function handleClick(id) {
    const res = await fetch(`http://localhost:8080/api/note/${id}`);
    const result = await res.json();

    setNote(result.noteDescription);
  }
  console.log(note);

  return (
    <div className="grid grid-cols-[250px_1px_1fr] bg-gray-900 h-screen">
      <div className="col-span-1">
        <h1 className=" text-white text-xl font-mono font-bold mb-4 text-center mt-2">
          All Notes
        </h1>
        <hr className="border-t-1 border-gray-700 mb-4" />

        {data.map((d) => (
          <div key={d.id} onClick={() => handleClick(d.id)}>
            <NotePreview noteDescription={d.noteDescription} key={d.id} />
          </div>
        ))}
      </div>
      <div className=" w-[1px] bg-gray-700 h-full"></div>
      <div className="text-white flex flex-col  w-full ml-6 ">
        {note !== null && (
          <textarea
            className="h-full focus:outline-none"
            type="text"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
        )}
      </div>
    </div>
  );
}

export default Notes;
