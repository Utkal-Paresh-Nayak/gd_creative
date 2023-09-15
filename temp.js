var inputval = document.querySelector('#cityinput')
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput');
var descrip = document.querySelector('#description');
var temp = document.querySelector('#temp');
var temp1 = document.querySelector('#temp1');
var temp2 = document.querySelector('#temp2');
var temp3 = document.querySelector('#temp3');
var temp4 = document.querySelector('#temp4');
var wind = document.querySelector('#wind');
var weatherIcon = document.querySelector('#weatherIcon'); // Add this line for the weather icon
var icon = document.querySelector('#icon'); // Add this line for the weather icon
var icon1 = document.querySelector('#icon1'); // Add this line for the weather icon
var apik = "3045dd712ffe6e702e3245525ac7fa38";

function convertion(val) {
    return (val - 273).toFixed(2);
}

btn.addEventListener('click', function () {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputval.value + '&appid=' + apik)
        .then(res => res.json())
        .then(data => {
            var nameval = data['name'];
            var descrip = data['weather'][0]['description'];
            var tempature = data['main']['temp'];
            var wndspd = data['wind']['speed'];

            // Display city name, temperature, description, and wind speed
            city.innerHTML = `<span>${nameval}</span>`;
            temp.innerHTML = `<span>${convertion(tempature)} C°</span>`;
            temp1.innerHTML = `<span>${convertion(tempature)} C°</span>`;
            temp2.innerHTML = `<span>${convertion(tempature - 1)} C°</span>`;
            temp3.innerHTML = `<span>${convertion(tempature - 1.5)} C°</span>`;
            temp4.innerHTML = `<span>${convertion(tempature - 2)} C°</span>`;
            description.innerHTML = `<span>${descrip}</span>`;
            wind.innerHTML = `<span>${wndspd} km/h</span>`;

            // Set the weather icon based on the weather condition code
            var weatherCode = data['weather'][0]['id'];
            setWeatherIcon(weatherCode);
        })
        .catch(err => alert('You entered the wrong city name'));
});

// Function to set the weather icon based on the weather condition code
function setWeatherIcon(code) {
    var iconElement = document.createElement("img");
    var iconEle = document.createElement("img");
    var iconElem = document.createElement("img");

    // Map condition codes to icon URLs (replace with your actual mappings)
    var iconUrl;
    var icons;
    switch (code) {
        case 800:
            iconUrl = "clear-sky.png";
            icons = "sunny.png";
            break;
        case 801:
        case 802:
            iconUrl = "partly-cloudy.png";
            icons = "sun-clouds.png";
            break;
        case 721: // Haze (you may need to check the exact code from the API)
            iconUrl = "haze.png";
            icons = "haze-cloud.png"; // Set this to the URL of your haze icon
            break;
        case 803:
        case 804:
            iconUrl = "cloudy.png";
            icons = "cloudy-clouds.png";
            break;
        case 500:
        case 501:
            iconUrl = "light-rain.png";
            icons = "light-rain-clouds.png";
            break;
        case 502: // Heavy intensity rain (you may need to check the exact code from the API)
            iconUrl = "heavy-rain.png";
            icons = "heavy-rain clouds.png"; // Set this to the URL of your heavy rain icon
            break;
        // Add more cases for other weather conditions as needed
        default:
            iconUrl = "default.png";
            icons = "sunny.png";// Default icon for unknown conditions
            break;
    }

    iconElement.src = iconUrl;
    iconEle.src = icons;
    iconElem.src = icons;
    weatherIcon.innerHTML = ''; // Clear any previous icons
    weatherIcon.appendChild(iconElement);
    icon.innerHTML = '';
    icon1.innerHTML = '';
    icon.appendChild(iconEle);
    icon1.appendChild(iconElem);
}