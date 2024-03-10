import { useState } from "react";

function ListItemToDo({
    id,
    check,
    isDeleted,
    name,
    handleCheckToDo,
    handleDeleteToDo,
    handleRestore,
}) {
    return (
        <div
            className="word"
            style={{
                background: isDeleted ? "pink" : "",
            }}
        >
            {!isDeleted && (
                <input
                    className={"checkbox"}
                    checked={check}
                    type="checkbox"
                    onChange={() => {
                        handleCheckToDo(id);
                    }}
                />
            )}

            <p>{name}</p>
            <button
                className="tab-button-delete "
                onClick={() => {
                    if (isDeleted) {
                        handleRestore(id);
                    } else {
                        handleDeleteToDo(id);
                    }
                }}
            >
                {isDeleted ? "restore" : "delete"}
            </button>
        </div>
    );
}

export default ListItemToDo;
