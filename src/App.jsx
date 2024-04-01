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
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/gamelist" element={<GameList />}></Route>
            <Route path="/slotmachine" element={<SlotMachine />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

/////////////////////////////////////////////////
