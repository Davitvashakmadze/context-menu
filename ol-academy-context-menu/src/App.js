import "./App.css";
import List from "./components/List";
import menu from "./data";

function App() {

    return (
        <div className="App">
            <List data={menu} />
        </div>
    );
}

export default App;
