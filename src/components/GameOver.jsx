
export default function GameOver({winner, onRestart}) {
    return (
        <div id="game-over">
            <h2>Game Over</h2>
            <p>{winner ? `Winner is ${winner}` : 'It is a draw'}</p>
            <button onClick={onRestart}>Play Again</button>
        </div>
    )
}