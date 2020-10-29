import React from "react";
import "./App.css";
import Movies from "./components/movies";
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

library.add(far, faHeart);
function App() {
  return (
    <div className="container">
      <Movies />
    </div>
  );
}

export default App;
