import { tabsToDO } from "../consts/TabsToDo";
import { getTabBtnStyle } from "../consts/TabBtnStyle";

function Tabs({ currentTab, setCurrentTab }) {
    return (
        <div className="tab">
            {tabsToDO.map((el) => (
                <button
                    className={currentTab === el ? "activ-tab" : "tab-button"}
                    onClick={() => setCurrentTab(el)}
                    // style={getTabBtnStyle(currentTab, el)}
                    key={el}
                >
                    {el}
                </button>
            ))}
        </div>
    );
}

export default Tabs;
