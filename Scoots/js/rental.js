const requestURL = 'https://aldair96-art.github.io/Scoots/Data/Rentals.JSON';
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const Rentals = jsonObject['Rentals'];
        Rentals.forEach(Rent => {
            if (Rent.Rentaltype == "Honda Metro Scooter" || Rent.Rentaltype == "Honda Dio Scooter" || 
                Rent.Rentaltype == "Honda PCX150 Scooter" || Rent.Rentaltype == "Honda Pioneer ATV" || 
                Rent.Rentaltype == "Jeep Wrangler - 4 door with a/c"  || Rent.Rentaltype == "Jeep Wrangler - 2 door"){
                    /*Create Elements*/

                let card = document.createElement('section')
                let div = document.createElement('div')
                let h1 = document.createElement('h1');
                let p1 = document.createElement('p');
                let p2 = document.createElement('h3');
                let p3 = document.createElement('p');
                let p4 = document.createElement('p');
                let p5 = document.createElement('h3');
                let p6 = document.createElement('p');
                let p7 = document.createElement('p');
                let image = document.createElement('img');
                let link = document.createElement('a');
                let textLink = document.createElement('p');

                div.setAttribute('class', 'Rentalcontainer')
                h1.textContent = Rent.Rentaltype;
                p1.textContent = "Max.Persons: " + Rent.MaxPersons;
                p2.textContent = "Price under Reservation"
                p3.textContent = "Reservation Half Day (3hrs): " + Rent.ReservationHalfDay;
                p4.textContent = "Reservation Full Day: " + Rent.ReservationFullDay;
                p5.textContent = "Walk-In Prices"
                p6.textContent = "Walk in Half Day (3hrs): " + Rent.walkinHalfDay;
                p7.textContent = "Walk in Full Day: " + Rent.walkinFullDay;
                image.setAttribute('src', `./images/rentaltype/${Rent.images}`);
                image.setAttribute('alt', Rent.Rentaltype);

                div.appendChild(h1);
                div.appendChild(p1);
                div.appendChild(p2);
                div.appendChild(p3);
                div.appendChild(p4);
                div.appendChild(p5);
                div.appendChild(p6);
                div.appendChild(p7);
                card.appendChild(div);
                card.appendChild(image);

                document.querySelector('div.rentalinfo').appendChild(card);
            }
        });

    });

