import React, { useState, useEffect } from "react";
import Board from "../components/Board/Board";
import { Container, Row, Col } from "react-bootstrap";
import { GetValidMoves } from "../api";
import PropTypes from "prop-types";

const Home = props => {
  let [possibleMoves, setPossibleMoves] = useState([]);
  let [selectedPosition, setSelectedPosition] = useState("");
  useEffect(() => {
    if (selectedPosition) {
      GetValidMoves("knight", selectedPosition, 2).then(response => {
        setPossibleMoves(response);
      });
    }
  }, [selectedPosition]);

  return (
    <Container>
      <Row>
        <Col>
          <Board
            selectedPosition={selectedPosition}
            onCellClick={setSelectedPosition}
            possibleMoves={possibleMoves}
          ></Board>
        </Col>
      </Row>
    </Container>
  );
};

Home.propTypes = {};

export default Home;
