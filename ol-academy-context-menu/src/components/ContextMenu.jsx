import React from "react";

const ContextMenu = ({
  data: { x, y, text, edit, deletee, update, create },
}) => {
  return (
    <>
      <div
        className="contextMenu"
        style={{ position: "absolute", left: x, top: y }}
      >
        <ul>
          <li key={text}>{text}</li>
          <li key={"edit"} onClick={edit}>
            Edit
          </li>
          <li key={"delete"} onClick={deletee}>
            Delete
          </li>
          <li key={"update"} onClick={update}>
            Update
          </li>
          <li key={"create"} onClick={create}>
            Create here {text} File
          </li>
        </ul>
      </div>
    </>
  );
};

export default ContextMenu;
