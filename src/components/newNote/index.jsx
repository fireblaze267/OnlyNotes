import React, { useState } from "react";
import { PlusCircleFill } from "react-bootstrap-icons";
import "./styles.scss";
import { v4 as uuidv4 } from "uuid";

function NewNote({ theme, setData }) {
  const [note, setNote] = useState({
    title: "",
    date: "",
    id: null,
    check: false,
  });

  function handleNewNote(e) {
    if (!note.title) {
      window.alert("You cannot leave the form empty.");
      return;
    }
    let final = e;

    final.id = uuidv4();

    final.date = new Date().toLocaleDateString("pt-br");

    setData((state) => [...state, final]);
    setNote({ ...note, title: "" });
  }

  return (
    <div className={`NewNote-main-${theme}`}>
      <input
        value={note.title}
        onKeyDown={(key) => key.key === "Enter" && handleNewNote(note)}
        onChange={(e) => setNote({ ...note, title: e.target.value })}
        style={{
          width:
            note.title.length <= 30 ? "20em" : `${note.title.length * 0.62}em`,
          borderColor: note.title.length === 115 ? "red" : "#00b58e",
        }}
        placeholder="Nota nova..."
        maxLength={115}
      />
      {note.title.length > 0 && (
        <button
          onClick={() => handleNewNote(note)}
          style={{
            animation: note.length === 115 ? "sendButtonMax 0.3s" : null,
          }}
        >
          <PlusCircleFill /> Adicionar Nota
        </button>
      )}
    </div>
  );
}

export default NewNote;
