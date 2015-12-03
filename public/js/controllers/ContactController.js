angular.module('myApp').controller('ContactController',
    function($scope, $routeParams, $resource) {

        $scope.contact = {};
        $scope.message = {};

        var Contact = $resource('contacts/:contactId');

        function getContact(contact) {
            Contact.get({contactId : $routeParams.contactId},
                function(data) {
                    $scope.contact = data;
                },
                function(error) {
                    $scope.message = {
                        'text' : 'Could not get the contact!'
                    }
                    console.log(error);
                }
            )
        };

        getContact();

});
