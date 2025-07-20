import React from "react";

const NoteCard = ({ note }) => {
  //   console.log("I am from note, ", note);
  return (
    <>
      <div className="p-8 mt-10 min-w-[200px] border-2 border-red-400">
        <div className="mx-auto p-1 rounded-md shadow-lg bg-gray-50 w-full">
          <h1 className="text-2xl font-bold text-indigo-500 mb-4">
            Are you sure
          </h1>
          <p className="text-gray-700 text-left mb-4">Tailwind is king.</p>

          <div className="text-right">
            <a
              href="#"
              className="inline-block bg-indigo-500 py-2 px-4 text-white rounded-md font-semibold uppercase text-sm "
            >
              Ok
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default NoteCard;
