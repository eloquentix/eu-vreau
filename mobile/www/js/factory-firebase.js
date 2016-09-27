angular.module('euvreau.services.firebase', [])

.factory('Firebase',

  function() {

    var inst = create();

    return ({
      Instance: function() { return inst; }
    });

    function create() {
      var config = {
        apiKey: "AIzaSyCzB23NUkwRyCoYgignAfb8gk_otF64wjI",
        authDomain: "eu-vreau.firebaseapp.com",
        databaseURL: "https://eu-vreau.firebaseio.com",
        storageBucket: "eu-vreau.appspot.com",
        messagingSenderId: "797905745830"
      };

      firebase.initializeApp(config);
      return firebase.database();
    }
  });
