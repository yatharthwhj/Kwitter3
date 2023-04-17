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
           
    user_name =localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
    
     function addroom()
     {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name" });
      localStorage.setItem("room_name", room_name);
      window.location="kwitter_page.html";
     }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      
console.log("Room Name - " + Room_names)
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
      });});}
getData();

function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html"; 
}
function logout() 
{
localStorage.removeItem("user_name"); 
localStorage.removeItem("room_name"); 
window.location = "index.html"; }
