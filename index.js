const apiKey = "75ffce8b0b94631d779866f7e76756d6";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchaBox = document.querySelector(".search input");
const searchaBtn = document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");


async function checkWather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }else{

        const data = await response.json();

        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";

        if (data.weather[0].main === "Clouds") {
            weatherIcon.src = "images/clouds.png";
        } else if (data.weather[0].main === "Clear") {
            weatherIcon.src = "images/sun.png"; // Assuming "Clear" means sunny
        } else if (data.weather[0].main === "Rain") {
            weatherIcon.src = "images/rain.png";
        } else if (data.weather[0].main === "Mist") {
            weatherIcon.src = "images/mist.png";
        } else if (data.weather[0].main === "Snow") {
            weatherIcon.src = "images/snow.png";
        } else {
            weatherIcon.src = "images/default.png"; // Fallback for unknown conditions
        }
    document.querySelector(".weather").style.display="block";
    document.querySelector(".error").style.display="none";
    }
    
}

searchaBtn.addEventListener("click", () => {
    checkWather(searchaBox.value);
})
