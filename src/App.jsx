import React from "react";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import Applications from "./Pages/Applications/Applications";
import Finace from "./Pages/Finance/Finance";
import Groups from "./Pages/Groups/Groups";
import Report from "./Pages/Report/Report";
import Teachers from "./Pages/Teachers/Teachers";
import Students from "./Pages/Students/Students";

export default function App() {
  return (
    <div className="app">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/finace" element={<Finace />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/report" element={<Report />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/students" element={<Students />} />
      </Routes>

    </div>
  );
}
