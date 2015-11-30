angular.module('myApp').controller('ContactController',
    function($scope, $routeParams) {
        console.log($routeParams.contactId);
});
