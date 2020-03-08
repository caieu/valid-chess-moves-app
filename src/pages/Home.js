import React, { useState, useEffect } from "react";
import Board from "../components/Board/Board";
import { Container, Row, Col } from "react-bootstrap";
import { GetValidMoves } from "../api";
import "./Home.scss";

const Home = props => {
  let [possibleMoves, setPossibleMoves] = useState([]);
  let [selectedPosition, setSelectedPosition] = useState("");
  let [loading, setLoading] = useState(false);
  const onSelectedPosition = position => {
    if (position !== selectedPosition) {
      setLoading(true);
      setSelectedPosition(position);
    }
  };
  useEffect(() => {
    if (selectedPosition) {
      setPossibleMoves([]);
      GetValidMoves("knight", selectedPosition, 2)
        .then(response => {
          setPossibleMoves(response.data.positions);
          setLoading(false);
        })
        .catch(e => {
          console.log(e);
          setLoading(false);
          setPossibleMoves([]);
        });
    }
  }, [selectedPosition]);

  return (
    <Container className="home-container">
      <Row className="board-row">
        <Col>
          <Board
            selectedPosition={selectedPosition}
            onCellClick={onSelectedPosition}
            possibleMoves={possibleMoves}
            loading={loading}
          ></Board>
        </Col>
      </Row>
    </Container>
  );
};

Home.propTypes = {};

export default Home;
