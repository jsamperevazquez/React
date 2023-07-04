import { WINNER_COMBOS } from "./constants";

export const checkWinner = (boardToCheck) => {
    // Revisamos las posibles combinaciones ganadoras
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo;
      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a];
      }
    }
    // si no hay ganador
    return null;
  };

export const checkEndGame = (newBoard) => {
    // Revisamos si hay empate
    // Si no hay más espacios vacíos en tablero
    return newBoard.every((Square) => Square !== null); // Si cada posición del array es diferente de null
  };