import { useEffect, useState } from "react";
import List from "./components/List";
import CreateInput from "./components/CreateInput";
import Tabs from "./components/Tabs";
import { tabsToDO } from "./consts/TabsToDo";
import { filteredForTab } from "./helpers/Helpered";
const local = localStorage.getItem("todolist");
const localToDo = local === null ? [] : JSON.parse(local);

function App() {
    const [todoItems, setToDoItems] = useState(localToDo);
    const [currentTab, setCurrentTab] = useState(tabsToDO[0]);
    const [filteredToDoItems, setFilteredToDoItems] = useState([]);

    function createNewItem(text) {
        setToDoItems((prev) => [
            ...prev,
            {
                id: prev.length,
                name: text,
                check: false,
                isDeleted: false,
            },
        ]);
    }

    function handleCheckToDo(id) {
        setToDoItems((prev) =>
            prev.map((el) =>
                el.id !== id
                    ? el
                    : {
                          ...el,
                          check: !el.check,
                      }
            )
        );
    }

    function handleDeleteToDo(id) {
        setToDoItems((prev) =>
            prev.map((el) =>
                el.id !== id
                    ? el
                    : {
                          ...el,
                          isDeleted: true,
                      }
            )
        );
    }

    function handleRestore(id) {
        setToDoItems((prev) =>
            prev.map((el) =>
                el.id !== id
                    ? el
                    : {
                          ...el,
                          check: false,
                          isDeleted: false,
                      }
            )
        );
    }

    useEffect(() => {
        const filtered = filteredForTab(todoItems, currentTab);

        setFilteredToDoItems(filtered);
    }, [currentTab, todoItems]);

    useEffect(() => {
        localStorage.setItem("todolist", JSON.stringify(todoItems));
    }, [todoItems]);

    return (
        <div className="container">
            <CreateInput createNewItem={createNewItem}></CreateInput>
            <Tabs setCurrentTab={setCurrentTab} currentTab={currentTab} />
            <List
                handleRestore={handleRestore}
                currentTab={currentTab}
                handleCheckToDo={handleCheckToDo}
                filteredToDoItems={filteredToDoItems}
                handleDeleteToDo={handleDeleteToDo}
            ></List>
        </div>
    );
}

export default App;
