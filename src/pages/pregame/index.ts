export function initPreGame(params) {
  console.log("Pagina Pregame");
  const backgroundImageURL = require("url:../../imgs/background.png");
  const div = document.createElement("div");
  div.className = "instructions-page";
  const style = document.createElement("style");
  style.textContent = `
      .instructions-page{
            background-image: url(${backgroundImageURL});
            margin:auto;
            overflow:hidden;
            height:667px;
            padding-top: 130px
    }
        .container{
           
            display:flex;
            flex-direction:column;    
            align-items:center;
            justify-content:space-between;
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
            margin-top: 60px;
           
        }
        .hand{
            position:relative;
            margin:0 23px;
  
        }
    `;
  div.innerHTML = `  
  <div class="container">
  <h1 class="text">Press Play and choice: Rock, Paper or Scissor before time goes up!</h1>
  <custom-button class="welcome-button">Play!</custom-button>
  <div class="images-container">
  <custom-move class="hand" move="scissor"></custom-move>
  <custom-move class="hand" move="rock"></custom-move>
  <custom-move class="hand" move="paper"></custom-move>
  </div>
  </div>`;
  div.appendChild(style);
  const button = div.querySelector(".welcome-button");
  button.addEventListener("click", () => params.goTo("/game"));
  return div;
}
