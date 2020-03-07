import React from "react";
import Cell from "../Cell/Cell";
import PropTypes from "prop-types";
import "./Board.css";

const Board = props => {
  const columns = ["A", "B", "C", "D", "E", "F", "G", "H"];
  const rows = [1, 2, 3, 4, 5, 6, 7, 8];
  const onCellClick = position => {
    console.log(position);
  };
  return (
    <div className="board">
      {columns.map((column, columnIndex) => (
        <div key={columnIndex}>
          {rows.map((row, rowIndex) => (
            <Cell
              key={rowIndex}
              row={rowIndex}
              column={columnIndex}
              position={`${column}${row}`}
              onClick={onCellClick}
            ></Cell>
          ))}
        </div>
      ))}
    </div>
  );
};

Board.propTypes = {};

export default Board;
