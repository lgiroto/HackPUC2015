;(function() {

  angular
    .module('boilerplate')
    .controller('MainController', MainController);

  MainController.$inject = ['$scope', '$rootScope', 'FIREBASE_URI', '$cookies', 'ngDialog', '$location'];


  function MainController($scope, $rootScope, FIREBASE_URI, $cookies, ngDialog, $location) {

    $scope.LeoQuer = function (type) {
   
        $location.url(type + '/fases/');

    }

  }
})();