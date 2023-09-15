const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const d = new Date();
let day = weekday[d.getDay()];
document.getElementById("day").innerHTML = day;
document.getElementById("date").innerHTML = d.getDate() + "/" + d.getMonth() + "/" + d.getFullYear();

feather.replace()

var currentTime = new Date().getHours();
var greeting;
if (currentTime >= 5 && currentTime < 12) {
    greeting = "Hello 👏 Good morning 🌄";
} else if (currentTime >= 12 && currentTime < 17) {
    greeting = "Hello 👏 Good afternoon 🌇";
} else if (currentTime >= 17 && currentTime < 21) {
    greeting = "Hello 👏 Good evening 🌆";
} else {
    greeting = "Hello 👏 Good night🌃";
}
document.getElementById("say").textContent = greeting;


