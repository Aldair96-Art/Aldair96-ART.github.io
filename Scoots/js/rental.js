const apiURL = "https://github.com/Aldair96-Art/aldair96-art.github.io/blob/master/Scoots/js/Rentals.JSON";
fetch(apiURL)
.then((response) => response.json())
.then((Rental) => {
    const Rentals = Rental['Rentals'];  
    for (let i = 0; i < Rentals.length; i++) {
        let div1 = document.createElement('div');
        let image = document.createElement('img'); 
        let section = document.createElement('section');
        let h3 = document.createElement('h3');
        let li1 = document.createElement('li');
        let li2 = document.createElement('li'); 
        let li3 = document.createElement('li'); 
        let li4 = document.createElement('li');
        let li5 = document.createElement('li');
        
  
        h3.innerHTML = Rentals.Rentaltype;
        li1.innerHTML = `Max Persons: ${Rentals.MaxPersons}`;
        li2.innerHTML = `Half Day w/ Reservation: $${Rentals.ReservationHalfDay}`;
        li3.innerHTML = `Full Day w/ Reservation: $${Rentals.ReservationFullDay}`;
        li4.innerHTML = `Half Day Walk-In: $${Rentals.walkinHalfDay}`;
        li5.innerHTML = `Full Day Walk-In: $${Rentals.walkinFullDay}`;
        image.setAttribute('src', Rentals.photo);
        image.setAttribute('alt', Rentals.name);
        image.setAttribute('class', "rentalPics");
        section.setAttribute('class', "jsonSection");
        div1.setAttribute('class', "rentalDivs");
        h3.setAttribute('class', "rentalH3");
    
        div1.appendChild(image);
                div1.appendChild(section);
                sect.appendChild(h3);
                sect.appendChild(li1);
                sect.appendChild(li2);
                sect.appendChild(li3);
                sect.appendChild(li4);
                sect.appendChild(li5);

                document.querySelector('rentaltypeinfo').appendChild(div1);
        });
    });
