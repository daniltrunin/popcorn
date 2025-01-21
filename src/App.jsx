import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Search from "./components/Search/Search";
import Details from "./components/Details/Details";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Search</Link> | <Link to="/details">Details</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
