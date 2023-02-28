import React, { useEffect, useRef, useState } from "react";
import Header from "./components/header";
import NewNote from "./components/newNote";
import NoteList from "./components/notesList";
//import mock from "../src/utils/mockData.json";

function App() {
  const firstRender = useRef(true);
  const localTheme = localStorage.getItem("theme");
  const previousData = JSON.parse(localStorage.getItem("previousData"));

  const [theme, setTheme] = useState(localTheme ? localTheme : "dark");
  const [data, setData] = useState([]);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    if (previousData) {
      setData(previousData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    if (firstRender.current === false && data.length > 0)
      localStorage.setItem("previousData", JSON.stringify(data));
    if (firstRender.current === false && data.length <= 0) {
      localStorage.removeItem("previousData");
    }
  }, [data]);

  return (
    <div className={`main-${theme}`}>
      <Header
        theme={theme}
        setTheme={() => setTheme(theme === "dark" ? "light" : "dark")}
      />
      <NewNote setData={setData} theme={theme} />
      <NoteList setData={setData} theme={theme} data={data} />
    </div>
  );
}

export default App;
