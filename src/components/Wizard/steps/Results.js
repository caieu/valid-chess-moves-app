import React from "react";
import PropTypes from "prop-types";
import ResultsGif from "../../../assets/results.gif";
import { Card, Button, ButtonGroup } from "react-bootstrap";

const Results = ({ previousStep, onEnd }) => {
  return (
    <Card className="how-to-container">
      <Card.Img variant="top" src={ResultsGif} />
      <Card.Body>
        <Card.Title>Valid Moves</Card.Title>
        <Card.Text>
          The highlighted cells at the board are all the possible positions
          after exactly 2 turns.
        </Card.Text>
        <ButtonGroup>
          <Button variant="dark" onClick={previousStep}>
            Back
          </Button>
          <Button variant="dark" onClick={onEnd}>
            Start
          </Button>
        </ButtonGroup>
      </Card.Body>
    </Card>
  );
};

Results.propTypes = {
  onEnd: PropTypes.func,
  previousStep: PropTypes.func
};

export default Results;
