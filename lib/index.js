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
  var currentTemp = toFahrenheit(current["attributes"]["current_temp"])
  var feelsLike = toFahrenheit(current["attributes"]["feels_like"])
  $(".desc").append(`${current["attributes"]["forecast"]}`);
  $(".cur-temp").append(`${currentTemp}`);
  $(".city").append(`${current["id"]}`);
  $(".country").append('United States');
  $(".cur-time").append(`${toCurrentDate()}`);
  $(".details").append('Details');
  $(".desc-2").append(`${current["attributes"]["forecast"]}`);
  $(".today").append('Today:' + ' ' + `${current["attributes"]["hourly_summary"]}`);
  $(".tonight").append('Tonight:' + ' ' + `${current["attributes"]["daily_summary"]}`);
  $(".feels-like").append('Feels Like:' + '     ' + `${feelsLike}`);
  $(".humidity").append(`${toHumidity(current["attributes"]["humidity"])}`);
  $(".visibility").append(`${toVisibility(current["attributes"]["visibility"])}`);
  $(".uv").append(`${toUV(current["attributes"]["humidity"])}`);
}

function toTitleCase(str) {
   return str.charAt(0).toUpperCase() + str.slice(1)
 }

function toFahrenheit(temp) {
  return Math.floor(temp) + "˚" + "F"
}

function toHumidity(num) {
  return 'Humidity:' + '     ' + Math.floor(num) + '%'
}

function toVisibility(num) {
  return 'Visibility:' + '      ' + Math.floor(num) + ' ' + 'miles'
}

function toUV(num) {
  return 'UV Index:' + '     ' + num
}

function toCurrentDate() {
  var today = new Date();
  var dd = today.getDate();
  var day = today.getDay();
  var mm = today.getMonth()+1;
  var yyyy = today.getFullYear();
  var weekday = new Array(7);
  weekday[0] =  "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  if(dd<10)
    {
      dd='0'+dd;
    }
  if(mm<10)
    {
      mm='0'+mm;
    }

  today = weekday[day] + ' ' + mm + '/' + dd;
  return today
}


function hourlyForecast(result) {
  var hourlyData = result["data"]["attributes"]["hourly"]
  var i;
  for (i = 0; i < hourlyData.length; i++) {
    var hour = hourlyData[i]
    $(".hour-icon").append(`${noHyphen(hour["icon"]) + ' '}`);
    $(".hour-temp").append(`${toFahrenheit(hour["temp"])}`);
    $(".hour-time").append(`${toHour(hour["time"])}`);
  }
}

function noHyphen(str) {
  return str.replace(/-/g," ");
}

function toHour(num) {
  return num.slice(11, 16);
}

function dailyForecast(result) {
  var dailyData = result["data"]["attributes"]["daily"]
  var i;
  for (i = 0; i < dailyData.length; i++) {
    var day = dailyData[i]
    $(".day-icon").append(
      $('<div/>')
        .attr("id", `${i}`)
  );

    $(".day-icon").append(`${day["icon"]}`);
    $(".day-rain-prob").append(`${day["rain_prob"]}`);
    $(".day-temp-high").append(`${day["temp_high"]}`);
    $(".day-temp-low").append(`${day["temp_low"]}`);
    $(".day-time").append(`${day["time"]}`);
  }
}
