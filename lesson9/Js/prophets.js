  
const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';


fetch(requestURL)
.then(function (response) {
   return response.json();
})
.then(function (jsonObject) {
   //console.table(jsonObject);  // temporary checking for valid response and data parsing
   const prophets = jsonObject['prophets'];
   for (let i = 0; i < prophets.length; i++) {
      let  card = document.createElement('section');
      let    h2 = document.createElement('h2');
      let image = document.createElement('img');
      let  div1 = document.createElement('div');
      let  div2 = document.createElement('div');

      h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
      div1.setAttribute('class', 'birth')
      div1.textContent = 'Date of Birth: ' + prophets[i].birthdate;
      div2.setAttribute('class', 'birthplace')
      div2.textContent = 'Place of Birth: ' + prophets[i].birthplace;
      image.setAttribute('src', prophets[i].imageurl);
      card.appendChild(h2);
      card.appendChild(div1);
      card.appendChild(div2);
      card.appendChild(image);

      document.querySelector('div.cards').appendChild(card);
   }
});