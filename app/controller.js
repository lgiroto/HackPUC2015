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

  MainController.$inject = ['$scope'];


  function MainController($scope ) {

    // 'controller as' syntax
    var self = this;

    $scope.login = function () { 


      var ref = new Firebase("https://boiling-inferno-5866.firebaseio.com");

      var userRef = ref.child('user');

      ref.authWithOAuthPopup("facebook", function(error, authData) {
        if (error) {
          console.log("Login Failed!", error);
        } else {
          console.log("Authenticated successfully with payload:", authData);

          console.log(authData.facebook.cachedUserProfile.id);
          console.log(authData.facebook.cachedUserProfile.name);
          console.log(authData.facebook.cachedUserProfile.gender);
          console.log(authData.facebook.cachedUserProfile.age_range.min);
          console.log(authData.facebook.cachedUserProfile.picture.data.url);

              

        }
      });

  }


}



})();