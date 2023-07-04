import { Square } from "./Square";

export function WinnerModal( {winner, resetGame} ) {
  if (winner === null) return null;
  
  const winnerText = winner === false ? "Empate" : "Ganó: ";
  
  return (
    <section className="winner">
      <div className="text">
        <h2>{winnerText}</h2>
        <header className="win">{winner && <Square>{winner}</Square>}</header>
        <footer>
          <button className="btn-3d" onClick={resetGame}>
            Empezar
          </button>
        </footer>
      </div>
    </section>
  );
}
