'use strict';

angular.module('myApp.news', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/news', {
    templateUrl: 'site/news/news.html',
    controller: 'NewsCtrl'
  });
}])

.controller('NewsCtrl', [function() {

}]);