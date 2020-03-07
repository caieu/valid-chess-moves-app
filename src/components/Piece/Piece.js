import React from "react";
import PropTypes from "prop-types";

const Piece = ({ name, icon }) => {
  return <div className="piece"></div>;
};

Piece.propTypes = {
  name: PropTypes.string,
  icon: PropTypes.string
};

export default Piece;
