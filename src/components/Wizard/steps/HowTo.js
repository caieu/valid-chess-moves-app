import React from "react";
import PropTypes from "prop-types";
import HowToGif from "../../../assets/howto.gif";
import { Card, Button, ButtonGroup } from "react-bootstrap";

const HowTo = ({ nextStep, previousStep }) => {
  return (
    <Card className="how-to-container">
      <Card.Img variant="top" src={HowToGif} />
      <Card.Body>
        <Card.Title>How to use</Card.Title>
        <Card.Text>
          Click or tap at any cell of the board to see all the valid moves for
          that position after exactly 2 turns.
        </Card.Text>
        <ButtonGroup>
          <Button variant="dark" onClick={previousStep}>
            Back
          </Button>
          <Button variant="dark" onClick={nextStep}>
            Next
          </Button>
        </ButtonGroup>
      </Card.Body>
    </Card>
  );
};

HowTo.propTypes = {
  nextStep: PropTypes.func,
  previousStep: PropTypes.func
};

export default HowTo;
