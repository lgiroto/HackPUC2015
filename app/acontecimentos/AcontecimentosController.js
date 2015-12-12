var Firebase = require("firebase");

;(function() {

  angular
    .module('boilerplate')
    .controller('AcontecimentosController', AcontecimentosController);

  AcontecimentosController.$inject = ['$scope', '$routeParams', '$firebase', 'FIREBASE_URI'];

  function AcontecimentosController($scope, $routeParams, $firebase, FIREBASE_URI) {

    $scope.FaseId = $routeParams.faseId;
    $scope.Acontecimento = {};

    var ref = new Firebase(FIREBASE_URI);
    var acRef = ref.child('Fases');

    acRef.set({
                1: {

                  Acontecimentos: {

                    1: {

                      Descricao: "Rafael acaba de entrar em seu novo gabinete. Seus próximos passos sao essenciais para o bom funcionamento de seu trabalho. Dentro da verba de gabinete, Rafael precisa contratar assessores para auxilia-lo nos afazeres de todos os dias. Há um limite de 25 pessoas e mínimo de cinco pessoas, que nao necessariamente sao servidores públicos, que ele pode contratar a dedo.",
                      Situacao: "Quem contratar? Como ele está apenas comecando, ele decidiu por contratar o mínimo, e com o tempo contratando outras pessoas caso fosse necessário. Quatro dessas vagas foram já preenchidas por recomendacao, resta uma. Rafael possui alguns candidatos as quais poderiam exercer as funcoes.",
                      Respostas: [{
                          Texto: "Juliana é experiente, e já foi assessora de outros deputados no passado, mas Rafael nao há conhece muito, e durante a entrevista Juliana manifestou ter um temperamento dificil.",
                          ContinuacaoId: 2,
                          Implicacoes: { Reputacao: 0, Dinheiro: 0, Etica: 0 },
                        },
                        {
                          Texto: "Marcelo é primo de Rafael, eles foram muito amigos desde a infância, e Rafael sabe que ele é competente e se adaptaria rápido ao trabalho.",
                          ContinuacaoId: 3,
                          Implicacoes: { Reputacao: 0, Dinheiro: 0, Etica: 0 }
                        },
                        {
                          Texto: "Rômulo é um jovem advogado recém formado que possui muita iniciativa, porém nenhuma experiência.",
                          ContinuacaoId: 4,
                          Implicacoes: { Reputacao: 0, Dinheiro: 0, Etica: 0 }
                        }]

                    }

                  }
                  
                }
          });

    acRef.child('/' + $scope.FaseId + '/Acontecimentos/1').once("value", function(response) {
      $scope.Acontecimento = angular.copy(response.val());
    });

    $scope.RealizaAcao = function(ContinuacaoId){
      acRef.child('/' + $scope.FaseId + '/Acontecimentos/' + $scope.ContinuacaoId).once("value", function(response) {
        $scope.Acontecimento = angular.copy(response.val());
      });
    };

  }


})();