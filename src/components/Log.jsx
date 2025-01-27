export default function Log({ turns }) {
    return <ol id="log">
        {turns.map(turn => <li key={`${turn.square.col}${turn.square.row}`}>{turn.player} selected {turn.square.col} {turn.square.row}</li>) }
    </ol>
}