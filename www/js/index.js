/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//listeners
var registerbutton = document.getElementById("registerbutton");
registerbutton.addEventListener("click",registerbutton_click);

//-------------------------------


function registerbutton_click(){
var username = document.getElementById("username").value.toString();
var email = document.getElementById("email").value.toString();
var password= document.getElementById("password").value.toString();
//window.alert(username+" "+email+" "+password);

var request = new XMLHttpRequest();
request.onreadystatechange= function(){
   if (this.readyState == 4 && this.status == 200){
       document.getElementById("dbresponse").innerHTML = this.responseText;
   }
   else{
       document.getElementById("dbresponse").innerHTML = "Oops! Something went really bad...";
   }
};

request.open("GET","https://neatecologicalapp.000webhostapp.com/createuser.php?username="+username+'&email='+email+'&password='+password,true);
request.send();

}

function signButton_click(){
    //window.alert("YESSSS");
    
var username = document.getElementById("signusername").value.toString();
var password= document.getElementById("signpassword").value.toString();
//window.alert(username+"  "+password);

var request = new XMLHttpRequest();
request.onreadystatechange= function(){
   if (this.readyState === 4 && this.status === 200){
       msg=this.responseText;
       if(msg == 1){
           window.location.href="profile.html";
       }
       else{
           window.alert("User not found...");
       }
   }
};

request.open("GET","https://neatecologicalapp.000webhostapp.com/login.php?username="+username+'&password='+password,true);
request.send();
    

}
