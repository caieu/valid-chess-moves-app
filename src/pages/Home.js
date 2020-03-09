import React, { useState } from "react";
import { CSSTransitionGroup } from "react-transition-group";
import Wizard from "../components/Wizard/Wizard";
import Board from "../components/Board/Board";
import { Container, Row, Col, Button } from "react-bootstrap";
import { GetValidMoves } from "../api";
import "./Home.scss";

const Home = props => {
  let [wizard, setWizard] = useState(true);
  let [possibleMoves, setPossibleMoves] = useState([]);
  let [selectedPosition, setSelectedPosition] = useState("");
  let [loading, setLoading] = useState(false);
  const onSelectedPosition = position => {
    setSelectedPosition(position);
    setPossibleMoves([]);
  };
  const onShowPossiblePositions = () => {
    if (selectedPosition) {
      setLoading(true);
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
  };

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
            <Col xs={12}>
              <Board
                selectedPosition={selectedPosition}
                onCellClick={onSelectedPosition}
                possibleMoves={possibleMoves}
                loading={loading}
              ></Board>
              <Button
                className="show-button"
                variant="dark"
                onClick={onShowPossiblePositions}
              >
                Show
              </Button>
            </Col>
          </Row>
        )}
      </CSSTransitionGroup>
    </Container>
  );
};

Home.propTypes = {};

export default Home;
