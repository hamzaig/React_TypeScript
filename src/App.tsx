import "./App.css";
import Todos from "./components/Todos";

function App() {
  return (
    <h1>
      <Todos items={["Heelo", "world"]} />
    </h1>
  );
}

export default App;
