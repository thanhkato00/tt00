import React from "react";
import Curesl from "./Curesl";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Navbars from "../Navbars/Navbars";

function TopPage() {
  const btnstyle = {
    fontSize: "30px",
    padding: "10px 20px",
    margin: "5px",
  };
  return (
    <div>
      <Curesl />
      <div className="text-center">
        <Button variant="info" style={btnstyle} as={Link} to="/">
          ALL
        </Button>{" "}
        <Button variant="primary" style={btnstyle}>
          Adidas
        </Button>{" "}
        <Button variant="secondary" style={btnstyle}>
          Nike
        </Button>{" "}
        <Button variant="success" style={btnstyle}>
          Jordan
        </Button>{" "}
        <Button variant="warning" style={btnstyle}>
          Sneaker
        </Button>{" "}
      </div>
    </div>
  );
}

export default TopPage;
