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

  FasesController.$inject = ['LocalStorage', 'QueryService'];


  function FasesController(LocalStorage, QueryService) {

    // 'controller as' syntax
    var vm = this;

    var ref = new Firebase('https://boiling-inferno-5866.firebaseio.com/');

    ref.set({
      alanisawesome: {
        date_of_birth: "June 2345258, 1912",
        full_name: "Alan Turing"
      },
      gracehop: {
        date_of_birth: "December 9, 1906",
        full_name: "Grace Hopper"
      }
    });
    


  }


})();