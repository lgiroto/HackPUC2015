;(function() {

  angular
    .module('boilerplate')
    .controller('MainController', MainController);

  MainController.$inject = ['$scope', '$rootScope', 'FIREBASE_URI', '$cookies', 'ngDialog'];

  function MainController($scope, $rootScope, FIREBASE_URI, $cookies, ngDialog) {

    $scope.firstscreen = true;
    $scope.secondscreen = false;

    var ref = new Firebase(FIREBASE_URI);
    var UserInfoRef = new Firebase(FIREBASE_URI + '/UserInfo');
    $scope.LoginSelectedOption = 0;

    $scope.ChangeLoginOptions = function(Option) {
      
      ngDialog.open({
          template: 'LoginDialog',
          controller: ['$scope',  function ($scope) {
          
            $scope.LoginSelectedOption = Option;
            $scope.CadastroManual = function(Email, Senha, NomeCompleto, DataNascimento) {
              ref.createUser({
                email    : Email,
                password : Senha
              }, function(error, userData) {
                if (error) {
                  // to do: tratar erro na interface
                  console.log("Error creating user:", error);
                  switch(error.code){
                    case "EMAIL_TAKEN":
                      alertify.error("E-mail já cadastrado!");
                      break;
                  }
                } else {
                    var newProfileObj = {};
                    newProfileObj[userData.uid] = {
                      NomeCompleto: NomeCompleto,
                      DataNascimento: DataNascimento
                    };
                    UserInfoRef.push(newProfileObj);
                }
              });
            };

            $scope.LoginManual = function (Email, Senha) {
              ref.authWithPassword({
                email    : Email,
                password : Senha
              }, function(error, authData) {
                if (error) {
                  switch(error.code){
                    case "INVALID_USER":
                      alertify.error("Usuário inválido");
                      break;
                    case "INVALID_PASSWORD":
                      alertify.error("Senha inválida");
                      break;
                  }
                } else {
                  alertify.success("Bem-vindo!");
                  ngDialog.close();
                }
              });
            };

            

            $scope.Voltar = function() {
              $scope.LoginSelectedOption = 0;
            }

            $scope.Fechar = function () {
              ngDialog.close();
            };
        }]
      });
    };

    $scope.FacebookLogin = function () { 
      ref.authWithOAuthPopup("facebook", function(error, authData) {
        if (error) {
          // to do: tratar erro na interface
          console.log("Login Failed!", error);
        }

       /*userRef.orderByChild("login").equalTo(authData.facebook.cachedUserProfile.id).on("child_added", function (response){
         var userExists = response.exists();
         if(!userExists) {
            var newProfileObj = {};
            newProfileObj[userData.uid] = {
              NomeCompleto: NomeCompleto,
              DataNascimento: DataNascimento
            };
            UserInfoRef.push(newProfileObj);

             var login = userRef.push({
                 login: authData.facebook.cachedUserProfile.id,
                 password: authData.facebook.cachedUserProfile.id,
                 name: authData.facebook.cachedUserProfile.name,
                 age: authData.facebook.cachedUserProfile.age_range.min
             });
          }
        });*/
      });
    };

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
  }
})();