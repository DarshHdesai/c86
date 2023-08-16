
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
      apiKey: "AIzaSyAYLOGrtYVRk53nO16fdVlJsDvQTA-A0kM",
      authDomain: "class94-be200.firebaseapp.com",
      projectId: "class94-be200",
      storageBucket: "class94-be200.appspot.com",
      messagingSenderId: "243323344195",
      appId: "1:243323344195:web:bda8f28b5402545986cbf6",
      measurementId: "G-78M06MQG3D"
    };

    function getData (){firebase.database().ref("/").on('value', function(snapshot){ document.getElementById("output").innerHTML;

    Room_names = childKey;
    
    console.log("Room Name - " + Room_Names);
    row = "div class='room_name' id="+Room_Names+" onclick='redirectToRoomName(this.id)' >#"+Room_names +"</div><hr>";
    document.getElementById("output").innerHTML += row;
    });}

getData();
 function addUser()
 {
      user_name = document.getElementById("user_name").value;
   firebase.databasea().ref("/").child(user_name).update({
      purpose :"adding user"
   });
     
   

 }
 function addRoom()
{
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
         purpose : "adding room name"
    });

    localStorage.setItem("room_name" , room_name);
    window.location = "kwitter_page.html";
}
 
function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}
function logout()
{
  localStorage.removeItem("user_nmae");
  localStorage.removeItem("room_name");
  window.location = "kwitter_room.html";

}
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
