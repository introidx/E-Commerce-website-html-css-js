// js for toggle form
var LoginForm = document.getElementById("LoginForm");
var RegForm = document.getElementById("RegForm");
var indicator = document.getElementById("indicator");

function register() {
  RegForm.style.transform = "translateX(0px)";
  LoginForm.style.transform = "translateX(0px)";
  indicator.style.transform = "translateX(100px)";
}

function login() {
  RegForm.style.transform = "translateX(300px)";
  LoginForm.style.transform = "translateX(300px)";
  indicator.style.transform = "translateX(0px)";
}

// JS for Toggle menu 
var MenuItems = document.getElementById("MenuItems");

    MenuItems.style.maxHeight = "0px";

    function menutoggle() {
      if (MenuItems.style.maxHeight == "0px") {
        MenuItems.style.maxHeight = "200px";
      } else {
        MenuItems.style.maxHeight = "0px";
      }
    }