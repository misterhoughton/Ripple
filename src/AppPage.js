import React from "react";

function AppPage(props) {
  return (
    <div
      id={props.id}
      className={`page-wrapper ${
        props.activePage === props.id ? "active" : ""
      }`}
    >
      {props.children}
    </div>
  );
}

export default AppPage;
