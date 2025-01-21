import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home/Home";
import About from "./views/About/About";

import "./App.css";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/:id" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
