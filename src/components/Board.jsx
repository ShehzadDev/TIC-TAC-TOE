import Square from './Square';
import React, { useState } from 'react';

function Board() {
    const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
    const [currentMove, setCurrentMove] = useState(0);

    const squares = history[currentMove].squares;
    const xIsNext = currentMove % 2 === 0;
    const winner = calculateWinner(squares);

    function calculateWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [6, 4, 2],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

    function handleClick(i) {
        const newSquares = squares.slice();
        if (newSquares[i] || winner) {
            return;
        }
        newSquares[i] = xIsNext ? 'X' : 'O';
        setHistory([...history.slice(0, currentMove + 1), { squares: newSquares }]);
        setCurrentMove(currentMove + 1);
    }

    const moves = history.map((step, move) => {
        const desc = move ? `Go to move #${move}` : 'Go to game start';
        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>{desc}</button>
            </li>
        );
    });

    let status;
    if (winner) {
        status = `Winner: ${winner}`;
    } else {
        status = `Next player: ${xIsNext ? 'X' : 'O'}`;
    }

    function jumpTo(step) {
        setCurrentMove(step);
    }

    return (
        <div className="grid grid-rows-3 gap-4">
            <div className="grid gap-4 grid-cols-3">
                <Square value={squares[0]} onClick={() => handleClick(0)} />
                <Square value={squares[1]} onClick={() => handleClick(1)} />
                <Square value={squares[2]} onClick={() => handleClick(2)} />
            </div>
            <div className="grid gap-4 grid-cols-3">
                <Square value={squares[3]} onClick={() => handleClick(3)} />
                <Square value={squares[4]} onClick={() => handleClick(4)} />
                <Square value={squares[5]} onClick={() => handleClick(5)} />
            </div>
            <div className="grid gap-4 grid-cols-3">
                <Square value={squares[6]} onClick={() => handleClick(6)} />
                <Square value={squares[7]} onClick={() => handleClick(7)} />
                <Square value={squares[8]} onClick={() => handleClick(8)} />
            </div>
            <div className="status">{status}</div>
            <ol>{moves}</ol>
        </div>
    );
}

export default Board;
