
var Firebase = require("firebase");
;(function() {

  angular
    .module('boilerplate')
    .controller('FasesController', FasesController);  

  FasesController.$inject = ['$scope', '$firebase', 'FIREBASE_URI', '$location'];

  var TypeEnum = {
  CIVIL : 'Político',
  POLITICIAN: 'Civil'
};

  function FasesController($scope, $firebase, FIREBASE_URI, $location) {

    // 'controller as' syntax
    var vm = this;

    var ref = new Firebase(FIREBASE_URI);

    var faseRef = ref.child('fases');

    faseRef.set({
          pessoa: {
            name: "Leonardo",
            type: TypeEnum.POLITICIAN,
            age: 12,
            profession: "Engenheiro"
          }
    });

    $scope.fases = [
      {id: 1, nome: "tadeu", img: "imagem"},
      {id: 29, nome: "leo", img: "imagem"},
      {id: 32, nome: "sams", img: "imagem"}
    ];

    $scope.action = function(parameterId){
      $location.url(parameterId + '/acontecimentos/');
    };

  }

  
})();