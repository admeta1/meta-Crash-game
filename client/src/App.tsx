import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login/Login";
import SignUp from "./components/SignUp/SignUp";
import Manual from "./components/manual/manual";
import Advanced from "./components/advance/Advanced";
import BetTable from "./components/BetTable/BetTable";
import CrashGame from "./components/graphh/Crashgraphh";
import Newgraph from "./components/graph/LineChart";
import LineChart from "./components/graph/LineChart";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/manual" element={<Manual />} />
          <Route path="/advanced" element={<Advanced />} />
          <Route path="/graphh" element={<CrashGame />} />
          <Route path="/chart" element={<LineChart />} />
          {/* <Route path="/graph" element={<Newgraph />} /> */}

          {/* <Route path="/bettable" element={<BetTable />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
