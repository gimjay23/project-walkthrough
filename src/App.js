import "./App.css";

//Custom Imports
import React, { useState } from "react";
import Login from "./Login";
import Home from "./Home";

function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  return (
    <div className="app">
      {!userLoggedIn && <Login setUserLoggedIn={setUserLoggedIn} />}
      <center className="text-white">
        <br />
        <br />
        {userLoggedIn && <Home setUserLoggedIn={setUserLoggedIn} />}
      </center>
      
    </div>
  );
}

export default App;
