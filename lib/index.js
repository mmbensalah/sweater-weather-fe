$( document ).ready(function() {
  $("#search-btn").on('click', function(){
    $.ajax({
      type: 'GET',
      url: `https://damp-lowlands-57714.herokuapp.com/api/v1/forecast?location=${$("#search-field").val()}`,
      success: function(result) {
        currentForecast(result["data"]);
        dailyForecast(result["data"]);
        hourlyForecast(result["data"]);
      }
    });
  });
  $("#fav-btn").on('click', function(){
    $.ajax({
      type: 'GET',
      url: "https://damp-lowlands-57714.herokuapp.com/api/v1/favorites?api_key=pKyQaaomPtQVuLqe0GjkRg",
      success: function(result) {
        var resultHash = toHash(result);
        currentForecast(resultHash);
        dailyForecast(resultHash);
        hourlyForecast(resultHash);
      }
    });
  });
  $("#add-fav-btn").on('click', function(){
    var city = $("#add-fav-field").val()
    event.preventDefault();
    event.stopPropagation();
    console.log("click");
    $.ajax({
      type: 'POST',
      url: `https://damp-lowlands-57714.herokuapp.com/api/v1/favorites?api_key=pKyQaaomPtQVuLqe0GjkRg`,
      data: { api_key: "pKyQaaomPtQVuLqe0GjkRg", location: city},
      success: function(result) {
        alert(`${city} has been added to your favorites!`);
      }
    });
  });
});

function toHash(arr) {
  return arr["data"][0];
}

function currentForecast(result) {
  var current = result
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

function hourlyForecast(result) {
  var hourlyData = result["attributes"]["hourly"]
  var i;
  for (i = 0; i < hourlyData.length; i++) {
    var hour = hourlyData[i]
    $(".icon").append(
      $('<div/>')
        .attr("id", `${i}`)
          .text(`${noHyphen(hour["icon"])}`));
    $(".temp").append(
      $('<div/>')
        .attr("id", `${i}`)
          .text(`${toFahrenheit(hour["temp"])}`));
    $(".time").append(
      $('<div/>')
        .attr("id", `${i}`)
          .text(`${toHour(hour["time"])}`));
  }
};

function dailyForecast(result) {
  var dailyData = result["attributes"]["daily"]
  var i;
  for (i = 0; i < dailyData.length; i++) {
    var day = dailyData[i]
    $(".day-time").append(
      $('<div/>')
        .attr("id", `${i}`)
          .text(`${getWeekday(day["time"])}`));
    $(".day-icon").append(
      $('<div/>')
        .attr("id", `${i}`)
          .text(`${noHyphen(day["icon"])}`));
    $(".day-rain-prob").append(
      $('<div/>')
        .attr("id", `${i}`)
          .text(`${toRainPercent(day["rain_prob"])}`));
    $(".day-temp-high").append(
      $('<div/>')
        .attr("id", `${i}`)
          .text(`${toFahrenheit(day["temp_high"])}`));
    $(".day-temp-low").append(
      $('<div/>')
        .attr("id", `${i}`)
          .text(`${toFahrenheit(day["temp_low"])}`));
  }
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
  var date = today.getDay();
  var mm = today.getMonth()+1;
  var yyyy = today.getFullYear();
  if(dd<10)
    {
      dd='0'+dd;
    }
  if(mm<10)
    {
      mm='0'+mm;
    }

  today = weekDay(date) + ' ' + mm + '/' + dd;
  return today
}

function weekDay(date) {
  var weekday = new Array(7);
      weekday[0] =  "Sunday";
      weekday[1] = "Monday";
      weekday[2] = "Tuesday";
      weekday[3] = "Wednesday";
      weekday[4] = "Thursday";
      weekday[5] = "Friday";
      weekday[6] = "Saturday";
  return weekday[date];
}

function getWeekday(date) {
  var futureDate = new Date(date)
  var weekday = futureDate.getDay();
  return weekDay(weekday);
}

function noHyphen(str) {
  return str.replace(/-/g," ");
}

function toHour(num) {
  return num.slice(11, 16);
}

function toRainPercent(num) {
  return Math.floor(num * 100) + '%'
}
