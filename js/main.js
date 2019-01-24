// var btn = document.getElementById("search-btn");
// var field = document.getElementById("search-field")
// var currentWeather = document.querySelector(".b-current-weather")
// var currentWeatherDetails = document.querySelector(".b-current-weather-details")
// var currentHourlyDaily = document.querySelector(".b-current-hourly-daily")
// btn.addEventListener("click", getWeather);
//
// function getWeather() {
//   var ourRequest = new XMLHttpRequest();
//   ourRequest.open('GET', `http://localhost:3000/api/v1/forecast?location=${field.value}`)
//   ourRequest.onload = function() {
//     var jsonData = JSON.parse(ourRequest.responseText)["data"];
//     renderHTML(jsonData);
//   };
//   ourRequest.send();
// }
//
// function renderHTML(jsonData) {
//   jsonArray = getValues(jsonData)
//   place     = jsonArray[0]
//   forecast  = getValues(jsonArray[2])
//   hourly    = getValues(forecast)[8] //array
//   daily     = getValues(forecast)[9] //array
//
//   for (i = 0; i < hourly.length; i++) {
//     hour = hourly[i];
//     hour.temp, hour.time, hour.icon
//   }
//
//   for (i = 0; i < daily.length; i++) {
//     day = daily[i];
//     day.time, day.icon, day.rain_prob, day.temp_low, day.temp_high
//   }
//   // jsonData.forEach(function(val) {
//   //   var keys = Object.keys(val);
//   //   html += "<div class='cat'>";
//   //   keys.forEach(function(key) {
//   //     html += "<strong>" + key + "</strong>" + val[key] + "<br>";
//   //   });
//   //   html += "</div><br>";
//   // });
//   currentWeather.insertAdjacentHTML('beforeend', place);
//   currentWeatherDetails.insertAdjacentHTML('beforeend', forecast);
// }
//
// function getValues(data) {
//   return Object.values(data);
// };
//
// function postUser(email, pw) {
//   var ourRequest = new XMLHttpRequest();
//   ourRequest.open('POST', `http://localhost:3000/api/v1/users`)
//   // ourRequest.onload = function() {
//   //   var jsonData = JSON.parse(ourRequest.responseText)["data"];
//   // };
//   ourRequest.send();
//   ourRequest.onreadystatechange = processRequest;
//
//   function processRequest(e) {
//     if (ourRequest.readyState == 4 && ourRequest.status == 200) {
//       alert(ourRequest.responseText);
//     }
//   }
// }
