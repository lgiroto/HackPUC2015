;(function() {

  angular
    .module('boilerplate')
    .controller('MainController', MainController);

  MainController.$inject = ['$scope', '$rootScope', 'FIREBASE_URI', '$cookies', 'ngDialog', '$location'];


  function MainController($scope, $rootScope, FIREBASE_URI, $cookies, ngDialog, $location) {

    $scope.firstscreen = true;
    $scope.secondscreen = false;

$scope.avancar = function(){
      if($scope.firstscreen){
        $scope.firstscreen = false;  
      }
      else{
        $scope.firstscreen = true; 
      }
      
      if($scope.secondscreen){
        $scope.secondscreen = false;
      }
      else{
        $scope.secondscreen = true;
      }
    }
    $scope.LeoQuer = function (type) {
   
        $location.url(type + '/fases/');

    }
  }
})();