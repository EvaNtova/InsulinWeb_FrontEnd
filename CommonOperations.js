//version 0.1
function logoutFunction(){
    sessionStorage.setItem("login_status", "Failed");
    window.location.href ="Login_Page.html";
}

function navigateToHomePage(){
    let userType = sessionStorage.getItem("userType");

    if(userType == "ADMIN") window.location.href = "Admin.html";
    else if(userType == "DOCTOR") window.location.href = "#";
    else if(userType == "PATIENT") window.location.href = "Patient_Home_Page.html";
    
}

function successLoginValidation(){
        //return; //For Debug
        var loginStatus = sessionStorage.getItem("login_status");
        if (loginStatus== null || loginStatus == "Failed") window.location.href="Login_Page.html";
    
    
}

function getEndPoint(appRoute){
    return "https://insulinweb.onrender.com" + appRoute;
    //return "http://localhost:5000/" + appRoute;
}

function loadAccesibilityList(){
    successLoginValidation();

    const userType = sessionStorage.getItem("userType");

    if(userType == "PATIENT"){
        var anchors = []
        var links = ["Patient_Home_Page.html" ,  "Patient_Diagrams.html" , "Contact.html" , "Login_page.html"];
        var names = ["Home" ,  "Diagrams"  , "Contact" , "Log out"];

        for( var i=0 ; i<4 ;i++){
            var anchor = document.createElement("a");
            anchor.href = links[i];
            anchor.textContent = names[i];

            anchors.push(anchor);
            if(i == 3){
                anchor.addEventListener('click',(event) =>{
                    event.preventDefault();
                    logoutFunction();
                })
            }

        }
        var unsignedList = document.getElementById("menu");
        anchors.forEach(element => {
            var listElement = document.createElement('li');
            listElement.appendChild(element);
            unsignedList.appendChild(listElement)

        });



    }
    else if(userType == "DOCTOR"){
        var anchors = []
        var links = ["Doctor_Home_Page.html" , "Contact.html" , "Login_page.html"];
        var names = ["Home" , "Contact" , "Log out"];

        for( var i=0 ; i<3 ;i++){
            var anchor = document.createElement("a");
            anchor.href = links[i];
            anchor.textContent = names[i];

            anchors.push(anchor);
            if(i == 2){
                anchor.addEventListener('click',(event) =>{
                    event.preventDefault();
                    logoutFunction();
                })
            }

        }
        var unsignedList = document.getElementById("menu");
        anchors.forEach(element => {
            var listElement = document.createElement('li');
            listElement.appendChild(element);
            unsignedList.appendChild(listElement)

        });



    }
    else return;

    
}

function welcomeMessage(){
    const div = document.getElementById("welcomeMessage");
    const message = localStorage.getItem("message");
    if(message != null){
        div.style.textAlign= "center";
        div.innerHTML = '<h2>' + message +'</h2>';
    }

}
