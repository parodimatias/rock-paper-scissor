export function initWelcome(params) {
  const backgroundImageURL = require("url:../../imgs/background.png");
  const div = document.createElement("div");
  div.className = "welcome-page";
  const style = document.createElement("style");
  style.textContent = `
      .welcome-page{
            background-image: url(${backgroundImageURL});
            margin:auto;
            overflow:hidden;
              height:667px; 
    }
        .container{
            margin-top:180px;
            display:flex;
            flex-direction:column;    
            align-items:center;
            justify-content:space-between;
      }
      .title{
          display:block;
          max-width:300px;
          font-family: "MyAmerican";
          font-weight:bold;
          color:#009048;
          font-size:80px;
          margin:0;
        }
        .welcome-button{
            margin-top: 45px;
        }
        .images-container{
            margin-top: 80px;
              height:100px;
              position: relative;
           
        }
        .hand{
            position:relative;
            margin:0 23px;
        }
    `;
  div.innerHTML = `  
  <div class="container">
  <h1 class="title">Rock Paper Scissor</h1>
  <custom-button class="welcome-button">Start</custom-button>
  <div class="images-container">
  <custom-move class="hand" move="scissor"></custom-move>
  <custom-move class="hand" move="rock"></custom-move>
  <custom-move class="hand" move="paper"></custom-move>
  </div>
  </div>`;
  div.appendChild(style);
  const button = div.querySelector(".welcome-button");
  button.addEventListener("click", () => params.goTo("/pregame"));
  return div;
}
