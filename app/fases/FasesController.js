
;(function() {

  angular
    .module('boilerplate')
    .controller('FasesController', FasesController);  

  FasesController.$inject = ['$scope', '$firebase', 'FIREBASE_URI'];

  var TypeEnum = {
  CIVIL : 'Político',
  POLITICIAN: 'Civil'
};

  function FasesController($scope, $firebase, FIREBASE_URI) {

    // 'controller as' syntax
    var vm = this;

    var ref = new Firebase(FIREBASE_URI);

    var faseRef = ref.child('fases');

    faseRef.set({
          pessoa: {
            name: "Amanda",
            type: TypeEnum.POLITICIAN,
            age: 12,
            profession: "Engenheiro"
          }
    });

  }

  
})();