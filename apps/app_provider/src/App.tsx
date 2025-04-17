import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React (Federado)</h1>
      <div className="card">
        <p>Arquitetura Microfrontend</p>
      </div>
      <p className="read-the-docs">Desenvolvido por @Werliton Silva</p>
    </>
  );
}

export default App;
