import "./App.css";

import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";

import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </div>
  );
}

export default App;
