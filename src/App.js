import "./App.css";
import { Counter } from "./components/Counter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter initialCount={5} />
      </header>
    </div>
  );
}

export default App;
