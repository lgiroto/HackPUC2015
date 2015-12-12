;(function() {

  angular
    .module('boilerplate')
    .controller('AcontecimentosController', AcontecimentosController);

  AcontecimentosController.$inject = ['$scope', '$routeParams', '$firebase', 'FIREBASE_URI'];

  function AcontecimentosController($scope, $routeParams, $firebase, FIREBASE_URI) {

    $scope.FaseId = $routeParams.faseId;

    var ref = new Firebase(FIREBASE_URI);
    var acRef = ref.child('Acontecimentos');

    acRef.set({
              Id: 1,
              FaseId: 1,
              Descricao: "Rafael acaba de entrar em seu novo gabinete. Seus próximos passos sao essenciais para o bom funcionamento de seu trabalho. Dentro da verba de gabinete, Rafael precisa contratar assessores para auxilia-lo nos afazeres de todos os dias. Há um limite de 25 pessoas e mínimo de cinco pessoas, que nao necessariamente sao servidores públicos, que ele pode contratar a dedo.",
              Situacao: "Quem contratar? Como ele está apenas comecando, ele decidiu por contratar o mínimo, e com o tempo contratando outras pessoas caso fosse necessário. Quatro dessas vagas foram já preenchidas por recomendacao, resta uma. Rafael possui alguns candidatos as quais poderiam exercer as funcoes.",
              Respostas: [{
                Texto: "Juliana é experiente, e já foi assessora de outros deputados no passado, mas Rafael nao há conhece muito, e durante a entrevista Juliana manifestou ter um temperamento dificil.",
                ResolucaoId: 1,
                Implicacoes: { Reputacao: 0, Dinheiro: 0, Etica: 0 },
                },
                {
                Texto: "Marcelo é primo de Rafael, eles foram muito amigos desde a infância, e Rafael sabe que ele é competente e se adaptaria rápido ao trabalho.",
                ResolucaoId: 2,
                Implicacoes: { Reputacao: 0, Dinheiro: 0, Etica: 0 }
                },
                {
                Texto: "Rômulo é um jovem advogado recém formado que possui muita iniciativa, porém nenhuma experiência.",
                ResolucaoId: 3,
                Implicacoes: { Reputacao: 0, Dinheiro: 0, Etica: 0 }
                }]
          });
  }


})();