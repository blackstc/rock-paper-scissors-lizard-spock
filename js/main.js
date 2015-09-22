var Player = function() {
  this.move = "";
  this.score = 0;
};


Player.prototype.computerMove = function () {
  var moveArray = ["rock", "paper", "scissors", "spock", "lizard"];
  var indexNumber = Math.floor(Math.random() * moveArray.length);
  this.move = moveArray[indexNumber];
};

Player.prototype.winner = function(player, computer) {
  switch(true) {
    case ((player.move === "rock") && (computer.move === "scissors" || computer.move === "lizard")):
      player.score++;
      return "rock wins";
    case ((player.move === "scissors") && (computer.move === "paper" || computer.move === "lizard")):
      player.score++;
      return "scissors wins";
    case ((player.move === "paper") && (computer.move === "rock" || computer.move === "spock")):
      player.score++;
      return "paper wins";
    case ((player.move === "lizard") && (computer.move === "spock" || computer.move === "paper")):
      player.score++;
      return "lizard wins";
    case ((player.move === "spock") && (computer.move === "rock" || computer.move === "scissors")):
      player.score++;
      return "spock wins";
    case ((computer.move === "rock") && (player.move === "scissors" || player.move === "lizard")):
      computer.score++;
      return "rock wins";
    case ((computer.move === "scissors") && (player.move === "paper" || player.move === "lizard")):
      computer.score++;
      return "scissors wins";
    case ((computer.move === "paper") && (player.move === "rock" || player.move === "spock")):
      computer.score++;
      return "paper wins";
    case ((computer.move === "lizard") && (player.move === "spock" || player.move === "paper")):
      computer.score++;
      return "lizard wins";
    case ((computer.move === "spock") && (player.move === "rock" || player.move === "scissors")):
      computer.score++;
      return "spock wins";
    default:
      return "The result is a tie!";
  }
};
