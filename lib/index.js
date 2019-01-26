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
  $(".b-current-weather-details").append(`${current["id"]}`);
  $(".b-current-weather-details").append(`${current["id"]}`);
  $(".b-current-weather-details").append(`${current["attributes"]["forecast"]}`);
  $(".b-current-weather-details").append(`${current["attributes"]["current_temp"]}`);
  $(".b-current-weather-details").append(`${current["attributes"]["current_time"]}`);
  $(".b-current-weather-details").append(`${current["attributes"]["feels_like"]}`);
  $(".b-current-weather-details").append(`${current["attributes"]["humidity"]}`);
}

function dailyForecast(result) {
  var dailyData = result["data"]["attributes"]["daily"]
  var i;
  for (i = 0; i < dailyData.length; i++) {
    var day = dailyData[i]
    $(".b-current-daily").append(`${day["icon"]}`);
    $(".b-current-daily").append(`${day["rain_prob"]}`);
    $(".b-current-daily").append(`${day["temp_high"]}`);
    $(".b-current-daily").append(`${day["temp_low"]}`);
    $(".b-current-daily").append(`${day["time"]}`);
  }
}

function hourlyForecast(result) {
  var hourlyData = result["data"]["attributes"]["hourly"]
  var i;
  for (i = 0; i < hourlyData.length; i++) {
    var hour = hourlyData[i]
    $(".b-current-hourly").append(`${hour["icon"]}`);
    $(".b-current-hourly").append(`${hour["temp"]}`);
    $(".b-current-hourly").append(`${hour["time"]}`);
  }
}
