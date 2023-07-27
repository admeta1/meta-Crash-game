import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Manual from "./components/manual/manual";
import Advanced from "./components/advance/Advanced";
import BetTable from "./components/BetTable/BetTable"
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/manual" element={<Manual />} />
          <Route path="/advanced" element={<Advanced />} />
          <Route path="/bettable" element={<BetTable />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
