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

 function initMap() {
    let preston = {lat: 42.0974857, lng: -111.8788433};
    let map = new google.maps.Map(document.getElementById('map'), {zoom: 13, center: preston});
 }