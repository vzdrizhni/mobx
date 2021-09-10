import './App.css';
import Component from './components/Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Component initialCount={5} />
      </header>
    </div>
  );
}

export default App;
