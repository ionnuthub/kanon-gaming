import Reel from "./Reel";
import { useState } from "react";
import Button from "react-bootstrap/Button";

import "./slotMachine.css";

const fruits = ["cherry", "apple", "banana", "lemon"];

function SlotMachine() {
  const [coins, setCoins] = useState(20);
  const [isSpinning, setIsSpinning] = useState(false);
  const [spinResult, setSpinResult] = useState(["", "", ""]);

  //Randomly select a fruit from fruits array
  function spinReel() {
    const randomFruit = Math.floor(Math.random() * fruits.length);
    return fruits[randomFruit];
  }

  //Handle the click event of the spin button
  function handleSpin() {
    if (coins < 1) {
      alert("Out of coins! Please add more coins to continue playing.");
      return;
    }

    // Calculate the win coins based on the spin result
    const winCoins = checkWin(spinResult[0], spinResult[1], spinResult[2]);

    if (coins > 0) {
      setIsSpinning(true); //Start spinnings
      setCoins((prevCoins) => prevCoins - 1 + winCoins);
      setSpinResult([spinReel(), spinReel(), spinReel()]);
    }

    //Stop spinning
    setTimeout(() => {
      setIsSpinning(false);
    }, 1000);
  }

  // Check for win
  const checkWin = (fruit1, fruit2, fruit3) => {
    if (fruit1 === fruit2 && fruit2 === fruit3) {
      switch (fruit1) {
        case "cherry":
          return 50;
        case "apple":
          return 20;
        case "banana":
          return 15;
        case "lemon":
          return 3;
        default:
          return 0;
      }
    }

    //Check for two fruits match
    if (fruit1 === fruit2 && fruit1 !== "lemon") {
      switch (fruit1) {
        case "cherry":
          return 40;
        case "apple":
          return 10;
        case "banana":
          return 5;
        default:
          return 0;
      }
    }
    return 0;
  };

  return (
    <div className="container">
      <h2>Slot Machine</h2>
      <div className="reels">
        <Reel spinReel={spinReel} isSpinning={isSpinning} />
        <Reel spinReel={spinReel} isSpinning={isSpinning} />
        <Reel spinReel={spinReel} isSpinning={isSpinning} />
      </div>
      <div>Coins: {coins}</div>
      <Button
        onClick={handleSpin}
        disabled={isSpinning}
        variant="outline-primary"
      >
        Spin ({isSpinning ? "Spinning..." : "1 Coin"})
      </Button>{" "}
      <div className="result">
        {checkWin(spinResult[0], spinResult[1], spinResult[2]) > 0 ? (
          <div className="text-win">
            <p>
              <strong>
                You won {checkWin(spinResult[0], spinResult[1], spinResult[2])}
                coins!
              </strong>
            </p>
          </div>
        ) : (
          <div className="text-lost">
            {" "}
            <p>You spin with 1 coin</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default SlotMachine;
