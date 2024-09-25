import React from "react";
import GameHeader from "../components/Header/GameHeader";
import Gamecard1 from "../components/cards/Gamecard1";
import GameCard2 from "../components/cards/GameCard2";

export default function Games() {
  return (
    <>
      <div className="Sc5">
        <div className="single-page-area">
          <GameHeader />

          <div className="sports-page-wrap">
            <Gamecard1 />
            <GameCard2 />
          </div>
        </div>
      </div>
    </>
  );
}
