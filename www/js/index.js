/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//listeners
var registerbutton = document.getElementById("registerbutton");
if(registerbutton) {
    registerbutton.addEventListener("click",registerbutton_click);
}

//-------------------------------
var password1 = document.getElementById("password_1");
if(password1) {
    password1.addEventListener('input', event => {
        event.preventDefault();
        var password = document.getElementById("password").value;
        var password1 = document.getElementById("password_1").value;
        var errorMessage = document.getElementById('dbresponse');

        if(password && password1 && (password === password1)) {
            document.getElementById("dbresponse").innerHTML = ' ';
            registerbutton.classList.remove('disabled');
        } else {
            document.getElementById("dbresponse").innerHTML = ' ';
            errorMessage.innerHTML += 'Ο κωδικός πρόσβασης και ο κωδικός επιβεβαίωσης πρέπει να είναι οι ίδιοι.';

        }
    });
}

function registerbutton_click(){
    var username = document.getElementById("username").value.toString();
    var email = document.getElementById("email").value.toString();
    var password= document.getElementById("password").value.toString();
    //window.alert(username+" "+email+" "+password);

    var request = new XMLHttpRequest();
    request.onreadystatechange= function(){
       if (this.readyState === 4 && this.status === 200){
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

    var username = document.getElementById("signusername").value.toString();
    var password= document.getElementById("signpassword").value.toString();
    //window.alert(username+"  "+password);

    var request = new XMLHttpRequest();
    request.onreadystatechange= function(){
       if (this.readyState === 4 && this.status === 200){
           msg=this.responseText;
           if(msg == 1){
               window.localStorage.setItem('username',username);
               window.location.href="chooseCategory.html";
           }
           else{
               window.alert("Δεν βρέθηκε ο συγκεκριμένος χρήστης...");
           }
       }
    };

    request.open("GET","https://neatecologicalapp.000webhostapp.com/login.php?username="+username+'&password='+password,true);
    request.send();
}


function signout(){
    window.localStorage.removeItem('id');
    window.localStorage.removeItem('username');
    window.localStorage.removeItem('email');
    window.localStorage.removeItem('user_type');
    window.localStorage.removeItem('level1');
    window.localStorage.removeItem('point1');
     window.localStorage.removeItem('level2');
    window.localStorage.removeItem('point2');
     window.localStorage.removeItem('level3');
    window.localStorage.removeItem('point3');
     window.localStorage.removeItem('level4');
    window.localStorage.removeItem('point4');
    
}

function setParam(x){
    window.localStorage.setItem('categ', x);
}

