;(function() {

  angular
    .module('boilerplate')
    .controller('FasesController', FasesController);  

  FasesController.$inject = ['$scope', '$firebase', 'FIREBASE_URI', '$location', '$cookies', '$routeParams'];

  function FasesController($scope, $firebase, FIREBASE_URI, $location, $cookies, $routeParams) {
    var TipoId = $routeParams.tipoId;
    var ref = new Firebase(FIREBASE_URI);
    $scope.FazendoRequest = true;

    var faseRef = ref.child('Fases');

    faseRef.child('/' + TipoId).on('value', function(response){
        $scope.fase = response.val();
        $scope.FazendoRequest = false;
        $scope.$apply();
    });

    $scope.action = function(){
      var user = ref.getAuth();

      if(user != null){
        $scope.IniciarJogo();
        $location.url(TipoId + '/acontecimentos/');
      }
      else
        alertify.error('Por favor, faça Login');
    };

    $scope.IniciarJogo = function () {
      var estRef = ref.child('Estatisticas');
      var stats = estRef.push({
              Reputacao: 50,
              SituacaoFinanceira: 3,
              Corrupcao: 0,
              Completo: 0,
              MissoesCompletas: 0
        });
      $cookies.put('StatsId', stats.key());
    };

  };
  
})();