import React, { useEffect, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoIosCreate } from "react-icons/io";
import NotePreview from "../components/NotePreview.jsx";

function Notes() {
  const [data, setData] = useState([]);
  const [note, setNote] = useState(null);
  async function fetchData() {
    const res = await fetch("http://localhost:8080/api/note");
    const result = await res.json();
    setData(result);
  }

  useEffect(() => {
    fetchData();
  }, []);

  async function handleClick(id) {
    const res = await fetch(`http://localhost:8080/api/note/${id}`);
    const result = await res.json();

    setNote(result);
  }

  function handleChange(e) {
    const updatedNote = { id: note.id, noteDescription: e };
    console.log(updatedNote);
    fetch("http://localhost:8080/api/note", {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(updatedNote),
    })
      .then((res) => res.json())
      .then((data) => {
        setNote(data);
        setData((prevData) =>
          prevData.map((d) => (d.id === data.id ? data : d)),
        );
      });
  }

  function createNewNote() {
    console.log("Clicked");
    const newNote = { noteDescription: "New note" };
    fetch("http://localhost:8080/api/note", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(newNote),
    }).then(() => fetchData());
  }
  function deleteNote(id) {
    fetch(`http://localhost:8080/api/note/${id}`, {
      method: "DELETE",
    }).then(() => fetchData());
  }

  return (
    <div className="grid grid-cols-[250px_1px_1fr] bg-gray-900 h-screen">
      <div className="col-span-1">
        <div className="flex items-center justify-between px-4">
          <h1 className=" text-white text-xl font-mono font-bold mb-4 ml-8 text-center mt-2">
            All Notes
          </h1>
          <button onClick={() => createNewNote()}>
            <IoIosCreate className="fill-white w-8 h-10 mb-2" />
          </button>
        </div>
        <hr className="border-t-1 border-gray-700 mb-4" />

        {data.map((d) => (
          <div key={d.id} onClick={() => handleClick(d.id)}>
            <RiDeleteBin6Line
              className="fill-white"
              onClick={() => deleteNote(d.id)}
            />
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
            value={note.noteDescription}
            onChange={(e) => handleChange(e.target.value)}
            key={note.id}
          />
        )}
      </div>
    </div>
  );
}

export default Notes;
