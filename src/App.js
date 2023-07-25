import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <img src="/img/header.png" alt='Org'/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Programando con React 1.0
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
         Aprende a programar
        </a>
      </header>
    </div>
  );
}

export default App;
