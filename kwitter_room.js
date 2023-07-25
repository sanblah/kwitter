
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyBBhgTfG4ZHT22-tY30ebbz78hJJVFdZs8",
      authDomain: "qwiiiittter.firebaseapp.com",
      databaseURL: "https://qwiiiittter-default-rtdb.firebaseio.com",
      projectId: "qwiiiittter",
      storageBucket: "qwiiiittter.appspot.com",
      messagingSenderId: "451187452523",
      appId: "1:451187452523:web:b929cfef1030100fb19f2e"
    };
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location = "kwitter_page.html"
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room name - "+ Room_names);
      row = "<div class='room_name' id = "+Room_names+" onclick = 'redirectToRoomName(this.id)'> #"+Room_names+"</div><hr>"
      document.getElementById("output").innerHTML += row
      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location = "kwitter_page.html"
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

