import { state } from "../../state";
require;
export function initResult(params) {
  const lastWinner = foundLastWinner();
  console.log(lastWinner);
  const backgroundWinnerColor = backGroundColor(lastWinner);
  const star = getStarImage(lastWinner);
  const div = document.createElement("div");
  div.className = "result-page";
  const style = document.createElement("style");
  div.innerHTML = /*html*/ `

    <div class="star-container">
    <img class="star-img" src="${star[1]}" alt="" srcset="">
    <h1 class="star-text">${star[0]}</h1></div>
    <result-start></result-start>
    <result-score></result-score>
    <custom-button class="welcome-button">Play Again</custom-button>
    <custom-move class="move computer" move="rock" size ="130"></custom-move>
    <custom-move class="move human" move="scissor" size ="130"></custom-move>
  `;
  style.innerText =
    /*css*/
    `
  .result-page{
    height:667px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    background-color:${backgroundWinnerColor};
    padding:20px 25px;
  } 
  .star-img{
    width:290px;
    height:auto;
  }
  .star-container{
    position:relative;
  }
  @import url('https://fonts.googleapis.com/css2?family=Odibee+Sans&display=swap');
  .star-text{
     font-family: 'Odibee Sans', cursive;
     font-size:55px;
    color:white;
    position:absolute;
    top:20%;
    left:34%;
    margin:0;
    color:white;
  }
  .move{
    opacity:0.5;
  }
  .computer{
    position:absolute;
    top:-1000px;
    transform: rotate(180deg);
    left:45%
  }
  .human{
    position:absolute;
    top:-1000px;
    left:45%;
    overflow:hidden;
  }
  `;

  div.appendChild(style);
  const button = div.querySelector(".welcome-button");
  button.addEventListener("click", () => params.goTo("/pregame"));

  return div;
}

function foundLastWinner() {
  const lastState = state.getState();
  console.log(lastState);
  const winners = lastState.winner;
  const lastWinner = winners[winners.length - 1];
  return lastWinner;
}

function backGroundColor(lastWinner) {
  let backgroundWinnerColor = "";
  if (lastWinner == "computer") {
    return (backgroundWinnerColor = "rgba(137, 73, 73, 0.9)");
  }
  if (lastWinner == "human") {
    return (backgroundWinnerColor = "rgba(136, 137, 73, 0.9)");
  }
  if (lastWinner == "tie") {
  }
  backgroundWinnerColor = "blue";
  return backgroundWinnerColor;
}

function getStarImage(lastWinner) {
  let message = "";
  let starImageURL = "";
  if (lastWinner == "computer") {
    starImageURL = require("url:../../imgs/lose-star.png");
    message = "You Lose";
  }
  if (lastWinner == "human") {
    starImageURL = require("url:../../imgs/win-star.png");
    message = "You Win";
  }
  if (lastWinner == "tie") {
    message == "tie";
  }
  return [message, starImageURL];
}
