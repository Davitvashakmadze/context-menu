import React from "react";

const ContextMenu =(props) => {

    const x = props.data.x;
    const y = props.data.y;
    const text = props.data.text;


    return (
        <>
            <div
                className="contextMenu"
                style={{ position: "absolute", left: x, top: y }}
            >
                <ul>
                    <li key={text}>{text}</li>
                    <li key={"edit"} onClick={props.data.edit}>
                        Edit
                    </li>
                    <li key={"delete"} onClick={props.data.del}>
                        Delete
                    </li>
                    <li key={"update"} onClick={props.data.del}>
                        Update
                    </li>
                    <li key={"create"} onClick={props.data.del}>
                        Create here {text} File
                    </li>
                </ul>
            </div>
        </>
    );
}

export default ContextMenu;
