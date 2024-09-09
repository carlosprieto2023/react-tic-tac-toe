import Tile from "./Tile"



export default function Board() {
    return(
        <div className="board-container">
            <Tile className="border-right border-bottom tile-container" />
            <Tile className="border-right border-bottom tile-container" />
            <Tile className="border-bottom tile-container" />
            <Tile className="border-right border-bottom tile-container" />
            <Tile className="border-right border-bottom tile-container" />
            <Tile className="border-bottom tile-container" />
            <Tile className="border-right tile-container" />
            <Tile className="border-right tile-container" />
            <Tile className="tile-container" />
        </div>
    )
}