/**
 * Main application controller
 *
 * You can use this controller for your whole app if it is small
 * or you can have separate controllers for each logical section
 * 
 */

 var Firebase = require("firebase");


;(function() {

  angular
    .module('boilerplate')
    .controller('FasesController', FasesController);

  FasesController.$inject = ['$firebase', 'FIREBASE_URI'];


  function FasesController($firebase, FIREBASE_URI) {

    // 'controller as' syntax
    var vm = this;

    var ref = new Firebase(FIREBASE_URI);

    ref.set({
            users: {
              mchen: {
                friends: { "brinchen": true },
                name: "Mary Chen",
                widgets: { "one": true, "three": true }
              }
            }
          });
  }


})();