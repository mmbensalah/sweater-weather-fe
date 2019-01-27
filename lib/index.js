$( document ).ready(function() {
  $("#search-btn").on('click', function(){
    $.ajax({
      type: 'GET',
      url: `https://damp-lowlands-57714.herokuapp.com/api/v1/forecast?location=${$("#search-field").val()}`,
      success: function(result) {
        currentForecast(result);
        dailyForecast(result);
        hourlyForecast(result);
      }
    });
  });
});

function currentForecast(result) {
  var current = result["data"]
  var city = toTitleCase(current["id"])
  var currentTemp = toFahrenheit(current["attributes"]["current_temp"])
  var feelsLike = toFahrenheit(current["attributes"]["feels_like"])
  $(".city").append(`${city}`);
  $(".desc").append(`${current["attributes"]["forecast"]}`);
  $(".cur-temp").append(`${currentTemp}`);
  $(".cur-time").append(`${current["attributes"]["current_time"]}`);
  $(".feels-like").append(`${feelsLike}`);
  $(".humidity").append(`${current["attributes"]["humidity"]}`);
}

function toTitleCase(str) {
   return str.charAt(0).toUpperCase() + str.slice(1)
 }

function toFahrenheit(temp) {
  debugger
  return Math.floor(temp) + "F"
}

function hourlyForecast(result) {
  var hourlyData = result["data"]["attributes"]["hourly"]
  var i;
  for (i = 0; i < hourlyData.length; i++) {
    var hour = hourlyData[i]
    $(".hour-icon").append(`${hour["icon"]}`);
    $(".hour-temp").append(`${hour["temp"]}`);
    $(".hour-time").append(`${hour["time"]}`);
  }
}

function dailyForecast(result) {
  var dailyData = result["data"]["attributes"]["daily"]
  var i;
  for (i = 0; i < dailyData.length; i++) {
    var day = dailyData[i]
    $(".day-icon").append(
      $('<div/>')
        .attr("id", `${i}`)
          .text(`${day["icon"]}`)
  );

    $(".day-icon").append(`${day["icon"]}`);
    $(".day-rain-prob").append(`${day["rain_prob"]}`);
    $(".day-temp-high").append(`${day["temp_high"]}`);
    $(".day-temp-low").append(`${day["temp_low"]}`);
    $(".day-time").append(`${day["time"]}`);
  }
}
