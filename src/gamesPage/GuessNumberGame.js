import React, { useEffect, useState } from "react";
import "./GuessNumberGame.css";
import { RotateLoader } from "react-spinners";
import BetAmountModal from "../components/gamesmodal/BetAmountModal";
import WarningMessage from "../components/gamesmodal/WarningMessage";

const GuessNumberGame = () => {
  const [randomNumbers, setRandomNumbers] = useState([]);
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [range1, setRange1] = useState([]);
  const [range2, setRange2] = useState([]);
  const [loader, setLoader] = useState(false);
  const [resultNumber, setResultNumber] = useState(null);
  const [isGamePlayed, setIsGamePlayed] = useState(false); // New state
  const [winMessage, setWinMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
  const [isWarningOpen, setIsWarningOpen] = useState(false); // Modal state
  const [warningMessage, setWarningMessage] = useState("");
  const [walletAmount, setWalletAmount] = useState(100);
  const [isPlayAccess, setPlayAccess] = useState(false);
  const [computerSelection, setComputerSelection] = useState(-1);

  useEffect(() => {
    document.body.style.padding = "0";
    startGame();
    return () => {
      document.body.style.padding = "";
    };
  }, []);

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
    if (isGamePlayed) {
      return; // Prevent playing multiple times without refresh
    }

    setLoader(true);

    if (selectedNumber || selectedOption) {
      setIsGamePlayed(true); // Disable further interaction

      if (selectedNumber) {
        const [result, number] = numberSelectionGame();
        setResultNumber(number);
        const index = randomNumbers.indexOf(number);
        setTimeout(() => {
          setLoader(false);
          if (result) {
            setWinMessage("You Win !");
          } else {
            setWinMessage("You Loss !");
          }
          setComputerSelection(index);
        }, 1000);
      } else if (selectedOption === "Even") {
        const [result, number] = optionSelectionGame();
        setResultNumber(number);
        const index = randomNumbers.indexOf(number);
        setTimeout(() => {
          setLoader(false);
          if (result) {
            setWinMessage("You Win !");
          } else {
            setWinMessage("You Loss !");
          }
          setComputerSelection(index);
        }, 1000);
      } else if (selectedOption === "Odd") {
        const [result, number] = optionSelectionGame();
        setResultNumber(number);
        const index = randomNumbers.indexOf(number);
        setTimeout(() => {
          setLoader(false);
          if (result) {
            setWinMessage("You Win !");
          } else {
            setWinMessage("You Loss !");
          }
          setComputerSelection(index);
        }, 1000);
      } else {
        const [result, number] = optionSelectionGame();
        setResultNumber(number);
        setTimeout(() => {
          setLoader(false);
          if (result) {
            setWinMessage("You Win !");
          } else {
            setWinMessage("You Loss !");
          }
        }, 1000);
      }
    } else {
      setIsWarningOpen(true);
      setWarningMessage("Please Choose Any Option");
      setLoader(false);
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
      const randomGeneratedNumber = rangeNumberGame(range1, range2);
      const tempRange = selectedOption.split("-").map(Number);
      if (
        randomGeneratedNumber >= tempRange[0] &&
        randomGeneratedNumber <= tempRange[1]
      ) {
        return [true, randomGeneratedNumber];
      } else {
        return [false, randomGeneratedNumber];
      }
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

  const rangeNumberGame = (r1, r2) => {
    const generateRangeArray = (start, end) => {
      const arr = [];
      for (let i = start; i <= end; i++) {
        arr.push(i);
      }
      return arr;
    };

    const arr1 = generateRangeArray(r1[0], r1[1]);
    const arr2 = generateRangeArray(r2[0], r2[1]);
    const finalRangeArray = [...arr1, ...arr2];
    const findRandomNumber = (arr) => {
      const randomIndex = Math.floor(Math.random() * arr.length);
      return arr[randomIndex];
    };
    const rvalueGenereated = findRandomNumber(finalRangeArray);
    return rvalueGenereated;
  };

  const refreshGame = () => {
    setComputerSelection(-1);
    setIsModalOpen(false);
    setIsWarningOpen(false);
    setWarningMessage("");
    setPlayAccess(false);
    setResultNumber(null);
    setLoader(false);
    setSelectedNumber(null);
    setSelectedOption(null);
    setWinMessage("");
    setIsGamePlayed(false); // Re-enable interactions
    startGame();
  };

  const handleCloseModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const handleWarningClose = () => {
    setIsWarningOpen(!isWarningOpen);
  };
  const handleWallet = (betAmount) => {
    if (walletAmount > betAmount) {
      setWalletAmount(walletAmount - betAmount);
      setPlayAccess(true);
    } else {
      setWarningMessage("Not Sufficient Amount");
      setIsWarningOpen(true);
    }
  };

  return (
    <div className="container-fluid main-container-Guess-the-number p-0 mt-2">
      <BetAmountModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleWallet}
      />
      <WarningMessage
        isOpen={isWarningOpen}
        onClose={handleWarningClose}
        message={warningMessage}
      />
      <div className="container-fluid guess-game-sub-container">
        <div className="row">
          <div className="h3 fw-bold mt-2">Guess The Number</div>
        </div>

        <div className="guess-result-box d-flex justify-content-center align-items-center position-relative mt-1">
          {loader ? (
            <>
              <div className="loader">
                <RotateLoader color="rgba(146, 42, 42, 1)" size={20} />
              </div>
              <img
                className="img-fluid"
                src="/assets/img/banner/qimg0.png"
                alt="?"
              />
            </>
          ) : (
            <div>
              {resultNumber ? (
                <div className="result-g-number">{resultNumber}</div>
              ) : (
                <img
                  className="img-fluid"
                  src="/assets/img/banner/qimg0.png"
                  alt="?"
                />
              )}
            </div>
          )}
        </div>

        <div className="row mt-2">
          <div className="col game-block container-fluid">
            <div className="number-area col">
              {randomNumbers.map((number, index) => (
                <div
                  key={index}
                  className={`number-box rounded-4 container-fluid m-1 flex-grow-1 ${
                    selectedNumber === number ? "number-box-active" : ""
                  } ${computerSelection === index ? "comp-chosen" : ""}`}
                  onClick={() => {
                    if (!isGamePlayed) {
                      setSelectedNumber(number);
                      setSelectedOption(null);
                    }
                  }}
                  style={{ pointerEvents: isGamePlayed ? "none" : "auto" }}
                >
                  {number}
                </div>
              ))}
            </div>

            <div className="buttons-block col d-flex justify-content-center mt-3 mb-2">
              <button
                className={`option-btn col ms-2 me-2 ${
                  selectedOption === `${range1[0]}-${range1[1]}`
                    ? "btn-active"
                    : ""
                }`}
                onClick={() => {
                  if (!isGamePlayed) {
                    setSelectedOption(`${range1[0]}-${range1[1]}`);
                    setSelectedNumber(null);
                  }
                }}
                style={{ pointerEvents: isGamePlayed ? "none" : "auto" }} // Disable click after game
              >
                {range1[0]}-{range1[1]}
              </button>
              <button
                className={`option-btn col ms-2 me-2 ${
                  selectedOption === "Even" ? "btn-active" : ""
                }`}
                onClick={() => {
                  if (!isGamePlayed) {
                    setSelectedOption("Even");
                    setSelectedNumber(null);
                  }
                }}
                style={{ pointerEvents: isGamePlayed ? "none" : "auto" }} // Disable click after game
              >
                Even
              </button>
              <button
                className={`option-btn col ms-2 me-2 ${
                  selectedOption === "Odd" ? "btn-active" : ""
                }`}
                onClick={() => {
                  if (!isGamePlayed) {
                    setSelectedOption("Odd");
                    setSelectedNumber(null);
                  }
                }}
                style={{ pointerEvents: isGamePlayed ? "none" : "auto" }} // Disable click after game
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
                  if (!isGamePlayed) {
                    setSelectedOption(`${range2[0]}-${range2[1]}`);
                    setSelectedNumber(null);
                  }
                }}
                style={{ pointerEvents: isGamePlayed ? "none" : "auto" }}
              >
                {range2[0]}-{range2[1]}
              </button>
            </div>

            <div className="play-button-block d-flex justify-content-center mt-3 gap-2">
              <button
                className="rounded-2 add-bet-button-g-number"
                type="button"
                onClick={() => {
                  setIsModalOpen(true);
                }}
                style={{ pointerEvents: isGamePlayed ? "none" : "auto" }}
              >
                Add Bet
              </button>

              {isGamePlayed ? (
                <button
                  className="play-guess-btn  p-1 ps-4 pe-4 rounded-2"
                  onClick={refreshGame}
                >
                  Play Again
                </button>
              ) : (
                <button
                  className="play-guess-btn  p-1 ps-4 pe-4 rounded-2"
                  onClick={
                    isPlayAccess
                      ? playGame
                      : () => {
                          setIsWarningOpen(true);
                          setWarningMessage("Please Add Bet");
                        }
                  }
                >
                  Play
                </button>
              )}
            </div>
            <div className="winnnig-message-g-number d-flex justify-content-center align-items-center fw-semibold mt-2">
              {winMessage ? winMessage : ""}
            </div>
            <div className="balance-guess-game d-flex justify-content-center align-items-center mt-2 fw-bold fs-3">
              $1000
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuessNumberGame;
