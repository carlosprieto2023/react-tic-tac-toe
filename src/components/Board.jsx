

import Tile from "./Tile"



export default function Board({ tiles, onTileClick, playerTurn }) {
    

    return(
        <div className="board-container">
            <Tile 
                playerTurn={playerTurn} 
                onClick={() => onTileClick(0)} 
                value={tiles[0]} className="border-right border-bottom tile-container" 
            />
            <Tile 
                playerTurn={playerTurn} 
                onClick={() => onTileClick(1)} 
                value={tiles[1]} 
                className="border-right border-bottom tile-container" 
            />
            <Tile 
                playerTurn={playerTurn} 
                onClick={() => onTileClick(2)} 
                value={tiles[2]} 
                className="border-bottom tile-container" 
            />
            <Tile 
                playerTurn={playerTurn} 
                onClick={() => onTileClick(3)} 
                value={tiles[3]} 
                className="border-right border-bottom tile-container" 
            />
            <Tile 
                playerTurn={playerTurn} 
                onClick={() => onTileClick(4)} 
                value={tiles[4]} 
                className="border-right border-bottom tile-container" 
            />
            <Tile 
                playerTurn={playerTurn} 
                onClick={() => onTileClick(5)} 
                value={tiles[5]} 
                className="border-bottom tile-container" 
            />
            <Tile 
                playerTurn={playerTurn} 
                onClick={() => onTileClick(6)} 
                value={tiles[6]} 
                className="border-right tile-container" 
            />
            <Tile 
                playerTurn={playerTurn} 
                onClick={() => onTileClick(7)} 
                value={tiles[7]} 
                className="border-right tile-container" 
            />
            <Tile 
                playerTurn={playerTurn} 
                onClick={() => onTileClick(8)} 
                value={tiles[8]} 
                className="tile-container" 
            />
        </div>
    )
}