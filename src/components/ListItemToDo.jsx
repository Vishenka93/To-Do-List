function ListItemToDo({
    id,
    check,
    isDeleted,
    name,
    handleCheckToDo,
    handleDeleteToDo,
    handleRestore,
}) {
    console.log(isDeleted);
    return (
        <div
            className="word"
            style={{
                background: isDeleted ? "pink" : "",
            }}
        >
            {!isDeleted && (
                <input
                    checked={check}
                    type="checkbox"
                    onChange={() => handleCheckToDo(id)}
                />
            )}

            <p>{name}</p>
            <button
                className="tab-button"
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
