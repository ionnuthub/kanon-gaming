import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import GameList from "./components/gamelist/GameList";
import NavBar from "./components/navbar/NavBar";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <div>
        <NavBar />
        <GameList />
      </div>
    </>
  );
}

export default App;
