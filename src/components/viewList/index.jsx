import React from "react";
import Note from "../note";
import "./styles.scss";

function ViewList({ orient, setData, data, theme }) {
  function changeNote(id, value) {
    let list = [...data];

    let index = data.findIndex((x) => x.id === id);

    list[index].check = value;

    setData(list);
  }

  function deleteNote(id) {
    let list = [];

    data.map((x) => {
      if (x.id !== id) {
        return (list = [...list, x]);
      }
    });

    setData(list);
  }

  return (
    <div
      className={
        orient === "grid"
          ? `view-list-main-${theme}`
          : `view-list-flex-${theme}`
      }
    >
      {data.length <= 0 ? (
        <h1>Não tem nenhuma nota. ainda...</h1>
      ) : (
        data.map((e) => {
          return (
            <Note
              deleteNote={deleteNote}
              change={changeNote}
              theme={theme}
              data={e}
              key={e.id + e.check}
            />
          );
        })
      )}
    </div>
  );
}

export default ViewList;
