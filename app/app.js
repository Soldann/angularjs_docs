'use strict';

// Declare app level module which depends on views, and core components
angular.module('myApp', [
  'ngRoute',
  'myApp.home',
  'myApp.editor'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({
      redirectTo: '/home'
  });
}]);
