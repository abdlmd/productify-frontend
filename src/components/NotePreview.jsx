import React from "react";

function NotePreview({ noteDescription }) {
  const title = noteDescription.split(" ").slice(0, 2).join(" ");
  const desc = noteDescription.split(" ").slice(0, 8).join(" ") + "...";
  return (
    <div className="m-2 font-mono ">
      <div className="text-white space-y-1">
        <p className="font-bold text-xl">{title}</p>

        <p>{desc}</p>
      </div>

      <hr className="border-t-1 border-gray-700" />
    </div>
  );
}

export default NotePreview;
