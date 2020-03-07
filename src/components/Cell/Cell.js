import React from "react";
import PropTypes from "prop-types";
import "./Cell.css";

const Cell = ({ row, column, position, onClick, highlight }) => {
  const handleClick = () => {
    onClick(position);
  };
  const getCellColor = (x, y) => {
    const odd = x % 2;

    if (y % 2) {
      return odd ? "light-color" : "dark-color";
    }

    return odd ? "dark-color" : "light-color";
  };
  return (
    <div
      className={`cell ${getCellColor(column, row)} ${
        highlight ? "highlight" : ""
      }`}
      onClick={handleClick}
    >
      {position}
    </div>
  );
};

Cell.propTypes = {
  row: PropTypes.number,
  column: PropTypes.number,
  position: PropTypes.string,
  onClick: PropTypes.func,
  highlight: PropTypes.bool
};

export default Cell;
