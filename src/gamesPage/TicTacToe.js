import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import "./TicTacToe.css";

Modal.setAppElement("#root");

const TicTacToe = () => {
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [gameBoard, setGameBoard] = useState(Array(9).fill(null));
  const [gameOver, setGameOver] = useState(false);
  const [playerBalance, setPlayerBalance] = useState(100);
  const [playerBet, setPlayerBet] = useState(0);
  const [message, setMessage] = useState("");
  const [isBetModalOpen, setIsBetModalOpen] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  const startGameSound = new Audio(process.env.PUBLIC_URL + "/start.mp3");
  const winGameSound = new Audio(process.env.PUBLIC_URL + "/win.mp3");
  const loseGameSound = new Audio(process.env.PUBLIC_URL + "/lose.mp3");
  const tieGameSound = new Audio(process.env.PUBLIC_URL + "/win.mp3");
  const tapSound = new Audio(process.env.PUBLIC_URL + "/tap.mp3");

  useEffect(() => {
    if (currentPlayer === "O" && !gameOver && gameStarted) {
      const computerMove = setTimeout(() => makeComputerMove(), 500);
      return () => clearTimeout(computerMove);
    }
  }, [currentPlayer, gameStarted]);

  const checkWinner = (board) => {
    const winPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], // Rows
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], // Columns
      [0, 4, 8],
      [2, 4, 6], // Diagonals
    ];

    for (let pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }

    return null;
  };

  const handleCellClick = (index) => {
    if (gameBoard[index] || gameOver || currentPlayer !== "X" || !gameStarted)
      return;

    const newBoard = [...gameBoard];
    newBoard[index] = "X";
    setGameBoard(newBoard);
    tapSound.play();

    const winner = checkWinner(newBoard);
    if (winner) {
      handleGameOver(winner);
    } else if (newBoard.every((cell) => cell !== null)) {
      handleGameOver(null); // It's a tie
    } else {
      setCurrentPlayer("O");
    }
  };

  const makeComputerMove = () => {
    const availableMoves = gameBoard
      .map((cell, index) => (cell === null ? index : null))
      .filter((index) => index !== null);

    if (availableMoves.length > 0) {
      const computerWinChance = Math.random();
      let computerMove;

      if (computerWinChance < 0.9) {
        // 70% chance of the computer making a winning or blocking move
        computerMove =
          findBestMove("O") ||
          findBestMove("X") ||
          getRandomMove(availableMoves);
      } else {
        // 30% chance of computer making a random move
        computerMove = getRandomMove(availableMoves);
      }

      const newBoard = [...gameBoard];
      newBoard[computerMove] = "O";
      setGameBoard(newBoard);

      const winner = checkWinner(newBoard);
      if (winner) {
        handleGameOver(winner);
      } else if (newBoard.every((cell) => cell !== null)) {
        handleGameOver(null); // It's a tie
      } else {
        setCurrentPlayer("X");
      }
    }
  };

  // Find a move that would result in a win for the given player
  const findBestMove = (player) => {
    const newBoard = [...gameBoard];
    for (let i = 0; i < newBoard.length; i++) {
      if (!newBoard[i]) {
        newBoard[i] = player;
        if (checkWinner(newBoard) === player) {
          return i;
        }
        newBoard[i] = null;
      }
    }
    return null;
  };

  // Get a random move from available moves
  const getRandomMove = (availableMoves) => {
    return availableMoves[Math.floor(Math.random() * availableMoves.length)];
  };

  const handleGameOver = (winner) => {
    setGameOver(true);
    setGameStarted(false);

    if (winner === "X") {
      setMessage("You win!");
      winGameSound.play();
      setPlayerBalance((prevBalance) => prevBalance + playerBet * 2); // Win doubles the bet
    } else if (winner === "O") {
      setMessage("Computer wins!");
      loseGameSound.play();
    } else {
      setMessage("It's a tie!");
      tieGameSound.play();
    }
  };

  const resetGame = () => {
    setGameBoard(Array(9).fill(null));
    setGameOver(false);
    setCurrentPlayer("X");
    setMessage("");
    setGameStarted(false);
  };

  const handleBetChange = (e) => {
    setPlayerBet(Number(e.target.value));
  };

  const handlePlaceBet = () => {
    if (playerBet > playerBalance || playerBet <= 0) {
      setMessage("Invalid bet amount");
      return;
    }
    setPlayerBalance((prevBalance) => prevBalance - playerBet);
    setIsBetModalOpen(false);
    startGameSound.play();
    setMessage("Game started!");
    resetGame();
    setGameStarted(true);
  };

  const styles = {
    mainContainer: {
      background: "linear-gradient(135deg, #1e3c72, #2a5298)",
      color: "#fff",
      fontFamily: "Arial, sans-serif",
      textAlign: "center",
      overflow: "hidden",
      minHeight: "100vh",
      padding: "10px",
    },
    heading: {
      fontSize: "3.5em",
      fontWeight: 700,
      color: "#00d4ff",
      textShadow: "0 0 10px rgba(38, 211, 246, 0.5)",
      margin: "20px 0",
    },
    board: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 100px)",
      gridTemplateRows: "repeat(3, 100px)",
      gap: "10px",
      margin: "20px auto",
      maxWidth: "340px",
      padding: "10px",
    },
    cell: {
      width: "100px",
      height: "100px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "3em",
      color: "#00d4ff",
      background: "rgba(0, 0, 0, 0.8)",
      border: "3.5px solid #00d4ff",
      borderRadius: "10px",
      cursor: "pointer",
      transition: "transform 0.3s, background-color 0.3s",
    },
    message: {
      fontSize: "1.5em",
      margin: "20px",
      color: "#00d4ff",
      textShadow: "0 0 10px rgba(0, 212, 255, 0.7)",
    },
    button: {
      backgroundColor: "#00d4ff",
      color: "black",
      border: "5px solid black",
      borderRadius: "10px",
      fontSize: "1.2em",
      padding: "10px 20px",
      cursor: "pointer",
      transition: "background-color 0.3s, transform 0.3s",
    },
    input: {
      margin: "10px",
      fontSize: "1.2em",
      padding: "5px",
    },
    modalContent: {
      backgroundColor: "white",
      borderRadius: "10px",
      padding: "20px",
      width: "300px",
      margin: "0 auto",
      textAlign: "center",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.75)",
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  };

  return (
    <div style={styles.mainContainer}>
      <h1 style={styles.heading}>Tic-Tac-Toe</h1>

      <div style={styles.message}>Player Balance: ${playerBalance}</div>

      {!gameStarted && !gameOver && (
        <button style={styles.button} onClick={() => setIsBetModalOpen(true)}>
          Make a Bet
        </button>
      )}

      <Modal
        isOpen={isBetModalOpen}
        onRequestClose={() => setIsBetModalOpen(false)}
        style={{ overlay: styles.overlay, content: styles.modalContent }}
      >
        <h2>Place Your Bet</h2>
        <input
          style={styles.input}
          type="number"
          value={playerBet}
          onChange={handleBetChange}
          placeholder="Enter your bet"
        />
        <button style={styles.button} onClick={handlePlaceBet}>
          Place Bet
        </button>
      </Modal>

      <div style={styles.message}>{message}</div>

      <div style={styles.board}>
        {gameBoard.map((cell, index) => (
          <div
            key={index}
            style={styles.cell}
            onClick={() => handleCellClick(index)}
          >
            {cell}
          </div>
        ))}
      </div>

      {gameOver && (
        <button style={styles.button} onClick={resetGame}>
          Restart Game
        </button>
      )}
    </div>
  );
};

export default TicTacToe;
