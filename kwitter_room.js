
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDgyCkyknKbCpEROqPNqbeE7PvhWzgrrjs",
      authDomain: "kwitter-studentactivity.firebaseapp.com",
      databaseURL: "https://kwitter-studentactivity-default-rtdb.firebaseio.com",
      projectId: "kwitter-studentactivity",
      storageBucket: "kwitter-studentactivity.appspot.com",
      messagingSenderId: "420512122362",
      appId: "1:420512122362:web:cd83aab9d846dd11795043"
    };
    
    // Initialize Firebase
firbase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + " !!! ";

function addroom(){
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room_names");
row = "<div class = 'room_name' id = "+ Room_names +" onlcick = 'redirectToRoomName(this.id)'> #"+ Room_names +" </div><hr>";
document.getElementById("output").innerHTML += row;

      });});}
getData();
 
 function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
 }

 function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter_login.html";
 }
