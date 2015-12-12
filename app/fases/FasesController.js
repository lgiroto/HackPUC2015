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

  var TypeEnum = {
  CIVIL : 'Político',
  POLITICIAN: 'Civil'
};

  function FasesController($firebase, FIREBASE_URI) {

    // 'controller as' syntax
    var vm = this;

    var ref = new Firebase(FIREBASE_URI);

    var userRef = ref.child('users');
    var pintoRef = ref.child('pintos');

    var faseRef = ref.child('fases');

    userRef.set({
              mchen: {
                friends: { "brinchen": true },
                name: "Mary Chen",
                widgets: { "one": true, "three": true }
              }
          });

    pintoRef.set({
              pintoso: {
                friends: { "brinchen": true },
                name: "Mary Chen",
                widgets: { "one": true, "three": true }
              }
          });

    faseRef.set({
          pessoa: {
            name: "Leonardo",
            type: TypeEnum.POLITICIAN,
            age: 12,
            profession: "Engenheiro"
          }
    });
  }

  
})();