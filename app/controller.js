;(function() {

  angular
    .module('boilerplate')
    .controller('MainController', MainController);

  MainController.$inject = ['$scope', '$rootScope', 'FIREBASE_URI', '$cookies', 'ngDialog'];


  function MainController($scope, $rootScope, FIREBASE_URI, $cookies, ngDialog) {

    var ref = new Firebase(FIREBASE_URI);

    $scope.FazerLogin = function() {
      ngDialog.open({
          template: 'LoginDialog',
          controller: ['$scope',  function ($scope) {
                        $scope.Fechar = function () {
                          ngDialog.close();
                        };
                    }]
      });
    };

    $scope.FacebookLogin = function () { 

      var userRef = ref.child('user');
       ref.authWithOAuthPopup("facebook", function(error, authData) {
         if (error) {
          // to do: tratar erro na interface
           console.log("Login Failed!", error);
         }

         userRef.orderByChild("login").equalTo(authData.facebook.cachedUserProfile.id).on("child_added", function (response){
           var userExists = response.exists();
           /* Valida se o cadastro nao ja foi feito */
           if(!userExists) {
               var login = userRef.push({
                   login: authData.facebook.cachedUserProfile.id,
                   password: authData.facebook.cachedUserProfile.id,
                   name: authData.facebook.cachedUserProfile.name,
                   age: authData.facebook.cachedUserProfile.age_range.min
               });
               $cookies.put('UserId', login.key());
           } else{
              // pegar ele da base
             //$cookies.put('UserId', login.key());
           }
         });
      });

       $scope.Jogar = function () {
          var estRef = ref.child('Estatisticas');
          var stats = estRef.push({
                  Reputacao: 0,
                  Dinheiro: 0.5,
                  Corrupcao: 0,
                  Completo: 0,
                  MissoesCompletas: 0
            });
          $cookies.put('StatsId', stats.key());
       };

    };
  }
})();