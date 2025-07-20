import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NoteModel = ({ closeModel, addNote }) => {
  let navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    console.log("New Note details received");

    addNote(title, description);

    // setTitle("");
    // setDescription("");  
  };

  return (
    <>
      <section className="fixed top-0 left-0 h-screen w-full flex justify-center items-center bg-black bg-opacity-20 z-50">
        <article className="bg-white text-gray-900 w-full max-w-xl rounded-2xl shadow-lg p-8">
          <h1 className="text-2xl font-bold mb-4 text-center">Add New Note</h1>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Enter Note Title"
              value={title}
              onChange={e => setTitle(e.target.value)}
              className="border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <textarea
              placeholder="Enter Note Description"
              rows={5}
              value={description}
              onChange={e => setDescription(e.target.value)}
              className="border border-gray-300 p-4 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>

            <div className="flex justify-end gap-4 mt-4">
              <button
                type="button"
                onClick={closeModel}
                className="px-4 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition"
              >
                Add Note
              </button>
            </div>
          </form>
        </article>
      </section>
    </>
  );
};

export default NoteModel;
