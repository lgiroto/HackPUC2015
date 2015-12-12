var Firebase = require("firebase");


var ref = new Firebase('https://boiling-inferno-5866.firebaseio.com/');

ref.set({
  alanisawesome: {
    date_of_birth: "June 23, 1912",
    full_name: "Alan Turing"
  },
  gracehop: {
    date_of_birth: "December 9, 1906",
    full_name: "Grace Hopper"
  }
});








