angular.module('myApp', ['ngRoute'])
    .config(function($routeProvider) {
        $routeProvider.when('/contacts', {
            templateUrl : 'partials/contacts.html',
            controller : 'ContactsController'
        });
    });
