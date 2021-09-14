let computerPlay = () => {
  let numero = Math.floor(Math.random() * 100);

  if (numero >= 1 && numero < 33) {
    return "rock";
  } else if (numero >= 33 && numero < 66) {
    return "paper";
  } else if (numero >= 66 && numero <= 99) {
    return "scissors";
  }
};

let playerPoint = 0;
let enemyPoint = 0;

let compuSelect = ''


let game = (playerElection) => {
  let player = playerElection;
  //let player = playerSelect.toLowerCase();
  let computadora = computerPlay()
  compuSelect = computadora
  console.log(`you choose ${player}, and computer, ${computadora}`);
  
  if (player == "rock" && computadora == "scissors") {
    playerPoint++;
    return noticePlayer();
  } else if (player == "rock" && computadora == "paper") {
    enemyPoint++;
    return noticeEnemy();
  }

  if (player == "paper" && computadora == "rock") {
    playerPoint++;
    return noticePlayer();
  } else if (player == "paper" && computadora == "scissors") {
    enemyPoint++;
    return noticeEnemy();
  }

  if (player == "scissors" && computadora == "paper") {
    playerPoint++;
    return noticePlayer();
  } else if (player == "scissors" && computadora == "rock") {
    enemyPoint++;
    return noticeEnemy();
  }

  if (player == computadora) {
    return `tie`;
  }
};

let noticePlayer = () => {
  if (playerPoint === 1) {
    return "jugador ha anotado";
  } else if (playerPoint === 2) {
    return "jugador ha anotado otro punto";
  } else if (playerPoint === 3) {
    return "ya estamos cerca de conseguirlo";
  } else if (playerPoint === 4) {
    return "punto gana!";
  } else if (playerPoint === 5) {
   
    return  'haz ganado la contienda jugador'
  }
};

let noticeEnemy = () => {
  if (enemyPoint === 1) {
    return "Punto para el bato";
  } else if (enemyPoint === 2) {
    return "el bato lo hace de nuevo y el publico enloquece!!";
  } else if (enemyPoint === 3) {
    return "anotacioooon del bato!!";
  } else if (enemyPoint === 4) {
    return "punto gana para el bato";
  } else if (enemyPoint === 5) {
    
    return 'a chingar a su madre el bato mandaaa'
   ;
  }
};



let resetGame = () => {


  if (playerPoint == 5) {
    resetContainer.classList.toggle("show");
    resetTitle.textContent = "haz ganado la contienda jugador";
    resetContent.textContent ="demostraste tu valia, pero crees poder hacerlo de nuevo? prueba a intentarlo nuevamente"
    resetBtn.textContent = 'Volver a la arena'

  }else if(enemyPoint == 5){
    resetContainer.classList.toggle("show");
    resetTitle.textContent = "Mejor suerte para la proxima";
    resetContent.innerHTML ="Parece que esta vez no ha habido suerte jugador, continua intentandolo, seguro que si te esfuerzas... la proxima vez no perderas tan misearablemente :3 <br><b>ATT. El desarrollador<b/>"
    resetBtn.textContent = 'Revancha'
  }
};
