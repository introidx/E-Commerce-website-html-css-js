// < !--JS for Toggle menu-- >
var MenuItems = document.getElementById("MenuItems");

MenuItems.style.maxHeight = "0px";

function menutoggle() {
    if (MenuItems.style.maxHeight == "0px") {
        MenuItems.style.maxHeight = "200px";
    } else {
        MenuItems.style.maxHeight = "0px";
    }
}

// copyright section change by year
let copyrightElem = document.getElementById('copyright-text');
let currentYear = new Date().getFullYear()
let fullText = `Copyright ${currentYear} - introidx`;
copyrightElem.innerText = fullText;