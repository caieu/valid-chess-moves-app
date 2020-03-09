import React from "react";
import PropTypes from "prop-types";
import FindGif from "../../../assets/find.gif";
import { Card, Button, ButtonGroup } from "react-bootstrap";

const Find = ({ nextStep, previousStep }) => {
  return (
    <Card className="find-container">
      <Card.Img variant="top" src={FindGif} />
      <Card.Body>
        <Card.Title>Finding moves</Card.Title>
        <Card.Text>
          Click on show button to find all the possbile valid moves.
        </Card.Text>
        <ButtonGroup>
          <Button variant="dark" onClick={previousStep}>
            Back
          </Button>
          <Button variant="dark" onClick={nextStep}>
            next
          </Button>
        </ButtonGroup>
      </Card.Body>
    </Card>
  );
};

Find.propTypes = {
  nextStep: PropTypes.func,
  previousStep: PropTypes.func
};

export default Find;
