import { lazy, Suspense } from "react";
const Button = lazy(() => import("app_remote/button"));

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import mfLogo from "./assets/mf.png";
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
        <a href="https://react.dev" target="_blank">
          <img src={mfLogo} className="logo" alt="Module Federation logo" />
        </a>
      </div>
      <h1>Vite + React + Module Federation</h1>
      <div className="card">
        <p>(Consumindo app federado)</p>
        <Suspense fallback={<div>Carregando...</div>}>
          <Button text="Arrocha" />
        </Suspense>
      </div>
      <p className="read-the-docs">
        Feito com 💻 por <a href="https://github.com/werliton">@werliton</a>
      </p>
    </>
  );
}

export default App;
