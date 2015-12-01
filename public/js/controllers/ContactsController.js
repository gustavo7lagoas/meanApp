angular.module('myApp').controller('ContactsController',
   function($scope, $resource) {

        $scope.contacts = [];
        $scope.filter = '';

        $scope.init = function() {
            allContacts();
        };

        var Contact = $resource('/contacts');

        function allContacts() {

            Contact.query(
                function(data) {
                    $scope.contacts = data;
                },
                function(statusText) {
                    console.log('It was not possible to get the contacts');
                    console.log(statusText);
                }
            );

        };
        $scope.init();
});
