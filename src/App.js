import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Logo from "./assets/logo.svg";
import "./App.scss";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Navbar fixed="top" bg="dark" variant="dark">
        <Navbar.Brand
          href="https://github.com/caieu/valid-chess-moves-app"
          target="blank"
        >
          <img
            alt=""
            src={Logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Valid Chess Moves
        </Navbar.Brand>
      </Navbar>
      <div className="App">
        <Home></Home>
      </div>
      <Navbar fixed="bottom" bg="dark" variant="dark">
        <Nav.Link className="footer" href="#home">
          Created by Caainã Jerônimo
        </Nav.Link>
      </Navbar>
    </div>
  );
}

export default App;
