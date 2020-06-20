function toggle_nav() {
    document.getElementById("main_nav").classList.toggle("nav_hidden");
 }

 const date = new Date();
 const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
 const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
 const dayName = days[date.getDay()];
 const monthName = monthNames[date.getMonth()];
 const year = date.getFullYear();
 document.getElementById("today").innerHTML = dayName + ', ' + date.getDate() + ' ' + monthName  + ' ' + year;
 document.getElementById("year").innerHTML = year;

 var d = new Date();
const banner = document.getElementById("banner");
if (d.getDay() == 5) {
    pancakebanner.setAttribute("style", "display: block");
}
else {
    pancakebanner.setAttribute("style", "display: none"); 
}



 function SeverityRange(rate) {
    document.getElementById("severityrange").innerHTML = rate;
}

function ldahoTowns() {
    const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
 
    fetch(requestURL)
    .then(function (response) {
       return response.json();
    })
    .then(function (jsonObject) {
       const towns = jsonObject['towns'];
       let preston;
       let sodasprings;
       let fishhaven;
       for (let i = 0; i < towns.length; i++ ) {
        switch (towns[i].name) {
        case "Preston":
                preston = buildTownCard(towns[i], 'p');
              break;
        case "Soda Springs":
                sodasprings = buildTownCard(towns[i], 'sp');
              break;
        case "Fish Haven":
                fishhaven = buildTownCard(towns[i], 'fh');
              break;
          }
       }
       document.querySelector('main').appendChild(preston);
       document.querySelector('main').appendChild(sodasprings);
       document.querySelector('main').appendChild(fishhaven);
    });
 }
 
 function buildTownCard(town, prefix) {
    let section = document.createElement('section');
    let divDetail = document.createElement('div')
    divDetail.setAttribute('class', 'Idahocity')
    divDetail.setAttribute('id', prefix + '_text');
    let image = document.createElement('img');
    image.setAttribute('src', './images/' + town.photo);
    image.setAttribute('class', 'Idaho City');
    image.setAttribute('alt', town.name)
    image.setAttribute('id', prefix + '_image');
    let name = document.createElement('h2');
    name.textContent = town.name;
    let motto = document.createElement('h5');
    motto.textContent = town.motto;
    let yearFounded = document.createElement('h4');
    yearFounded.textContent = 'Year Founded: ' + town.yearFounded;
    let currentPopulation = document.createElement('h4');
    currentPopulation.textContent = 'Population: ' + town.currentPopulation;
    let averageRainfall = document.createElement('h4');
    averageRainfall.textContent = 'Annual Rain Fall: ' + town.averageRainfall;
 
    divDetail.appendChild(name);
    divDetail.appendChild(motto);
    divDetail.appendChild(yearFounded);
    divDetail.appendChild(currentPopulation);
    divDetail.appendChild(averageRainfall);
    section.appendChild(divDetail);
    section.appendChild(image);
    return section;
 }
