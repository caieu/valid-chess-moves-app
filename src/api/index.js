import axios from "axios";

export const GetValidMoves = async (piece, position, turns) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/validMoves/${piece}`,
      {
        params: {
          position: position,
          turns: turns
        }
      }
    );
    return response.data.positions;
  } catch (e) {
    console.log(e);
  }
};
