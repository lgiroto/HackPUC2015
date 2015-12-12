
;(function() {

  angular
    .module('boilerplate')
    .controller('FasesController', FasesController);  

  FasesController.$inject = ['$scope', '$firebase', 'FIREBASE_URI', '$location'];

  function FasesController($scope, $firebase, FIREBASE_URI, $location) {

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
        $location.url(parameterId + '/acontecimentos/');
    };

  }

  
})();