angular.module('myApp', ['ngRoute'])
    .config(function($routeProvider) {
        $routeProvider.when('/contacts', {
            templateUrl : 'partials/contacts.html',
            controller : 'ContactsController'
        });
        $routeProvider.when('/contacts/:contactId', {
            templateUrl : 'partials/contact.html',
            controller : 'ContactController'
        });
        $routeProvider.otherwise({redirectTo : '/contacts'});
    });
