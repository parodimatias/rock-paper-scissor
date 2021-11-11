import { state } from "../../state";
export function initGame(params) {
  const backgroundImageURL = require("url:../../imgs/background.png");
  const div = document.createElement("div");
  div.className = "game-page";
  const style = document.createElement("style");
  const computerMove = Math.floor(Math.random() * 3);
  console.log("State is", state.data);
  let computerMoveStr: "rock" | "scissor" | "paper" = "rock";
  if (computerMove == 0) {
    computerMoveStr = "rock";
  }
  if (computerMove == 1) {
    computerMoveStr = "scissor";
  }
  if (computerMove == 2) {
    computerMoveStr = "paper";
  }
  console.log("prueba", computerMoveStr);
  style.textContent = /*css*/ `
       .game-page{
            background-image: url(${backgroundImageURL});
            margin:auto;
            overflow:hidden;
            height:667px;
            padding-top:180px;
    }
        .container{
            
            display:flex;
            flex-direction:column;    
            align-items:center;
            justify-content:space-between;
            position:relative;
            height:100%
      }
        .text{
          display:block;
          max-width:300px;
          font-family: "MyAmerican";
          font-weight:400;
          font-size:40px;
          margin:0;
        }
        .welcome-button{
            margin-top: 45px;
        }
        .images-container{
              height:100px;
              position: absolute;
              bottom:0;
        }
        .hand{
            width:10px;
            position:relative;
            margin:10px
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
  div.innerHTML = /*html*/ `  

  <div class="container">
  <progress-ring class="ring"stroke="11" radius="100" seconds="3"></progress-ring>
  <div class="images-container">
  <custom-move class="hand scissor" move="scissor" hover="true"></custom-move>
  <custom-move class="hand rock" move="rock" hover="true"></custom-move>
  <custom-move class="hand paper" move="paper" hover="true"></custom-move>
  </div>
  <custom-move class="computer" move="${computerMoveStr}" size ="130"></custom-move>

  </div>`;
  let counter = 0;
  const scissor = div.querySelector(".scissor");
  const rock = div.querySelector(".rock");
  const paper = div.querySelector(".paper");
  const container = div.querySelector(".container");
  scissor.addEventListener("click", () => {
    counter = 4;
    console.log("human scissor", computerMoveStr);
    state.addComputerGame(computerMoveStr);
    state.addPlayerGame("scissor");
    container.innerHTML += `   <custom-move class="human" move="scissor"size="130"></custom-move>`;
  });
  paper.addEventListener("click", () => {
    console.log("human paper", computerMoveStr);
    counter = 4;
    state.addComputerGame(computerMoveStr);
    state.addPlayerGame("paper");
    container.innerHTML += `   <custom-move class="human" move="paper"size="130"></custom-move>`;
  });
  rock.addEventListener("click", () => {
    console.log("human rock", computerMoveStr);
    counter = 4;
    state.addComputerGame(computerMoveStr);
    state.addPlayerGame("rock");
    container.innerHTML += `   <custom-move class="human" move="rock"size="130"></custom-move>`;
  });
  const interval = setInterval(() => {
    counter++;

    if (counter >= 4) {
      style.textContent += /*css*/ `
        .hand, .ring{display:none;}
        .human{
              top:230px;
        }
        .computer{
              top:-200px;
        }
      }`;
      clearInterval(interval);
      const intervalTwo = setInterval(() => {
        params.goTo("/result");
        clearInterval(intervalTwo);
      }, 3000);
    }
  }, 1000);

  div.appendChild(style);
  return div;
}
