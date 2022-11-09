import React, { useState } from "react";
import ContextMenu from "./ContextMenu";

function List({ menu }) {
  const [showMenu, setShowMenu] = useState(false);
  const [position, setPosition] = useState({ x: 10, y: 30, text: "" });

  const context = (e, text) => {
    e.preventDefault();
    setShowMenu(true);
    setPosition({ x: e.clientX, y: e.clientY, text: text });
  };

  const editMenu = () => {
    console.log("Edit");
  };

  const deleteMenu = () => {
    console.log("Delete");
  };
  const update = () => {
    console.log("Update");
  };
  const create = () => {
    console.log("Create");
  };

  const hideContext = () => {
    setShowMenu(false);
  };

  return (
    <>
      <div className="list-items" onClick={hideContext}>
        <h2 className="title">Context Menu</h2>
        <ul>
          {menu.map(({ id, name }) => {
            return (
              <li key={id} onContextMenu={(event) => context(event, name)}>
                {name}
              </li>
            );
          })}
        </ul>
        {showMenu && (
          <ContextMenu
            actions={[
              { action: deleteMenu, label: "Delete" },
              { action: editMenu, label: "Edit" },
              { action: update, label: "Update" },
              { action: create, label: `Create here ${position.text}` },
            ]}
            position={position}
          />
        )}
      </div>
    </>
  );
}

export default List;
