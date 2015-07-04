'use strict';

angular.module('myApp.frontpage', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/frontpage', {
            templateUrl: 'site/frontpage/frontpage.html',
            controller: 'FrontpageCtrl'
        });
    }])

    .controller('FrontpageCtrl', [function () {

    }]);