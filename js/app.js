'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'ngAnimate',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/about', {templateUrl: 'partials/about.html', controller: 'AboutCtrl'});
  $routeProvider.when('/contact', {templateUrl: 'partials/contact.html', controller: 'ContactCtrl'});
  $routeProvider.when('/experience', {templateUrl: 'partials/experience.html', controller: 'ExperienceCtrl'});
  $routeProvider.when('/projects', {templateUrl: 'partials/projects.html', controller: 'ProjectsCtrl'});
  $routeProvider.otherwise({redirectTo: '/about'});
}]);
