import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./views/Home";
import Random from "./views/Random";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Random />} />
          <Route path="/quotes" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
