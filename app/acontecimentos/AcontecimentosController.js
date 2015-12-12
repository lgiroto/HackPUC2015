
;(function() {

  angular
    .module('boilerplate')
    .controller('AcontecimentosController', AcontecimentosController);

  AcontecimentosController.$inject = ['$scope', '$routeParams', '$firebase', 'FIREBASE_URI', '$cookies'];

  function AcontecimentosController($scope, $routeParams, $firebase, FIREBASE_URI, $cookies) {

    $scope.FaseId = $routeParams.faseId;
    $scope.Estatisticas = null;
    $scope.Acontecimento = {};
    $scope.FazendoRequest = true;

    var ref = new Firebase(FIREBASE_URI);
    var acRef = ref.child('Fases');
    var estRef = ref.child('Estatisticas');
    var StatsId = $cookies.get('StatsId');

    acRef.set({
                1: {

                  Img: 'something1',

                  Nome: 'Fase 1',

                  Descricao: 'Lorem Ipsum Dolor Sit Amet',

                  Acontecimentos: {

                    1: {

                      Descricao: "Rafael acaba de entrar em seu novo gabinete. Seus próximos passos sao essenciais para o bom funcionamento de seu trabalho. Dentro da verba de gabinete, Rafael precisa contratar assessores para auxilia-lo nos afazeres de todos os dias. Há um limite de 25 pessoas e mínimo de cinco pessoas, que nao necessariamente sao servidores públicos, que ele pode contratar a dedo.",
                      Situacao: "Quem contratar? Como ele está apenas comecando, ele decidiu por contratar o mínimo, e com o tempo contratando outras pessoas caso fosse necessário. Quatro dessas vagas foram já preenchidas por recomendacao, resta uma. Rafael possui alguns candidatos as quais poderiam exercer as funcoes.",
                      Respostas: [{
                          Texto: "Juliana é experiente, e já foi assessora de outros deputados no passado, mas Rafael nao há conhece muito, e durante a entrevista Juliana manifestou ter um temperamento dificil.",
                          ContinuacaoId: 2,
                          Implicacoes: { Reputacao: 0, Dinheiro: 0, Corrupcao: 5 },
                        },
                        {
                          Texto: "Marcelo é irmao de Rafael, eles sao muito próximos, e Rafael sabe que ele é competente e se adaptaria rápido ao trabalho.",
                          ContinuacaoId: 2,
                          Implicacoes: { Reputacao: 0, Dinheiro: 0, Corrupcao: 0 }
                        },
                        {
                          Texto: "Rômulo é um jovem advogado recém formado que possui muita iniciativa, porém nenhuma experiência.",
                          ContinuacaoId: 2,
                          Implicacoes: { Reputacao: 0, Dinheiro: 0, Corrupcao: 0 }
                        }]

                    },

                    2: {

                      Descricao: "Rafael está visando um projeto de lei, sendo um novato, ele gostaria de aconselhamento de alguém mais experiente. Durante uma assembléia, Rafael conheceu outros deputados, e alguns deles se mostraram favoráveis as suas propostas. Um em particular, que está de férias, propôs um encontro, porém este estará em Recife no período que Rafael está disponível.",
                      Situacao: "Esta reuniao, apesar de ser a respeito de trabalho, e nao tem cunho oficial. O gabinete de Rafael nao está usufruindo nem com metade de toda a verba disponível.",
                      Respostas: [{
                          Texto: "Rafael usa parte da verba de gabinete para pagar sua viagem e a classifica como atividade parlamentar.",
                          ContinuacaoId: 3,
                          Implicacoes: { Reputacao: 0, Dinheiro: 0, Corrupcao: 0 },
                        },
                        {
                          Texto: "Rafael arca com as despesas da sua viagem.",
                          ContinuacaoId: 3,
                          Implicacoes: { Reputacao: 0, Dinheiro: 0, Corrupcao: 0 }
                        },
                        {
                          Texto: "Rafael decide nao encontrar com o deputado.",
                          ContinuacaoId: 3,
                          Implicacoes: { Reputacao: 0, Dinheiro: 0, Corrupcao: 0 }
                        }]

                    }

                  }
                  
                }
          });

    estRef.child('/' + StatsId).on("value", function(response) {
      $scope.Estatisticas = angular.copy(response.val());
      $scope.$apply();
    });

    acRef.child('/' + $scope.FaseId + '/Acontecimentos/1').once("value", function(response) {
      $scope.Acontecimento = angular.copy(response.val());
      $scope.FazendoRequest = false;
    });

    $scope.RealizaAcao = function(Resposta){
      $scope.FazendoRequest = true;
      $scope.Acontecimento = {};

      acRef.child('/' + $scope.FaseId + '/Acontecimentos/' + Resposta.ContinuacaoId).once("value", function(response) {
        $scope.Acontecimento = angular.copy(response.val());
        $scope.FazendoRequest = false;
        $scope.$apply();
      });

      var Estatisticas = estRef.child(StatsId);
      Estatisticas.update({
        "Corrupcao": $scope.Estatisticas.Corrupcao + Resposta.Implicacoes.Corrupcao,
        "Dinheiro": $scope.Estatisticas.Dinheiro + Resposta.Implicacoes.Dinheiro,
        "Reputacao": $scope.Estatisticas.Reputacao + Resposta.Implicacoes.Reputacao
      });
    };

  }


})();