angular.module('myApp').controller('ContactController',
    function($scope, $routeParams, Contact) {

        $scope.contact = new Contact();
        $scope.message = {};
        $scope.saveContact = saveContact;

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

        function saveContact() {
            $scope.contact.$save().
                then(function(data) {
                    console.log('Contact saved successfully');
                    $scope.message = {
                        'text' : 'Contact saved successfully'
                    }
                    // Clean form
                    $scope.contact = new Contact();
                })
                .catch(function(error) {
                    $scope.message = {'text' : 'Could not save the contact'};
                });
        };

        if($routeParams.contactId) {
            getContact();
        };

});
