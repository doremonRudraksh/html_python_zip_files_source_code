const firebaseConfig = {
      apiKey: "AIzaSyAbcgHIXWBpu89-cx3j2qVmNC7iQZ4pbEM",
      authDomain: "kwitterwebapp-83789.firebaseapp.com",
      databaseURL: "https://kwitterwebapp-83789-default-rtdb.firebaseio.com",
      projectId: "kwitterwebapp-83789",
      storageBucket: "kwitterwebapp-83789.appspot.com",
      messagingSenderId: "483867410770",
      appId: "1:483867410770:web:07a4e598218bb6b7d63a8b"
    };
    
    // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
    
user_name = localStorage.getItem("user_name")
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom(){
      room_name = document.getElementById("room_name").value;
      
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });

      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";

}

//ADD YOUR FIREBASE LINKS HERE


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Names -" + Room_names );
      row = "<div id= "+ Room_names + " class='room_name' onclick='redirectToRoomName(this.id)'>#"+Room_names+"  </div> <hr>"; 
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(room){
      console.log(room);
      localStorage.setItem("room_name", room);
      window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");

      window.location = "index.html";
}

function getRoomName(){
     room_name = localStorage.getItem("room_name");
     document.getElementById("kwitter").innerHTML = room_name;
}
