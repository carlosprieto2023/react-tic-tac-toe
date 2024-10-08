import { useState, useEffect } from "react";
import Board from "./Board";
import GameOver from "./GameOver";
import GameState from "./GameState";
import Reset from "./Reset";
import GameOverSoundAsset from "../sounds/game-over.wav"
import ClickSoundAsset from "../sounds/click.wav"

// Sound 
const GameOverSound = new Audio(GameOverSoundAsset)
GameOverSound.volume = 0.2;
const ClickSound = new Audio(ClickSoundAsset)
ClickSound.volume = 0.5;

// Players
const PLAYER_X = "X";
const PLAYER_O = "O";

const winningCombinations = [
    // Rows
    { combo: [0, 1, 2], strikeClass: "strike-row-1" },
    { combo: [3, 4, 5], strikeClass: "strike-row-2" },
    { combo: [6, 7, 8], strikeClass: "strike-row-3" },
    // Columns
    { combo: [0, 3, 6], strikeClass: "strike-column-1" },
    { combo: [1, 4, 7], strikeClass: "strike-column-2" },
    { combo: [2, 5, 8], strikeClass: "strike-column-3" },
    // Diagonal
    { combo: [0, 4, 8], strikeClass: "strike-diagonal-1" },
    { combo: [2, 4, 6], strikeClass: "strike-diagonal-2" },
];

function checkWinner(tiles, setStrikeClass, setGameState) {
    for (const { combo, strikeClass } of winningCombinations) {
        const tileValue1 = tiles[combo[0]];
        const tileValue2 = tiles[combo[1]];
        const tileValue3 = tiles[combo[2]];
        if (
            tileValue1 !== null &&
            tileValue1 === tileValue2 &&
            tileValue1 === tileValue3
        ) {
            setStrikeClass(strikeClass);
            // Checks for player X
            if (tileValue1 === PLAYER_X) {
                setGameState(GameState.playerXWins);
            }
            // checks for player O
            else {
                setGameState(GameState.playerOWins);
            }
            // this return stops executing if there's a winner
            return;
        }
    }
    // Checks for Draw
    const areAllTilesFilledIn = tiles.every((tile) => tile !== null);
    if (areAllTilesFilledIn) {
        setGameState(GameState.draw);
    }
}

export default function TicTacToe() {
    const [tiles, setTiles] = useState(Array(9).fill(null));
    const [playerTurn, setPlayerTurn] = useState(PLAYER_X);
    const [strikeClass, setStrikeClass] = useState();
    const [gameState, setGameState] = useState(GameState.inProgress);

    function handleTileClick(index) {
        // prevents checking tiles if there's a winning state
        if (gameState !== GameState.inProgress) {
            return;
        }
        // prevents checking tile if is already checked
        if (tiles[index] !== null) {
            return;
        }
        // copy of the array to check for winner
        const newTiles = [...tiles];
        newTiles[index] = playerTurn;
        setTiles(newTiles);
        if (playerTurn === PLAYER_X) {
            setPlayerTurn(PLAYER_O);
        } else {
            setPlayerTurn(PLAYER_X);
        }
    }

    // Reset functionality
    const handleReset = () => {
        setGameState(GameState.inProgress);
        setTiles(Array(9).fill(null));
        setPlayerTurn(PLAYER_X);
        setStrikeClass(null);
    }

    // Use Effect to check for winner
    useEffect(() => {
        checkWinner(tiles, setStrikeClass, setGameState);
    }, [tiles]);

    // Use Effect to add click sound
    useEffect(() => {
        if (tiles.some((tile) => tile !== null)) {
            ClickSound.play();
        }
    }, [tiles]);

    // Use Effect to add game-over sound
    useEffect(() => {
        if (gameState !== GameState.inProgress) {
            GameOverSound.play();
        }
    }, [gameState]);

    return (
        <div>
            <h1>Tic Tac Toe</h1>
            <Board
                playerTurn={playerTurn}
                tiles={tiles}
                onTileClick={handleTileClick}
                strikeClass={strikeClass}
            />
            <GameOver gameState={gameState} />
            <Reset gameState={gameState} onReset={handleReset} />
        </div>
    );
}
