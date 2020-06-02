'use strict';
 
angular.module('myApp.editor', ['ngRoute'])
 
// Declared route 
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/editor', {
        templateUrl: 'editor/editor.html',
        controller: 'EditorCtrl'
    });
}])
 
// Home controller
.controller('EditorCtrl', [function() {
 
}]);