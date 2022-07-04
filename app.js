function next(){
    username=document.getElementById("username").value;
    if(username==""){
        document.getElementById("user").innerHTML="please fill the username";
        document.getElementById("user").style.color="red";
    }
    else{
            localStorage.setItem("username",username);
            window.location="mainpage.html";
    }
}
