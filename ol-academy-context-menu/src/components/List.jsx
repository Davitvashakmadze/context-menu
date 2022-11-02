import React, { useState } from "react";
import ContextMenu from "./ContextMenu";

function List(props) {
  const [showMenu, setShowMenu] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0, text: "" });
  const menu = props.data;

  const context = (e, text) => {
    e.preventDefault();
    setShowMenu(true);
    setPosition({ x: e.clientX, y: e.clientY, text: text });
  };

  const editMenu = () => {
    setShowMenu(false);
  };

  const deleteMenu = () => {
    setShowMenu(false);
  };

  const hideContext = () => {
    setShowMenu(false);
  };

  return (
    <>
      <div className="list-items" onClick={hideContext} style={{}}>
        <h2 className="title">Context Menu</h2>
        <ul>
          {menu.map((item) => {
            return (
              <li
                key={item.id}
                onContextMenu={(event) => context(event, item.name)}
              >
                {item.name}
              </li>
            );
          })}
        </ul>
        {showMenu && (
          <ContextMenu
            data={{
              delete: deleteMenu,
              edit: editMenu,
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
