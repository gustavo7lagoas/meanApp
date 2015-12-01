angular.module('myApp').controller('ContactsController',
   function($scope, $http) {

        $scope.contacts = [];
        $scope.filter = '';

        $http.get('/contacts')
        .success(function(data) {
            $scope.contacts = data;
        })
        .error(function(statusText) {
            console.log(statusText);
        });
});
