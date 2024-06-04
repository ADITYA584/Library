import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import BookSearch from "./Pages/BookSearch";
import BookShelf from "./Pages/BookShelf";
import Navbar from "./components/Navbar";

function App() {
  return (
    <React.Fragment>
      <div className="flex flex-col">
        <nav>
          <Navbar />
        </nav>
        <Routes>
          <Route path="/" element={<BookSearch />} />
          <Route path="/BookShelf" element={<BookShelf />} />
        </Routes>
      </div>
    </React.Fragment>
  );
}

export default App;
