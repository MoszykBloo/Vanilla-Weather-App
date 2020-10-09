function formatDate(timestamp){
    let date = new Date(timestamp);
    let hours = date.getHours();
        if(hours < 10){
            hours = `0${hours}`;
            }
    let minutes = date.getMinutes();
        if(minutes < 10){
            minutes = `0${minutes}`;
            }
    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    let day = days[date.getDay()];

    return `${day} ${hours}:${minutes}`;

}

function showTemperature(response){
    console.log(response.data);
    let temperatuteElement = document.querySelector("#temperature");
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");
    let sensationElement = document.querySelector("#sensation");
    let humidityElement = document.querySelector("#humidity");
    let windElement = document.querySelector("#wind");
    let dateElement = document.querySelector("#date");
    let iconElement = document.querySelector("#icon");
    
    temperatuteElement.innerHTML = Math.round(response.data.main.temp);
    cityElement.innerHTML = response.data.name;
    descriptionElement.innerHTML = response.data.weather[0].description;
    sensationElement.innerHTML = Math.round(response.data.main.feels_like);
    humidityElement.innerHTML = Math.round(response.data.main.humidity);
    windElement.innerHTML = Math.round(response.data.wind.speed);
    dateElement.innerHTML = formatDate(response.data.dt * 1000);
    iconElement.setAttribute(
        "src", 
        `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
        );
}

let apiKey = "3e43755f9b9e49aaa25fe2da226ada2b";
let city = "mexico";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;


axios.get(apiUrl).then(showTemperature);