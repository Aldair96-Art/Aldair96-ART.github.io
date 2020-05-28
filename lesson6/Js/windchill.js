/*let windchill = 0;

(function () 
    const hightemp = document.getElementById("hightemp").innerHTML;
    const windspeed = document.getElementById("windspeed").innerHTML;
    windchill = 35.74 + (0.6215 * hightemp) - (35.75 * (windspeed ** .16)) + (0.4275 * hightemp * (windspeed ** .16));
    
     
    if (hightemp <= 50 && windspeed > 3) {
       windchill = Math.round(windchill);
    } else {
       windchill = "NA";
    }
    document.getElementById("windchill").innerHTML = windchill;*/
  //}());

  let hightemp = 41;
let windspeed = 8;
let windchill = 0;

if (hightemp <= 50 && windspeed > 3){
windchill = 35.74 + .6215 * hightemp - 35.75 * Math.pow(windspeed, 0.16) + 0.4275 * hightemp
 * Math.pow(windspeed,.16);
}

document.getElementById("hightemp").innerHTML = hightemp + '&deg';
document.getElementById("windspeed").innerHTML = windspeed + " mph"

if(windchill === 0){
document.getElementById("windchill").innerHTML = 'N/A';
}
else{
document.getElementById("windchill").innerHTML = Math.round(windchill) + '&deg;';
}