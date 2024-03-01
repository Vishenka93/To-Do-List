import { useState } from "react";

function CreateInput({ createNewItem }) {
    const [name, setName] = useState("");

    return (
        <div className="block-input">
            <input
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
            ></input>
            {name && (
                <button
                    className="button"
                    onClick={() => {
                        setName("");
                        createNewItem(name);
                    }}
                >
                    Add to list
                </button>
            )}
        </div>
    );
}

export default CreateInput;
