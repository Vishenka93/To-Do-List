import ListItemToDo from "./ListItemToDo";

function List({
    handleCheckToDo,
    handleDeleteToDo,
    filteredToDoItems,
    currentTab,
    handleRestore,
}) {
    return (
        <div className="items-list">
            {filteredToDoItems.map(({ id, name, check, isDeleted }) => (
                <ListItemToDo
                    currentTab={currentTab}
                    handleCheckToDo={handleCheckToDo}
                    handleDeleteToDo={handleDeleteToDo}
                    handleRestore={handleRestore}
                    key={id}
                    id={id}
                    name={name}
                    check={check}
                    isDeleted={isDeleted}
                />
            ))}
        </div>
    );
}

export default List;
