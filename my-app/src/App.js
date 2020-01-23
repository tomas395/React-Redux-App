import React from "react";
import "./App.css";
import axios from "axios";

function App() {
  axios
    .get("https://api.icndb.com/jokes/random")
    .then(res => {
      console.log("Fetched!", res.data);
    })
    .catch(err => console.log("Error: The data was not returned!", err));
  return (
    <div className="App">
      <h1>Welcome to blah blah API!</h1>
      <button className="joke-button">Chuck Related Joke</button>
    </div>
  );
}

export default App;
