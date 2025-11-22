import { useState } from 'react';

export default function LudoBoard() {
    const [moves, setMoves] = useState({blue: 0, yellow: 0, green: 0, red: 0});
    

    function updateBlue() {
        setMoves((prevMoves) => {
            return {...prevMoves, blue: prevMoves.blue + 1};
        });
    }
    //

    function updateYellow() {
        setMoves((prevMoves) => {
            return {...prevMoves, yellow: prevMoves.yellow + 1};
        });
    }

    function updateGreen() {
        setMoves((prevMoves) => {
            return {...prevMoves, green: prevMoves.green + 1};
        });
    }

    function updateRed() {
        setMoves((prevMoves) => {
            return {...prevMoves, red: prevMoves.red + 1};
        });
    }

    return (
        <div>
            <h2>Ludo Board Game</h2>
            <div>
                <p>Blue moves: {moves.blue}</p>
                <button style={{backgroundColor: 'blue', color: 'white'}} onClick={updateBlue}>+1</button>
            </div>
            <div>
                <p>Yellow moves: {moves.yellow}</p>
                <button style={{backgroundColor: 'yellow', color: 'black'}} onClick={updateYellow}>+1</button>
            </div>
            <div>
                <p>Green moves: {moves.green}</p>
                <button style={{backgroundColor: 'green', color: 'white'}} onClick={updateGreen}>+1</button>
            </div>
            <div>
                <p>Red moves: {moves.red}</p>
                <button style={{backgroundColor: 'red', color: 'white'}} onClick={updateRed}>+1</button>
            </div>
        </div>
    );
}