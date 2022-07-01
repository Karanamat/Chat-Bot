
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDoo4rBeMt_N0fQ7dZ5S83_uIALgIpawr0",
  authDomain: "chat-bot-26958.firebaseapp.com",
  projectId: "chat-bot-26958",
  storageBucket: "chat-bot-26958.appspot.com",
  messagingSenderId: "241646415653",
  appId: "1:241646415653:web:f073d50b9a88ef17e7f4cc",
  measurementId: "G-BPE0FD5P34"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    /*
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    */
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
}



