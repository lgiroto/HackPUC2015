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

          userRef.push({
          name: authData.facebook.cachedUserProfile.name,
          gender: authData.facebook.cachedUserProfile.gender,
          age: authData.facebook.cachedUserProfile.age_range.min,
          picture: authData.facebook.cachedUserProfile.picture.data.url 
          });

        }
      });

  }


}



})();