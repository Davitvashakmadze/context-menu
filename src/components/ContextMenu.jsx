import React from "react";

const ContextMenu = ({ position: { x, y }, actions }) => {
  return (
    <>
      <div
        className="contextMenu"
        style={{ position: "absolute", left: x, top: y }}
      >
        <ul>
          {actions.map(({ action, label }) => (
            <li key={label} onClick={action}>
              {label}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ContextMenu;
