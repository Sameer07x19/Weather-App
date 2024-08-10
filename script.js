const apiKey = "8086067dd18fa47429e83793a96a9a48"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=" 

const search = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")



async function getData(city) {
    const response = await fetch(apiUrl + city + "&appid=" + apiKey)
    if(response.status == 404){
        document.querySelector(".error").style.display = "block"
        document.querySelector(".weather").style.display = "none"
    }else{
        var data = await response.json()
    
    console.log(data);

    document.querySelector(".humidity").innerHTML = data.main.humidity + "%"
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h"
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C"
    document.querySelector(".city").innerHTML = data.name

    if(data.weather[0].main === "Clear"){
        document.querySelector(".weather-icon").setAttribute("src","images/clear.png")
    }
    else if(data.weather[0].main === "Drizzle"){
        document.querySelector(".weather-icon").setAttribute("src","images/drizzle.png")
    }
    else if(data.weather[0].main === "Snow"){
        document.querySelector(".weather-icon").setAttribute("src","images/snow.png")
    }
    else if(data.weather[0].main === "Clouds"){
        document.querySelector(".weather-icon").setAttribute("src","images/clouds.png")
    }
    else if(data.weather[0].main === "Mist"){
        document.querySelector(".weather-icon").setAttribute("src","images/mist.png")
    }
    else{
        document.querySelector(".weather-icon").setAttribute("src","images/rain.png")
    }
    console.log(data.weather[0].main);

    document.querySelector(".weather").style.display = "block"
    document.querySelector(".error").style.display = "none"
    }
    
}

searchBtn.addEventListener("click", ()=> {
    getData(search.value)
})

search.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent form submission or other default actions
        searchBtn.click(); // Trigger the button click event
    }
});
