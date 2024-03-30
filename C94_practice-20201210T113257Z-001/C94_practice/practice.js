
//ADD YOUR FIREBASE LINKS
const firebaseConfig = {
    apiKey: "AIzaSyAbcgHIXWBpu89-cx3j2qVmNC7iQZ4pbEM",
    authDomain: "kwitterwebapp-83789.firebaseapp.com",
    databaseURL: "https://kwitterwebapp-83789-default-rtdb.firebaseio.com",
    projectId: "kwitterwebapp-83789",
    storageBucket: "kwitterwebapp-83789.appspot.com",
    messagingSenderId: "483867410770",
    appId: "1:483867410770:web:07a4e598218bb6b7d63a8b"
  };
firebase.initializeApp(firebaseConfig);

function addUser(){

    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "Adding User"
    });
}