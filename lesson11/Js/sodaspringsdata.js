const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5607916&units=imperial&APPID=4491eb92629e7b5e0ac20b732e39129e";
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        document.getElementById('Currently').textContent = Math.floor(jsObject.main.temp);
        document.getElementById('Temp').textContent = Math.floor(jsObject.main.temp_max);
        document.getElementById('Humidity').textContent = jsObject.main.humidity;
        document.getElementById('WindSpeed').textContent = Math.ceil(jsObject.wind.speed);

        var temp = parseFloat(document.getElementById("Temp").innerHTML);
        var speed = parseFloat(document.getElementById("WindSpeed").innerHTML);
        var chill = 35.74 + .6215 * temp - 35.75 * Math.pow(speed, .16) +  .4275 * temp * Math.pow(speed, .16);
        if (temp < 51 && speed > 3) {
            document.getElementById("WindChill").innerHTML = Math.round(chill);
        }
        else {
            document.getElementById("WindChill").innerHTML = "N/A";
        }
    });

const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5607916&units=imperial&appid=b2df84ca600590f5e0eb74b31fdf2289";
fetch(forecastURL)
    .then((response) => response.json())
    .then((jsonObject) => {

        const fiveDay = jsonObject.list.filter(x => x.dt_txt.includes('18:00:00'));
        console.log(fiveDay);

        const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        let day = 1;

        fiveDay.forEach(forecast => {
            let date = forecast.dt_txt;
            let d = new Date(date).getDay();
            let f = forecast.main.temp;
            const icon = `https://openweathermap.org/img/w/${forecast.weather[0].icon}.png`;

            console.log(icon);

            document.getElementById(`fore${day}`).textContent = weekdays[d];
            document.getElementById(`forecast${day}`).textContent = Math.floor(f);
            document.getElementById(`imagesrc${day}`).setAttribute('alt', forecast.weather[0].description);
            document.getElementById(`imagesrc${day}`).setAttribute('src', icon);
            day++;
            d++;
        })
    });


    function TEvents(town) {
        const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
     
     fetch(requestURL)
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonObject) {
        const towns = jsonObject['towns'];
        for (let i = 0; i < towns.length; i++ ) {
            if (towns[i].name == town) {
                let events = towns[i].events;
                for (let i=0; i < events.length; i++) {
                    let event = document.createElement('p');
                    event.innerHTML = events[i];
                    document.querySelector('#weather-events').appendChild(event);
                }
            }
        }
     });
     }