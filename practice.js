const firebaseConfig = {
    apiKey: "AIzaSyB4c_XsGWkpX-MwRTmUCoTlcG4I5Y942zU",
    authDomain: "kwitter-43aeb.firebaseapp.com",
    databaseURL: "https://kwitter-43aeb-default-rtdb.firebaseio.com",
    projectId: "kwitter-43aeb",
    storageBucket: "kwitter-43aeb.appspot.com",
    messagingSenderId: "1000799773137",
    appId: "1:1000799773137:web:3dbd12e5e1010836cfc0f0"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function adduser() {
    user_name=document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
    purpose:"add user"
  });
}