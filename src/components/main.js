import "../css/style.scss";
import navbar from "./navBar.html?raw";
import footer from "./footer.html?raw";

document.querySelector("#navbar").innerHTML = navbar;
document.querySelector("#footer").innerHTML = footer;

// Change theme color
var changeTheme = document.querySelector(".changeTheme");
const mainHtml = document.querySelector("html");

changeTheme.addEventListener("change", function () {
    if (!this.checked) {
        mainHtml.dataset.theme = "themeDark";
    } else {
        mainHtml.dataset.theme = "themeLight";
    }
});

// Change color  in menu for active section

var lista = document.getElementById("navBar");
var elementos = lista.getElementsByTagName("li");

for (var i = 0; i < elementos.length - 1; i++) {
    var enlace = elementos[i].getElementsByTagName("a")[0];
    if (enlace.getAttribute("href") === window.location.pathname) {
        elementos[i].classList.add("active-section");
    }
}
