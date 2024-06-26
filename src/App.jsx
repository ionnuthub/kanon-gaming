import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import GameList from "./components/gamelist/GameList";
import NavBar from "./components/navbar/NavBar";
import SlotMachine from "./components/slotmachine/SlotMachine";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="container-fluid">
          <NavBar />
          <Routes>
            <Route path="/" element={<GameList />}></Route>
            <Route path="/slot-machine" element={<SlotMachine />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

/////////////////////////////////////////////////
