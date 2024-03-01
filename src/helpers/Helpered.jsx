export function filteredForTab(todoItems, currentTab) {
    let filtered = todoItems.filter(({ isDeleted }) => !isDeleted);

    if (currentTab === "To Do") {
        filtered = todoItems.filter(
            ({ check, isDeleted }) => !check && !isDeleted
        );
    } else if (currentTab === "Done") {
        filtered = todoItems.filter(
            ({ check, isDeleted }) => check && !isDeleted
        );
    } else if (currentTab === "Deleted") {
        filtered = todoItems.filter(({ isDeleted }) => isDeleted);
    }
    return filtered;
}
