import React, { useState, useEffect } from "react";
import { CSSTransitionGroup } from "react-transition-group";
import Wizard from "../components/Wizard/Wizard";
import Board from "../components/Board/Board";
import { Container, Row, Col } from "react-bootstrap";
import { GetValidMoves } from "../api";
import "./Home.scss";

const Home = props => {
  let [wizard, setWizard] = useState(true);
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
          setLoading(false);
          setPossibleMoves([]);
        });
    }
  }, [selectedPosition]);

  return (
    <Container className="home-container">
      <CSSTransitionGroup
        transitionName="fade"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
      >
        {wizard && (
          <Row className="wizard-row">
            <Col>
              <Wizard onEnd={() => setWizard(false)}></Wizard>
            </Col>
          </Row>
        )}
        {!wizard && (
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
        )}
      </CSSTransitionGroup>
    </Container>
  );
};

Home.propTypes = {};

export default Home;
