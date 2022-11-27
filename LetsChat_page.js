var firebaseConfig = {
    apiKey: "AIzaSyBFtVn-iRZk4XESz14IJAmiXxwuuuAxjE8",
    authDomain: "project-94-3a6c6.firebaseapp.com",
    databaseURL: "https://project-94-3a6c6-default-rtdb.firebaseio.com",
    projectId: "project-94-3a6c6",
    storageBucket: "project-94-3a6c6.appspot.com",
    messagingSenderId: "561790441899",
    appId: "1:561790441899:web:a8b82b3bf8065704b7daee"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();

function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });

    document.getElementById("msg").value = "";
}
