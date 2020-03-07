import React from "react";
import Cell from "../Cell/Cell";
import PropTypes from "prop-types";
import "./Board.css";

const Board = ({ selectedPosition, onCellClick, possibleMoves }) => {
  const columns = ["A", "B", "C", "D", "E", "F", "G", "H"];
  const rows = [8, 7, 6, 5, 4, 3, 2, 1];
  const isPossibleCell = position => {
    return possibleMoves.indexOf(position) >= 0;
  };
  return (
    <div className="board">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex}>
          {columns.map((column, columnIndex) => (
            <Cell
              key={columnIndex}
              row={rowIndex}
              column={columnIndex}
              position={`${column}${row}`}
              onClick={onCellClick}
              highlight={isPossibleCell(`${column}${row}`)}
            ></Cell>
          ))}
        </div>
      ))}
    </div>
  );
};

Board.propTypes = {
  selectedPosition: PropTypes.string,
  onCellClick: PropTypes.func,
  possibleMoves: PropTypes.array
};

export default Board;
