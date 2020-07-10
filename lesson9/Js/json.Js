const dataURL = 'https:////byui-cit230.github.io/weather/data/towndata.json';
fetch(dataURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const cities = jsonObject['cities'];
        cities.forEach(city => {
            if (city.name == "Fish Haven" || city.name == "Preston" || city.name == "Soda Springs"){
                let section = document.createElement('section')
                let div = document.createElement('div')
                let h2 = document.createElement('h2');
                let detail1 = document.createElement('p');
                let detail2 = document.createElement('p');
                let detail3 = document.createElement('p');
                let detail4 = document.createElement('p');
                let images = document.createElement('img');
                div.setAttribute('class', 'citiesData')
                h2.textContent = city.name;
                detail1.textContent = city.motto;
                detail2.textContent = "Year Founded: " + city.yearFounded;
                detail3.textContent = "Population: " + city.currentPopulation;
                detail4.textContent = "Annual Rain Fall: " + city.averageRainfall;
                images.setAttribute('src', `./images/${city.photo}`);
                images.setAttribute('alt', city.name);

                div.appendChild(h2);
                div.appendChild(detail1);
                div.appendChild(detail2);
                div.appendChild(detail3);
                div.appendChild(detail4);
                section.appendChild(div);
                section.appendChild(images);

                document.querySelector('div.Town').appendChild(section);
            }
        });

    });
    