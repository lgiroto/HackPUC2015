/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Main application controller
	 *
	 * You can use this controller for your whole app if it is small
	 * or you can have separate controllers for each logical section
	 * 
	 */
	 var Firebase = new __webpack_require__(2)("firebase");

	;(function() {

	  angular
	    .module('boilerplate')
	    .controller('FasesController', FasesController);  

	  FasesController.$inject = ['$scope', '$firebase', 'FIREBASE_URI'];

	  var TypeEnum = {
	  CIVIL : 'Político',
	  POLITICIAN: 'Civil'
	};

	  function FasesController($scope, $firebase, FIREBASE_URI) {

	    // 'controller as' syntax
	    var vm = this;

	    console.log('teste');

	    $scope.teste = "teste";

	    var ref = new Firebase(FIREBASE_URI);

	    var userRef = ref.child('users');
	    var pintoRef = ref.child('pintos');

	    var faseRef = ref.child('fases');

	    userRef.set({
	              amanda: {
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

	    faseRef.set({
	          Hue: {
	            name: "Leonardo",
	            type: TypeEnum.POLITICIAN,
	            age: 12,
	            profession: "Engenheiro"
	          }
	    });
	  }

	  
	})();

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./FasesController": 1,
		"./FasesController.js": 1
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 2;


/***/ }
/******/ ]);