import axios from "axios";

export const GetValidMoves = async (piece, position, turns) => {
  return await axios.get(
    `${process.env.REACT_APP_API_URL}/validMoves/${piece}`,
    {
      params: {
        position: position,
        turns: turns
      }
    }
  );
};
