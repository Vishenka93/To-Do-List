export function getTabBtnStyle(currentTab, el) {
    return {
        color: currentTab === el ? "red" : "black",
        background: currentTab === el ? "black" : "none",
    };
}
