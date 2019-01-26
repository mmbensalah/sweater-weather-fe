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
	      success: function success(result) {
	        currentForecast(result);
	        dailyForecast(result);
	        hourlyForecast(result);
	      }
	    });
	  });
	});

	function currentForecast(result) {
	  var current = result["data"];
	  $(".city").append('' + current["id"]);
	  $(".desc").append('' + current["attributes"]["forecast"]);
	  $(".cur-temp").append('' + current["attributes"]["current_temp"]);
	  $(".cur-time").append('' + current["attributes"]["current_time"]);
	  $(".feels-like").append('' + current["attributes"]["feels_like"]);
	  $(".humidity").append('' + current["attributes"]["humidity"]);
	}

	function dailyForecast(result) {
	  var dailyData = result["data"]["attributes"]["daily"];
	  var i;
	  for (i = 0; i < dailyData.length; i++) {
	    var day = dailyData[i];
	    $(".daily").append('' + day["icon"]);
	    $(".daily").append('' + day["rain_prob"]);
	    $(".daily").append('' + day["temp_high"]);
	    $(".daily").append('' + day["temp_low"]);
	    $(".daily").append('' + day["time"]);
	  }
	}

	function hourlyForecast(result) {
	  var hourlyData = result["data"]["attributes"]["hourly"];
	  var i;
	  for (i = 0; i < hourlyData.length; i++) {
	    var hour = hourlyData[i];
	    $(".hourly").append('' + hour["icon"]);
	    $(".hourly").append('' + hour["temp"]);
	    $(".hourly").append('' + hour["time"]);
	  }
	}

/***/ })
/******/ ]);