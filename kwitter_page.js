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
user_name=localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
function send() { msg = document.getElementById("msg").value;
 firebase.database().ref(room_name).push({ name:user_name, message:msg, like:0 });
 document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; 
snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; 
childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;


      } });  }); }
getData();
function logout() 
{
localStorage.removeItem("user_name"); 
localStorage.removeItem("room_name"); 
window.location = "index.html"; 
}