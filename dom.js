let container = document.querySelector("#container"),
  header = document.querySelector("#header"),
  main = document.querySelector("#main"),
  footer = document.querySelector("#footer");

//---------------------Header-------------------------------
let titleContainer = document.createElement("DIV"),
titulo = document.createElement("H1");

titleContainer.classList.add("titleContainer");
titulo.classList.add("title");

titulo.innerHTML = "Let's play!";
header.appendChild(titleContainer);
titleContainer.appendChild(titulo);

//------------------------Main-------------------------------
let pointsContainer = document.createElement("DIV"),
  pointsPlayerContainer = document.createElement("DIV"),
  playerName = document.createElement("H3"),
  playerContainer = document.createElement("DIV"),
  playerBoxPoints = document.createElement("DIV"),
  playerElection = document.createElement("SPAN"),
  pointsEnemyContainer = document.createElement("DIV"),
  enemyName = document.createElement("H3"),
  enemyContainer = document.createElement("DIV"),
  enemyBoxPoints = document.createElement("DIV"),
  enemyElection = document.createElement("SPAN");

//---------------------Main.first-------------------------------

pointsContainer.classList.add("pointsContainer");
pointsPlayerContainer.classList.add("pointsPlayerContainer");
playerContainer.classList.add("playerContainer");
playerName.classList.add("playerName");
playerBoxPoints.classList.add("playerBoxPoints");
playerElection.classList.add("playerElection");
pointsEnemyContainer.classList.add("pointsEnemyContainer");
enemyContainer.classList.add("enemyContainer");
enemyName.classList.add("enemyName");
enemyBoxPoints.classList.add("enemyBoxPoints");
enemyElection.classList.add("enemyElection");


pointsPlayerContainer.appendChild(playerContainer);
playerContainer.appendChild(playerName);
playerContainer.appendChild(playerBoxPoints);
playerContainer.appendChild(playerElection);

pointsEnemyContainer.appendChild(enemyContainer);
enemyContainer.appendChild(enemyName);
enemyContainer.appendChild(enemyBoxPoints);
enemyContainer.appendChild(enemyElection);

pointsContainer.appendChild(pointsPlayerContainer);
pointsContainer.appendChild(pointsEnemyContainer);

main.appendChild(pointsContainer);

//---------------------------Main.First.Player---------------------------------------

playerName.textContent = `player:`;
playerBoxPoints.textContent = playerPoint;
playerElection.innerHTML = ``;

//---------------------------Main.First.Enemy---------------------------------------

enemyName.textContent = `enemy:`;
enemyBoxPoints.textContent = playerPoint;
enemyElection.innerHTML = ``;

//---------------------Main.second-------------------------------
let boxContainer = document.createElement("DIV"),
  rockBoxContainer = document.createElement("DIV"),
  rockBox = document.createElement("SPAN"),
  paperBoxContainer = document.createElement("DIV"),
  paperBox = document.createElement("SPAN"),
  scissorBoxContainer = document.createElement("DIV"),
  scissorBox = document.createElement("SPAN");

boxContainer.classList.add("boxContainer");
rockBoxContainer.classList.add("btnBox");
rockBox.classList.add("figBox");
paperBoxContainer.classList.add("btnBox");
paperBox.classList.add("figBox");
scissorBoxContainer.classList.add("btnBox");
scissorBox.classList.add("figBox");

rockBoxContainer.appendChild(rockBox);
paperBoxContainer.appendChild(paperBox);
scissorBoxContainer.appendChild(scissorBox);

boxContainer.appendChild(rockBoxContainer);
boxContainer.appendChild(paperBoxContainer);
boxContainer.appendChild(scissorBoxContainer);

main.appendChild(boxContainer);

rockBox.innerHTML = `<img src="..//rock_paper-scissors/rock.svg" alt="img de tijera" width = 60px>`;
paperBox.innerHTML = `<img src="..//rock_paper-scissors/paper.svg" alt="img de tijera" width = 60px>`;
scissorBox.innerHTML = `<img src="..//rock_paper-scissors/scissors.svg" alt="img de tijera" width = 60px>`;

//---------------------Footer--------------------------------

let messageContainer = document.createElement("div"),
  message = document.createElement("SPAN");

messageContainer.classList.add("messageContainer");
message.classList.add("message");

messageContainer.appendChild(message);
footer.appendChild(messageContainer);

message.innerHTML = `<h2>welcome to the arena!</h2>`;

//---------------------Reset--------------------------------

let resetContainer = document.querySelector("#resetContainer"),
  resetModal = document.querySelector("#resetModal"),
  resetTitle = document.querySelector("#resetTitle"),
  resetContent = document.querySelector("#resetContent"),
  resetBtn = document.querySelector("#resetBtn");

/*----------------------------------------------------------- */

rockBox.addEventListener("click", () => {
  let pase = game("rock");
  playerElection.innerHTML = `<img src="..//rock_paper-scissors/rock.svg" alt="roca">`;
  enemyElection.innerHTML = `<img src="..//rock_paper-scissors/${compuSelect}.svg" alt="${compuSelect}">`;
  pase == "tie"
    ? (message.innerHTML = `<h2>it's a TIE!!</h2>`)
    : (message.innerHTML = `<h2>${pase}</h2>`);

  playerBoxPoints.innerHTML = playerPoint;
  enemyBoxPoints.innerHTML = enemyPoint;
  resetGame();
});

paperBox.addEventListener("click", () => {
  let pase = game("paper");
  playerElection.innerHTML = `<img src="..//rock_paper-scissors/paper.svg" alt="roca">`;
  enemyElection.innerHTML = `<img src="..//rock_paper-scissors/${compuSelect}.svg" alt="${compuSelect}">`;

  pase == "tie"
    ? (message.innerHTML = `<h2>it's a TIE!!</h2>`)
    : (message.innerHTML = `<h2>${pase}</h2>`);
  playerBoxPoints.innerHTML = playerPoint;
  enemyBoxPoints.innerHTML = enemyPoint;
  resetGame();
});

scissorBox.addEventListener("click", () => {
  let pase = game("scissors");
  playerElection.innerHTML = `<img src="..//rock_paper-scissors/scissors.svg" alt="roca">`;
  enemyElection.innerHTML = `<img src="..//rock_paper-scissors/${compuSelect}.svg" alt="${compuSelect}">`;

  pase == "tie"
    ? (message.innerHTML = `<h2>it's a TIE!!</h2>`)
    : (message.innerHTML = `<h2>${pase}</h2>`);

  playerBoxPoints.innerHTML = playerPoint;
  enemyBoxPoints.innerHTML = enemyPoint;

  resetGame();
});

resetBtn.addEventListener("click", () => {
  playerPoint = 0;
  enemyPoint = 0;
  playerBoxPoints.innerHTML = playerPoint;
  enemyBoxPoints.innerHTML = enemyPoint;
  playerElection.innerHTML = ''
  enemyElection.innerHTML = ''
  message.innerHTML = `<h2>welcome to the arena!</h2>`;
  resetContainer.classList.toggle("show");
});
