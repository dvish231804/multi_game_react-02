import React, { useEffect, useState } from "react";
// import "./GuessNumberGame.css"; // Include your CSS

const GuessNumberGame = () => {
  const [randomNumbers, setRandomNumbers] = useState([]);
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [range1, setRange1] = useState([]);
  const [range2, setRange2] = useState([]);

  useEffect(() => {
    startGame();
  }, []);
  // Function to start the game
  const startGame = () => {
    const generatedNumbers = randomNumberGenerator();
    setRandomNumbers(generatedNumbers);
    const [rangeVal1, rangeVal2] = generateRandomRanges();
    setRange1(rangeVal1);
    setRange2(rangeVal2);
  };

  const randomNumberGenerator = () => {
    const uniqueNumbers = new Set();
    while (uniqueNumbers.size < 15) {
      const randomNumber = Math.floor(Math.random() * 100) + 1;
      uniqueNumbers.add(randomNumber);
    }
    return [...uniqueNumbers];
  };

  const generateRandomRanges = () => {
    const getRange1 = () => {
      const min = Math.floor(Math.random() * 40) + 1;
      const max = min + 10;
      return [min, max];
    };

    const getRange2 = () => {
      const min = Math.floor(Math.random() * 40) + 51;
      const max = min + 10;
      return [min, max];
    };

    return [getRange1(), getRange2()];
  };

  const playGame = () => {
    if (selectedNumber) {
      const [result, number] = numberSelectionGame();
      alert(
        result
          ? `You Win! Computer's number = ${number}`
          : `You Lose! Computer's number = ${number}`
      );
    } else if (selectedOption) {
      const [result, number] = optionSelectionGame();
      alert(
        result
          ? `You Win! Computer's number = ${number}`
          : `You Lose! Computer's number = ${number}`
      );
    } else {
      alert("Please select an option!");
    }
  };

  const numberSelectionGame = () => {
    const randomGeneratedNumber =
      randomNumbers[Math.floor(Math.random() * randomNumbers.length)];
    return selectedNumber === randomGeneratedNumber
      ? [true, randomGeneratedNumber]
      : [false, randomGeneratedNumber];
  };

  const optionSelectionGame = () => {
    if (selectedOption === "Even") {
      return evenSelectionGame(randomNumbers);
    } else if (selectedOption === "Odd") {
      return oddSelectionGame(randomNumbers);
    } else {
      const [rangeMin, rangeMax] = selectedOption.split("-").map(Number);
      const randomGeneratedNumber = rangeNumberGame(rangeMin, rangeMax);
      return randomGeneratedNumber >= rangeMin &&
        randomGeneratedNumber <= rangeMax
        ? [true, randomGeneratedNumber]
        : [false, randomGeneratedNumber];
    }
  };

  const evenSelectionGame = (numbers) => {
    const randomGeneratedNumber =
      numbers[Math.floor(Math.random() * numbers.length)];
    return randomGeneratedNumber % 2 === 0
      ? [true, randomGeneratedNumber]
      : [false, randomGeneratedNumber];
  };

  const oddSelectionGame = (numbers) => {
    const randomGeneratedNumber =
      numbers[Math.floor(Math.random() * numbers.length)];
    return randomGeneratedNumber % 2 !== 0
      ? [true, randomGeneratedNumber]
      : [false, randomGeneratedNumber];
  };

  const rangeNumberGame = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const refreshGame = () => {
    setSelectedNumber(null);
    setSelectedOption(null);
    startGame();
  };

  return (
    <div className="container-fluid main-container p-0">
      <div className="container-fluid guess-game-sub-container">
        <div className="row">
          <div className="h3 fw-bold mt-2">Guess The Number</div>
        </div>
        <div className="row mt-2 border border-success">
          <div className="col game-block container-fluid">
            <div className="number-area col">
              {randomNumbers.map((number, index) => (
                <div
                  key={index}
                  className={`number-box rounded-4 container-fluid m-1 flex-grow-1 ${
                    selectedNumber === number ? "number-box-active" : ""
                  }`}
                  onClick={() => {
                    setSelectedNumber(number);
                    setSelectedOption(null);
                  }}
                >
                  {number}
                </div>
              ))}
            </div>

            <div className="buttons-block border col d-flex justify-content-center mt-3 mb-2">
              <button
                className={`option-btn col ms-2 me-2 ${
                  selectedOption === `${range1[0]}-${range1[1]}`
                    ? "btn-active"
                    : ""
                }`}
                onClick={() => {
                  setSelectedOption(`${range1[0]}-${range1[1]}`);
                  setSelectedNumber(null);
                }}
              >
                {range1[0]}-{range1[1]}
              </button>
              <button
                className={`option-btn col ms-2 me-2 ${
                  selectedOption === "Even" ? "btn-active" : ""
                }`}
                onClick={() => {
                  setSelectedOption("Even");
                  setSelectedNumber(null);
                }}
              >
                Even
              </button>
              <button
                className={`option-btn col ms-2 me-2 ${
                  selectedOption === "Odd" ? "btn-active" : ""
                }`}
                onClick={() => {
                  setSelectedOption("Odd");
                  setSelectedNumber(null);
                }}
              >
                Odd
              </button>
              <button
                className={`option-btn col ms-2 me-2 ${
                  selectedOption === `${range2[0]}-${range2[1]}`
                    ? "btn-active"
                    : ""
                }`}
                onClick={() => {
                  setSelectedOption(`${range2[0]}-${range2[1]}`);
                  setSelectedNumber(null);
                }}
              >
                {range2[0]}-{range2[1]}
              </button>
            </div>

            <div className="col mt-3 mb-2 d-flex justify-content-center p-2 position-relative">
              <button
                className="btn play-btn border p-1 ps-4 pe-4 rounded-2"
                onClick={playGame}
              >
                Play
              </button>
              <button
                className="position-absolute me-4 game-refresh-button restart-btn d-flex justify-content-center align-items-center p-2 btn border"
                onClick={refreshGame}
              >
                <i className="fa-solid fa-rotate-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuessNumberGame;
