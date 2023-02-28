import React, { useState } from "react";
import { Trash } from "react-bootstrap-icons";
import Check from "../check";
import "./styles.scss";

function Note({ deleteNote, change, data, theme }) {
  const [deleteAnimate, setDelete] = useState(false);

  return (
    <div className={deleteAnimate ? "deleteN" : `note-main-${theme} `}>
      <div className="note-title">
        <p>{data.title}</p>
      </div>
      <div className="note-bottom">
        <Check handle={(e) => change(data.id, e)} value={data.check} />
        <button
          onClick={() => {
            setDelete(true),
              setTimeout(() => {
                deleteNote(data.id);
              }, 200);
          }}
        >
          <Trash />
        </button>
      </div>
    </div>
  );
}

export default Note;
