const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=4a32e867e085eb3d905c18e7e6de00d4";
fetch(apiURL)
.then((response) => response.json())
.then((weather) => {
    document.getElementById('current-temp').textContent = Math.round(weather.main.temp);
    document.getElementById('High').textContent = Math.round(weather.main.temp_max);
    document.getElementById('Humidity').textContent = weather.main.humidity;
    document.getElementById('WindSpeed').textContent = Math.ceil(weather.wind.speed);

    //code to calculate Windchill

   const High = document.getElementById('High').innerHTML;
   const WindSpeed = document.getElementById('WindSpeed').innerHTML;
   var windchill = 35.74 + (0.6215 * High) - (35.75 *  Math.pow(WindSpeed ** .16)) + (0.4275 * High *  Math.pow(WindSpeed ** .16));
   
    if (High <= 50 && WindSpeed > 3) {
      windchill = Math.round(windchill) + '°F';
   } else {
      windchill = "N/A";
   }

    document.getElementById('WindChill').innerHTML = windchill;

});

//Forecast//
const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?id="+coo+"&units=imperial&APPID=4a32e867e085eb3d905c18e7e6de00d4";
fetch(forecastURL)
    .then((response) => response.json())
    .then((jsObject) => {

        const fivedayforecast = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));

        const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

        let day = 0;
        fivedayforecast.forEach(forecast => {
            var d = new Date(forecast.dt_txt);
            var currentday = new Date(d).getDay();
            const img = `http://openweathermap.org/img/w/${forecast.weather[0].icon}.png`;

            document.getElementById(`fore${day+1}`).textContent = weekdays[currentday];
            document.getElementById(`forecast${day+1}`).textContent = Math.round(forecast.main.temp);
            document.getElementById(`imagesrc${day+1}`).setAttribute('alt', forecast.weather[0].description);
            document.getElementById(`imagesrc${day+1}`).setAttribute('src', img);
            day++;
            d++;
        });
    });
    
    fetch(urlRequest).then(res=>res.json())
    .then(Eventdata=>
        {

        var Events=document.getElementById("weather-events");

        var town = Eventdata.towns.filter(town => town.name==cities_name)[0];

        for (var i = 0; i < town.events.length; i++) {

            var p = document.createElement("p");
            p.textContent=town.events[i];
            Events.append(p);
            }
    })
    }
      
    