import React from "react";
import PropTypes from "prop-types";
import { Row, Col, Button } from "react-bootstrap";
import { ReactComponent as LogoIcon } from "../../../assets/logo.svg";

const Welcome = ({ nextStep }) => {
  return (
    <div className="welcome-container">
      <Row>
        <Col>
          <LogoIcon className="logo"></LogoIcon>
        </Col>
      </Row>
      <Row className="welcome-title">
        <Col>
          <h2>Welcome to Valid Chess Moves!</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button variant="dark" onClick={nextStep}>
            Next
          </Button>
        </Col>
      </Row>
    </div>
  );
};

Welcome.propTypes = {
  nextStep: PropTypes.func
};

export default Welcome;
