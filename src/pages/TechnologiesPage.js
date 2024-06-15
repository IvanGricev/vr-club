import React, { useState } from 'react';
import './TechnologiesPage.css';

function Square({ value, onSquareClick }) {
    return (
        <button className="btn btn-primary square m-1" onClick={onSquareClick}>
        {value}
        </button>
    );
}

function Board({ xIsNext, squares, onPlay }) {
    function handleClick(i) {
        if (calculateWinner(squares) || squares[i]) {
        return;
        }
        const nextSquares = squares.slice();
        if (xIsNext) {
        nextSquares[i] = 'X';
        } else {
        nextSquares[i] = 'O';
        }
        onPlay(nextSquares);
    }

    const winner = calculateWinner(squares);
    let status;
    if (winner) {
        status = 'Winner: ' + winner;
    } else {
        status = 'Next player: ' + (xIsNext? 'X' : 'O');
    }

    return (
        <div className="d-flex flex-column justify-content-center">
            <div className="text-center">{status}</div>
            <div className="row">
                {[...Array(3)].map((_, index) => (
                <div className="col-3" key={index}>
                    {[...Array(3)].map((_, subIndex) => (
                    <div className="colt" key={subIndex}>
                        <Square value={squares[index * 3 + subIndex]} onSquareClick={() => handleClick(index * 3 + subIndex)} />
                    </div>
                    ))}
                </div>
                ))}
            </div>
        </div>
    );
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
        }
    }
    return null;
}

const TechnologiesPage = () => {



    
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];

    function handlePlay(nextSquares) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }

    function jumpTo(nextMove) {
        setCurrentMove(nextMove);
    }

    const moves = history.map((squares, move) => {
        let description;
        if (move > 0) {
        description = 'Go to move #' + move;
        } else {
        description = 'Go to game start';
        }
        return (
        <li key={move} className="list-group-item mt-2">
            <button className="btn btn-secondary" onClick={() => jumpTo(move)}>
            {description}
            </button>
        </li>
        );
    });

    return (
    <div className="container text-light bg-dark w-55 p-4 border rounded-3">
        <h1 className="mb-4">Tic Tac Toe</h1>
        <div className="game d-flex flex-column align-items-center justify-content-center p-4">
            <div className="game-board pb-4 p-4">
                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
            </div>
            <div className="game-info mt-5">
                <ul className="list-group">{moves}</ul>
            </div>
        </div>
    </div>

    );
};

export default TechnologiesPage;
