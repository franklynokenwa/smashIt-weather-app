const weatherImage = document.getElementById("weather-image");
const country = document.getElementById("country");
const currentCity = document.getElementById("city");
const weather = document.getElementById("weather");
const weatherInformation = document.getElementById("weather-information");
const newYorkWeatherInformation = document.getElementById("new-york-weather-information");
const description = document.getElementById("description");
const date = document.getElementById("date");
const currentLocation = document.getElementById("current-location");
const city = document.getElementById("searchBar");
const dateTime = document.getElementById("dateTime");


const newYorkImage = document.getElementById("new-york-weather-image");
const newYorkCountry = document.getElementById("new-york-country");
const newYorkCurrentCity = document.getElementById("new-york-city");
const newYorkWeather = document.getElementById("new-york-weather");
const newYorkDescription = document.getElementById("new-york-description");
const newYorkDate = document.getElementById("new-york-date");
const newYorkDateTime = document.getElementById("newYorkDateTime");

const kelvin = 273;
const key = "9b2a1825b663bd2e324df174bba5ab51";

const locationKey =  '3ad7210dc9a04dcca195224b0704ff54'
// IP geolocation.io  key 3ad7210dc9a04dcca195224b0704ff54 

function newYorkWeatherInfo() {        
    const newYorkApi = `https://api.openweathermap.org/data/2.5/weather?q=new%20york&appid=49dea14f1edc93f6a6bef5a71e286492`;
     
    fetch(newYorkApi)
        .then(function (response) {
        console.log('response gotten');
        if (response.ok) {
            console.log('SUCCESSFULLY SUCCESSFUL');
        } else {
            console.log('ERROR');
        }
       const data = response.json();
       return data;
    })
        .then(function newYorkWeatherData(data) {
        const newYorkWeatherTemperatureValue = Math.floor((data.main.temp)-kelvin);
        const newYorkWeatherDescription = data.weather[0].description;
        const newYorkWeatherIconId = data.weather[0].icon;
        const newYorkWeatherCity = data.name;
        const newYorkWeatherCountry = data.sys.country;

        return {
            newYorkWeatherCountry,
            newYorkWeatherTemperatureValue,
            newYorkWeatherCity,
            newYorkWeatherDescription,
            newYorkWeatherIconId
        }

    })

        .then(function(newYorkWeatherData) {
            const newYorkWeatherDataValues = newYorkWeatherData;
            newYorkWeather.textContent = `${newYorkWeatherDataValues.newYorkWeatherTemperatureValue} °C`;
            newYorkDescription.textContent = newYorkWeatherDataValues.newYorkWeatherDescription;
            newYorkCurrentCity.textContent = newYorkWeatherDataValues.newYorkWeatherCity;
            newYorkCountry.textContent = newYorkWeatherDataValues.newYorkWeatherCountry;
            newYorkImage.src = `icons/${newYorkWeatherDataValues.newYorkWeatherIconId}.png`;
           
        })
            .catch(function (error) {
            console.log(error);
            })
} 
city.addEventListener('change',newYorkWeatherInfo);
    
function locationData() {
    const today = new Date();
        let hours = today.getHours() + 7;
        let minutes = today.getMinutes();
        let seconds = today.getSeconds();
        let atmostphere = "";

        if (hours > 12) {
            hours = hours-24;
            atmostphere = "PM";
        }
        
        if((hours == 0)){
            hours = 12;
            atmostphere = "AM";
        }

        if(hours == 12){
            atmostphere = "AM";                       
        }

        if(hours < 10){
            hours = "0"+hours;            
            
        }
        if ((minutes < 10) || (minutes == 0)) {
            minutes = "0"+minutes;
                        
            // console.log("less than 10");
        }
        if ((seconds < 10) || (seconds == 0)) {
            seconds = "0"+seconds;
            
        }
            newYorkDate.textContent = `${hours}: ${minutes}: ${seconds} ${atmostphere}`;    
}

        city.addEventListener('change',locationData);

        function inputText() {   
            weatherInformation.style.display = 'block'; 
            newYorkWeatherInformation.style.display = 'block'; 
            city.style.display = 'none';
            setInterval(currentTime, 1000);
            setInterval(locationData, 1000);
           
            const api = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=49dea14f1edc93f6a6bef5a71e286492`;
                    
            localStorage.setItem('city', city.value);
           
            fetch(api)
                .then(function (response) {
                console.log('response received');
                if (response.ok) {
                    console.log('SUCCESSFUL');
                } else {
                    console.log('ERROR');
                }
               const data = response.json();
               return data;
            })

                .then(function weatherData(data) {
                const weatherTemperatureValue = Math.floor((data.main.temp)-kelvin);
                const weatherDescription = data.weather[0].description;
                const weatherIconId = data.weather[0].icon;
                const weatherCity = data.name;
                const weatherCountry = data.sys.country;


                return {
                    weatherCountry,
                    weatherTemperatureValue,
                    weatherCity,
                    weatherDescription,
                    weatherIconId
                }
                
            })
        
                .then(function(weatherData) {
                    const weatherDataValues = weatherData;
                    weather.textContent = `${weatherDataValues.weatherTemperatureValue} °C`;
                    description.textContent = weatherDataValues.weatherDescription;
                    currentCity.textContent = weatherDataValues.weatherCity;
                    country.textContent = weatherDataValues.weatherCountry;
                    weatherImage.src = `icons/${weatherDataValues.weatherIconId}.png`;
                    
                })
                    .catch(function (error) {
                    console.log(error);
                    })
                
                        //console.log(api); 
        } 
    city.addEventListener('change', inputText);

    async function registerSW() {
        if('serviceWorker' in navigator){
            try {
                await navigator.serviceWorker.register('serviceWorker.js');
            } catch (error) {
                console.log('service worker failed');
            }
        }
    }

    window.addEventListener('load', () => {
        registerSW();
        
    });
    newYorkWeatherInfo();

    function currentTime() {
        const today = new Date();
        let hours = today.getHours();
        let minutes = today.getMinutes();
        let seconds = today.getSeconds();
        let atmostphere = "";
        
        if (hours > 12) {
            hours = hours-12;
            atmostphere = "PM";
        }
        

        if((hours == 0)){
            hours = 12;
            atmostphere = "AM";             
               
        }

        if(hours == 12){
            atmostphere = "AM";
                       
        }

        if(hours < 10){
            hours = "0"+hours;            
            
        }
        if ((minutes < 10) || (minutes == 0)) {
            minutes = "0"+minutes;
                        
            // console.log("less than 10");
        }
        if ((seconds < 10) || (seconds == 0)) {
            seconds = "0"+seconds;
            
        }
            date.textContent = `${hours}: ${minutes}: ${seconds} ${atmostphere}`;
            
    }   

city.addEventListener('change', currentTime);
