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
    .controller('MainController', MainController);

  MainController.$inject = ['$scope', '$rootScope', 'FIREBASE_URI', '$cookies'];


  function MainController($scope, $rootScope, FIREBASE_URI, $cookies) {

    var ref = new Firebase(FIREBASE_URI);

    $scope.login = function () { 

      var userRef = ref.child('user');
      ref.authWithOAuthPopup("facebook", function(error, authData) {
        if (error) {
          console.log("Login Failed!", error);
        } else {
          console.log("Authenticated successfully with payload:", authData);

          var login = userRef.push({
            name: authData.facebook.cachedUserProfile.name,
            gender: authData.facebook.cachedUserProfile.gender,
            age: authData.facebook.cachedUserProfile.age_range.min,
            picture: authData.facebook.cachedUserProfile.picture.data.url 
          });
          $cookies.put('UserId', login.key());

          var estRef = ref.child('Estatisticas');
          var stats = estRef.push({
                  Reputacao: 0,
                  Dinheiro: 0.5,
                  Corrupcao: 0,
                  Completo: 0,
                  MissoesCompletas: 0
            });
          $cookies.put('StatsId', stats.key());
        }
      });

    };
}



})();