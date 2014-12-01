// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require angular
//= require turbolinks
//= require components
//= require_tree .
//= require ../../../vendor/assets/bootstrap-3/js/bootstrap.min.js
//= require ../../../vendor/assets/javascripts/moment.min.js
//= require ../../../vendor/assets/javascripts/jquery.gridster.js
// = require stocks/stocks_controller
// = require sports/sports_controller

angular.module('StockApp', [
  'StockApp.controllers',
  'StockApp.services'
]);

angular.module('SportApp', [
  'SportApp.controllers',
  'SportApp.services'
]);

angular.module('myApp', ['StockApp', 'SportApp'])