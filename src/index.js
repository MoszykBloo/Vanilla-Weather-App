function showTemperature(response){
    console.log(response.data);
    let temperatuteElement = document.querySelector("#temperature");
    temperatuteElement.innerHTML = Math.round(response.data.main.temp);
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = response.data.name;
    let descriptionElement = document.querySelector("#description");
    descriptionElement.innerHTML = response.data.weather[0].description;
    let sensationElement = document.querySelector("#sensation");
    sensationElement.innerHTML = Math.round(response.data.main.feels_like);
    let humidityElement = document.querySelector("#humidity");
    humidityElement.innerHTML = Math.round(response.data.main.humidity);
    let windElement = document.querySelector("#wind");
    windElement.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey = "3e43755f9b9e49aaa25fe2da226ada2b";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=mexico&appid=${apiKey}&units=metric`;


axios.get(apiUrl).then(showTemperature);