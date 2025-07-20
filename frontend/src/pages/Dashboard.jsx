import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./../components/Navbar";
import NoteModel from "./../components/NoteModel";
import axios from "axios";
import NoteCard from "./../components/NoteCard";

const Dashboard = () => {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [notes, setNotes] = useState([]);
  console.log(notes);

  const fetchNotes = async () => {
    try {
      const { data } = await axios.get("http://localhost:8000/api/note");
      setNotes(data.notes);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  let closeModel = () => setIsModelOpen(false);

  const addNote = async (title, description) => {
    try {
      let response = await axios.post(
        "http://localhost:8000/api/note/add",
        {
          title,
          description,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      console.log(response);

      if (response.data.status) {
        closeModel();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />

      {/* displaying notes */}

      <section className="flex justify-center flex-wrap ">
        {notes.map((val, ind) => {
          return <NoteCard note={val} key={ind} />;
        })}
      </section>

      <button
        onClick={() => setIsModelOpen(true)}
        className="fixed right-4 bottom-4 text-4xl bg-teal-950 text-white font-bold p-2 rounded-full"
      >
        +
      </button>

      {isModelOpen && <NoteModel closeModel={closeModel} addNote={addNote} />}
    </>
  );
};

export default Dashboard;
