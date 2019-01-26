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
  $(".city").append(`${current["id"]}`);
  $(".desc").append(`${current["attributes"]["forecast"]}`);
  $(".cur-temp").append(`${current["attributes"]["current_temp"]}`);
  $(".cur-time").append(`${current["attributes"]["current_time"]}`);
  $(".feels-like").append(`${current["attributes"]["feels_like"]}`);
  $(".humidity").append(`${current["attributes"]["humidity"]}`);
}

function dailyForecast(result) {
  var dailyData = result["data"]["attributes"]["daily"]
  var i;
  for (i = 0; i < dailyData.length; i++) {
    var day = dailyData[i]
    $(".day-icon").append(`${day["icon"]}`);
    $(".day-rain-prob").append(`${day["rain_prob"]}`);
    $(".day-temp-high").append(`${day["temp_high"]}`);
    $(".day-temp-low").append(`${day["temp_low"]}`);
    $(".day-time").append(`${day["time"]}`);
  }
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
