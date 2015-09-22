// sample angular code
var app = angular.module('myApp', []);

app.controller('myController', function($scope) {
  $scope.player = new Player();
  $scope.computer = new Player();

  $scope.chose = function(playerChoice) {
    $scope.player.move = playerChoice;
    $scope.computer.computerMove();
    $scope.winner = $scope.player.winner($scope.player, $scope.computer);
  };

  $scope.reset = function() {
    $scope.player.score = 0;
    $scope.player.move = "";
    $scope.computer.score = 0;
    $scope.computer.move = "";
  };
});
