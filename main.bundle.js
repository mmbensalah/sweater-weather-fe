/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

	'use strict';

	$(document).ready(function () {
	  $("#search-btn").on('click', function () {
	    $.ajax({
	      type: 'GET',
	      url: 'https://damp-lowlands-57714.herokuapp.com/api/v1/forecast?location=' + $("#search-field").val(),
	      success: function success() {
	        var arr = result["data"];
	        debugger;
	        // $(".b-current-weather").append(`${arr['data']}`});
	      }
	    });
	  });
	});

	// var btn = document.getElementById("search-btn");
	// var favBtn = document.getElementById("fav-btn");
	// var field = document.getElementById("search-field")
	// var currentWeather = document.querySelector(".b-current-weather")
	// var currentWeatherDetails = document.querySelector(".b-current-weather-details")
	// var currentHourlyDaily = document.querySelector(".b-current-hourly-daily")
	// btn.addEventListener("click", getWeather);
	// favBtn.addEventListener("click", getFavorites);
	//
	// function getWeather() {
	//   var ourRequest = new XMLHttpRequest();
	//   ourRequest.open('GET', `https://damp-lowlands-57714.herokuapp.com/api/v1/forecast?location=${field.value}`)
	//   ourRequest.onload = function() {
	//     var jsonData = JSON.parse(ourRequest.responseText)["data"];
	//     renderHTML(jsonData);
	//   };
	//   ourRequest.send();
	// }
	//
	// function getFavorites() {
	//   var ourRequest = new XMLHttpRequest();
	//   ourRequest.open('GET', `https://damp-lowlands-57714.herokuapp.com/api/v1/favorites?api_key=sYbUFp5o7OfSCwBEIQHWtA`)
	//   // ourRequest.setRequestHeader('api_key', 'pKyQaaomPtQVuLqe0GjkRg')
	//   ourRequest.onload = function() {
	//     debugger
	//     var jsonData = JSON.parse(ourRequest.responseText)["data"];
	//     debugger
	//     renderHTML(jsonData);
	//   };
	//   ourRequest.send();
	// }
	//
	// function renderHTML(jsonData) {
	//   var jsonArray = Object.values(jsonData)
	//   var place     = jsonArray[0]
	//   var forecast  = getValues(jsonArray[2])
	//   var hourly    = getValues(forecast)[8] //array
	//   var daily     = getValues(forecast)[9] //array
	//
	//   var i;
	//   for (i = 0; i < hourly.length; i++) {
	//     var hour = hourly[i];
	//     hour.temp, hour.time, hour.icon
	//   }
	//
	//   for (i = 0; i < daily.length; i++) {
	//     var day = daily[i];
	//     day.time, day.icon, day.rain_prob, day.temp_low, day.temp_high
	//   }
	//
	//   currentWeather.insertAdjacentHTML('beforeend', place);
	//   currentWeatherDetails.insertAdjacentHTML('beforeend', forecast);
	// }
	//
	// function getValues(data) {
	//   return Object.values(data);
	// };
	//
	// // function postUser(email, pw) {
	// //   var ourRequest = new XMLHttpRequest();
	// //   ourRequest.open('POST', `http://localhost:3000/api/v1/users`)
	// //   // ourRequest.onload = function() {
	// //   //   var jsonData = JSON.parse(ourRequest.responseText)["data"];
	// //   // };
	// //   ourRequest.send();
	// //   ourRequest.onreadystatechange = processRequest;
	// //
	// //   function processRequest(e) {
	// //     if (ourRequest.readyState == 4 && ourRequest.status == 200) {
	// //       alert(ourRequest.responseText);
	// //     }
	// //   }
	// // }
	//
	//
	//
	// // jsonData.forEach(function(val) {
	// //   var keys = Object.keys(val);
	// //   html += "<div class='cat'>";
	// //   keys.forEach(function(key) {
	// //     html += "<strong>" + key + "</strong>" + val[key] + "<br>";
	// //   });
	// //   html += "</div><br>";
	// // });

/***/ })
/******/ ]);