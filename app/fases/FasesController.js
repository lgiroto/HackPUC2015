
;(function() {

  angular
    .module('boilerplate')
    .controller('FasesController', FasesController);  

  FasesController.$inject = ['$scope', '$firebase', 'FIREBASE_URI', '$location', '$cookies'];

  function FasesController($scope, $firebase, FIREBASE_URI, $location, $cookies) {

    // 'controller as' syntax
    var vm = this;
    $scope.fases = [];
    var ref = new Firebase(FIREBASE_URI);

    var faseRef = ref.child('Fases');

    faseRef.once("value", function(response){

        $scope.fases = angular.copy(response.val());
        $scope.fases = _.reject($scope.fases, function(fase){ return !fase; });
        $scope.$apply();
        
    });

    $scope.action = function(parameterId){
      var user = ref.getAuth();

      if(user != null){
        $scope.IniciarJogo();
        $location.url(parameterId + '/acontecimentos/');
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