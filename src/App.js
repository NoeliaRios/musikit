import React from "react";
import "./App.css";
// import Login from "./components/Login";
// import Button from "./components/Button";

function App() {
  const baseUrl = `https://accounts.spotify.com/authorize`;
  const clientId = `9707e364097c49dcbddbf4ab16693866`;
  const responseType = `token`;
  const redirect_uri = `http://localhost:3000/dashboard`;
  return (
    <div className="App">
      <a href={`${baseUrl}?client_id=${clientId}&response_type=${responseType}&redirect_uri=${redirect_uri}`}>Loguearme a Spotify</a>
      {/* <Login />
      <Button /> */}
    </div>
  );
}

export default App;
