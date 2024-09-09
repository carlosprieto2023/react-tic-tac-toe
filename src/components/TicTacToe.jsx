import Board from "./Board"

export default function TicTacToe({ className }) {
    return(
        <div>
            <h1>Tic Tac Toe</h1>
            <Board className={className}/>
        </div>
    )
}