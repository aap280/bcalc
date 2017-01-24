'use strict';

/**
 * @ngdoc function
 * @name bcalcApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bcalcApp
 */
angular.module('bcalcApp', [])
	this.$route = "/";
  .controller('MainCtrl', function($scope) {
    $scope.calculateBurn = function(){
    	$scope.answer = ($scope.number1 / $scope.number2) * $scope.number3;
    };
  });

