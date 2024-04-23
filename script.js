
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5b5757944cmsh0da4b3e7a2e4fc0p18d5c5jsn9311309fc9e1',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city) => {
    cityName.innerHTML = city;
    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city;
    (async () =>{
        try {
            const response = await fetch(url, options);
            const result = await response.text();
            const result1 = JSON.parse(result);
            console.log(result1);
            //cloud_pct.innerHTML = response.cloud_pct
            feels_like.innerHTML = result1.feels_like
            humidity.innerHTML = result1.humidity
            humidity2.innerHTML = result1.humidity
            max_temp.innerHTML = result1.max_temp
            min_temp.innerHTML = result1.min_temp

            sunrise.innerHTML = result1.sunrise;
            sunset.innerHTML = result1.sunset
            temp.innerHTML = result1.temp
            temp2.innerHTML = result1.temp
            wind_degrees.innerHTML = result1.wind_degrees
            wind_speed.innerHTML = result1.wind_speed
            wind_speed2.innerHTML = result1.wind_speed
        } catch (error) {
            console.error(error);
        }
    })()
}


submit.addEventListener("click", (e)=>{
    e.preventDefault();
    getWeather(city.value)
})

getWeather("Delhi")

