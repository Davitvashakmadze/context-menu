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
    console.log("Edit")
  };

  const deleteMenu = () => {
    console.log("Delete")
  };
  const update = () => {
    console.log("Update")
  }
  const create = () => {
    console.log("Create")
  }


  const hideContext = () => {
    setShowMenu(false);
    
  };

  return (
    <>
      <div className="list-items" onClick={hideContext}>
        <h2 className="title">Context Menu</h2>
        <ul>
          {menu.map(({id, name}) => {
            return (
              <li
                key={id}
                onContextMenu={(event) => context(event, name)}
              >
                {name}
              </li>
            );
          })}
        </ul>
        {showMenu && (
          <ContextMenu
            data={{
              deletee: deleteMenu,
              edit: editMenu,
              update: update,
              create: create,
              x: position.x,
              y: position.y,
              text: position.text,
            }}
          />
        )}
      </div>
    </>
  );
}

export default List;
