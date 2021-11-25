import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Searcher from "./components/Searcher";
import Favorites from "./components/Favourites";
import Seasons from "./components/Seasons";
import Season from "./components/Season";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Searcher />} />
        <Route path="/favs" element={<Favorites />} />
        <Route exact path="/seasons" element={<Seasons />} />
        <Route exact path="/seasons/:id" element={<Season />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

// <div className="App">
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <p>
//       Edit <code>src/App.js</code> and save to reload.
//     </p>
//     <a
//       className="App-link"
//       href="https://reactjs.org"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Learn React
//     </a>
//   </header>
// </div>
