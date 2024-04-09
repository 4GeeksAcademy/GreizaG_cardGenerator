/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let cardGenerate = () => {
    let suit = ["♦", "♥", "♠", "♣"];
    let cardNum = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

    let suitIndex = Math.floor(Math.random() * (suit.length - 1));
    let cardNumIndex = Math.floor(Math.random() * (cardNum.length - 1));
    console.log(suit[suitIndex], cardNum[cardNumIndex]);

    return {
      suit: suit[suitIndex],
      cardNum: cardNum[cardNumIndex]
    };
  };
  let { suit, cardNum } = cardGenerate();
  console.log(suit);
  console.log(cardNum);
  document.querySelector("#suitUp").innerHTML = suit;
  document.querySelector("#suitDown").innerHTML = suit;
  document.querySelector("#cardNum").innerHTML = cardNum;

  if (suit == "♦" || suit == "♥") {
    document.querySelector("#suitUp").classList.add("suit");
    document.querySelector("#suitDown").classList.add("suit");
  }
};
