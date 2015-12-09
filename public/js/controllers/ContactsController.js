angular.module('myApp').controller('ContactsController',
   function(Contact, $scope) {

        $scope.contacts = [];
        $scope.filter = '';
        $scope.message = {text : ''};

        $scope.init = function() {
            allContacts();
        };

        function allContacts() {

            Contact.query(
                function(data) {
                    $scope.contacts = data;
                    $scope.message = {};
                },
                function(statusText) {
                    $scope.message = {
                        text : 'It was not possible to get the contacts'
                    }
                    console.log(statusText);
                }
            );

        };

        $scope.init();

        $scope.remove = function(contact) {
            Contact.delete({contactId : contact._id},
                allContacts,
                function(error) {
                    $scope.messagesage = {
                        text : 'Could not remove the contact'
                    }
                    console.log(error);
                }
            );
        };
});
