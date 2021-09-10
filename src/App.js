import "./App.css";
import { Counter } from "./components/Counter";
import CounterFunction from "./components/CounterFunction";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter initialCount={5} />
        <CounterFunction initialCount={10} />
      </header>
    </div>
  );
}

export default App;
