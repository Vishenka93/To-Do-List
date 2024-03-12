import { useState } from "react";
import { checkboxClassNames } from "../consts/checkboxClassNames";

function ListItemToDo({
    id,
    check,
    isDeleted,
    name,
    handleCheckToDo,
    handleDeleteToDo,
    handleRestore,
}) {
    const [checkboxClassname, setCheckboxClassname] = useState(
        check ? checkboxClassNames[0] : checkboxClassNames[1]
    );
    return (
        <div
            className="word"
            style={{
                background: isDeleted ? "pink" : "",
            }}
        >
            {!isDeleted && (
                <input
                    className={`checkbox ${checkboxClassname}`}
                    checked={check}
                    type="checkbox"
                    onChange={() => {
                        setCheckboxClassname((prev) =>
                            prev === checkboxClassNames[0]
                                ? checkboxClassNames[1]
                                : checkboxClassNames[0]
                        );
                        setTimeout(() => {
                            handleCheckToDo(id);
                        }, 300);
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
