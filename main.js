const firebaseConfig = {
    apiKey: "AIzaSyDW3bRP8743Qjpcc0ujxGepFei7JP7BNbQ",
    authDomain: "let-us-chat-9fa8d.firebaseapp.com",
    projectId: "let-us-chat-9fa8d",
    storageBucket: "let-us-chat-9fa8d.appspot.com",
    messagingSenderId: "752434301128",
    appId: "1:752434301128:web:b74f9a3807016478217dfd"
  };

  firebase.initializeApp(firebaseConfig);

function Adduser() {

    window.location = "AfterLoginRoom.html";

    localStorage.setItem("UserName",UserName);

    UserName = document.getElementById("UserName").value;
    
    firebase.database().ref("/").child(UserName).update({

        purpose : " Make Stuff "

    });
    
}