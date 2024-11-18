import Home from "./pages/Home";
import "./App.css";
import SearchAppBar from "./components/SearchAppBar";
import { HashRouter, Routes, Route } from "react-router-dom";
import Tour from "./pages/Tour";
import BasicModal from "./components/Modal";
import { useState } from "react";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <HashRouter
        basename="/"
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <SearchAppBar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/tour" element={<Tour setOpen={setOpen} />} />
        </Routes>
      </HashRouter>
      <BasicModal open={open} setOpen={setOpen} />
    </>
  );
}

export default App;
