$(document).ready(function() {
/* FUNCTION DEFINITIONS */
function setSkycon(weatherType) {
  var skycons = new Skycons();
  // skycons.add(document.getElementById("skycon"), Skycons.CLEAR_DAY);
  switch (weatherType) {
    case "clear sky":
      skycons.add(document.getElementById("skycon"), Skycons.CLEAR_DAY);
      skycons.play();
      break;
    case "rain":
      skycons.add(document.getElementById("skycon"), Skycons.RAIN);
      skycons.play();
      break;
    case "shower rain":
      skycons.add(document.getElementById("skycon"), Skycons.RAIN);
      skycons.play();
      break;
    case "thunderstorm":
      skycons.add(document.getElementById("skycon"), Skycons.RAIN);
      skycons.play();
      break;
    case "snow":
      skycons.add(document.getElementById("skycon"), Skycons.SNOW);
      skycons.play();
      break;
    case "mist":
      skycons.add(document.getElementById("skycon"), Skycons.FOG);
      skycons.play();
      break;
    case "scattered clouds":
      skycons.add(document.getElementById("skycon"), Skycons.CLOUDY);
      skycons.play();
      break;
    case "broken clouds":
    skycons.add(document.getElementById("skycon"), Skycons.CLOUDY);
      skycons.play();
      break;

    case "haze":
    skycons.add(document.getElementById("skycon"), Skycons.CLOUDY);
      skycons.play();
      break;

    case "few clouds":
      skycons.add(document.getElementById("skycon"), Skycons.PARTLY_CLOUDY_DAY);
      skycons.play();
      break;
    default:
console.log(weatherType);
skycons.add(document.getElementById("skycon"), Skycons.CLEAR_DAY);
      skycons.play();
  }
}
  

function storePosition(position) {
  var lat = position.coords.latitude;
  var lon = position.coords.longitude; 
  /* Connect to weather api with coordinates */
  var dest = "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&APPID=b50b33a42eed31a773592dd2bed97d09";

  $.getJSON(dest, function parseData(data) {
    var weather = data.main.temp;

    /* Convert to Farenheigth and Celcius */
    var far = Math.floor((9 / 5) * (weather - 273) + 32);
    var cel = Math.floor(5 / 9 * (far - 32));
    var desc = data.weather[0].main;
    $("#its").html("It's " + "<canvas id='skycon' width='70' height='70'></canvas>" + "&");
    setSkycon(data.weather[0].description);
    $("#farenheight_face").html("<h1 id='far'>" + far + '°F ' + "</h1></button>");
    $("#celcius_face").html("<h1 id='cel'>" + cel + '°C ' + "</h1></button>");
    $("#city").html("in " + data.name + ".");
    
    console.log(far);
});
};
  
function getLocation () {
  if(navigator.geolocation)
        navigator.geolocation.getCurrentPosition(storePosition);
  else
    display.innerHTML = "Your location cannot be determined."
};

/* FUNCTION CALLS */

$("#its").one( "click", function(){
$('#its').removeClass("underline").text('Wait.');
$('#its').removeClass('click');
$('#load').addClass("loader");
getLocation();
});  
});

$("#celcius_face").click(function() {
  $("#farenheight_face").removeClass('white-text');
  $('.cube').removeClass('backward');
  $("#celcius_face").addClass('white-text');
  $('.cube').addClass('forward');
});

$('#farenheight_face').click(function() {
  $("#celcius_face").removeClass('white-text');
  $("#farenheight_face").addClass('white-text');
  $('.cube').removeClass('forward');
  $('.cube').addClass('backward');
});