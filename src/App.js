import { BrowserRouter, Route, Routes } from "react-router-dom";
import VendingMachine from './VendingMachine'

import Chips from "./Chips";
import Soda from "./Soda";
import Candy from "./Candy";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/chips" element={<Chips />} />
          <Route path="/soda" element={<Soda />} />
          <Route path="/candy" element={<Candy />} />
          <Route path="/" element={<VendingMachine />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
