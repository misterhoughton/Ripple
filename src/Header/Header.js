import React from "react";
import RippleLogo from "./RippleLogo";

function Header(props) {
  return (
    <header className="app-header">
      <RippleLogo />
      <button
        className={`btn-back ${props.hideBtn ? "hidden" : ""}`}
        onClick={() => {
          props.setActivePage("page-1");
        }}
      >
        &lt;
      </button>
      <h1 className="app-title">{props.title}</h1>
    </header>
  );
}

export default Header;
