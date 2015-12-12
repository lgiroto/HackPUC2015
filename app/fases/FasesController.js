/**
 * Main application controller
 *
 * You can use this controller for your whole app if it is small
 * or you can have separate controllers for each logical section
 * 
 */
;(function() {

  angular
    .module('boilerplate')
    .controller('FasesController', FasesController);

  FasesController.$inject = ['$scope', '$firebase', 'FIREBASE_URI'];


  function FasesController($scope, $firebase, FIREBASE_URI) {

    // 'controller as' syntax
    var vm = this;

    console.log('teste');

    $scope.teste = "teste";

    var ref = new Firebase(FIREBASE_URI);
  }


})();