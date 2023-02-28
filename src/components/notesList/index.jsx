import React, { useState } from "react";
import { Check2All, Grid, List, Trash2 } from "react-bootstrap-icons";
import ViewList from "../viewList";
import "./styles.scss";

function NoteList({ setData, data, theme }) {
  const [orient, setOrient] = useState("grid");

  function verifyAll() {
    let list = [...data];

    list.map((x) => {
      x.check = true;
    });

    setData(list);
  }

  return (
    <div className="noteList-main">
      <div className={`noteList-content-${theme}`}>
        <div className="noteList-actions">
          <div className="noteList-func">
            <button onClick={() => verifyAll()}>
              <Check2All /> <label>Verificar Todos</label>
            </button>

            <button onClick={() => setData([])}>
              <Trash2 /> <label> Apagar Todos </label>
            </button>
          </div>

          <div className="noteList-grid">
            <button
              className={orient === "grid" && "active"}
              onClick={() => setOrient("grid")}
            >
              <Grid />
            </button>

            <button
              className={orient === "column" && "active"}
              onClick={() => setOrient("column")}
            >
              <List />
            </button>
          </div>
        </div>
        <ViewList orient={orient} setData={setData} theme={theme} data={data} />
      </div>
    </div>
  );
}

export default NoteList;
