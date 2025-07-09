  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
  import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
  } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";

  var firebaseConfig = {
    apiKey: "AIzaSyAaZIn5-XB_4GFfIAXXyHpCDd6YJ9Mlb1I",
    authDomain: "march-a594a.firebaseapp.com",
    projectId: "march-a594a",
    storageBucket: "march-a594a.firebasestorage.app",
    messagingSenderId: "804416833183",
    appId: "1:804416833183:web:8d43a0f7758279aa4c04aa"
  };

  var app = initializeApp(firebaseConfig);
  var auth = getAuth(app);

  var signupBtn = document.getElementById("signup");
  signupBtn.onclick = function() {
    var email = document.getElementById("email").value;
    var pass = document.getElementById("password").value;
    createUserWithEmailAndPassword(auth, email, pass).then(function() {
      alert("signed up");
    }).catch(function(e) {
      alert("nope: " + e.message);
    });
  }

  var loginBtn = document.getElementById("login");
  loginBtn.onclick = function() {
    var email = document.getElementById("email").value;
    var pass = document.getElementById("password").value;
    signInWithEmailAndPassword(auth, email, pass).then(function() {
      alert("logged in");
    }).catch(function(e) {
      alert("fail: " + e.message);
    });
  }

  var logoutBtn = document.getElementById("logout");
  logoutBtn.onclick = function() {
    signOut(auth).then(function() {
      alert("logged out");
    });
  }

  onAuthStateChanged(auth, function(user) {
    var status = document.getElementById("status");
    if (user) {
      status.innerHTML = "hi " + user.email;
    } else {
      status.innerHTML = "not in";
    }
  });
