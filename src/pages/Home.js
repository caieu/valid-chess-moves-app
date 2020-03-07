import React, { useState } from "react";
import Board from "../components/Board/Board";
import { Container, Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";

const Home = props => {
  let [selectedPosition, setSelectedPosition] = useState("");
  return (
    <Container>
      <Row>
        <Col>
          <Board selectedPosition={selectedPosition}></Board>
        </Col>
      </Row>
    </Container>
  );
};

Home.propTypes = {};

export default Home;
