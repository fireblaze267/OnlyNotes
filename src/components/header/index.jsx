import React from "react";
import { Gear, InfoCircle, Moon, Sun, Translate } from "react-bootstrap-icons";
import "./styles.scss";

function Header({ theme, setTheme }) {
  return (
    <div className={`header-main-${theme}`}>
      <div className={`header-slogan-${theme}`}>
        <label className="Jfont">ノートのみ</label>
        <label> • Only Notes</label>
      </div>
      <div className={`header-options-${theme}`}>
        {/* <div className={`header-options-${theme}-itens`}>
          <Gear />
        </div> */}

        <div className={`header-options-${theme}-itens`} onClick={setTheme}>
          {theme === "dark" ? <Moon /> : <Sun />}
        </div>

        {/* <div className={`header-options-${theme}-itens`} onClick={null}>
          <InfoCircle />
        </div> */}

        {/* <div className={`header-options-${theme}-itens`}>
          <Translate />
        </div> */}
      </div>
    </div>
  );
}

export default Header;
