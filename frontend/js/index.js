document.addEventListener("DOMContentLoaded", function(event) {
    event.preventDefault();

    const signup = document.getElementsByClassName("signup");
    const signin = document.getElementsByClassName("signin");

    if(signin) {
        window.location.href = "login.html";

    }
    if(signup) {
        window.location.href = "signup.html";
    }
})