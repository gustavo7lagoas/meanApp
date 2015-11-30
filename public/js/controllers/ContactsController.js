angular.module('myApp').controller('ContactsController',
   function($scope) {
        $scope.total = 0;
        $scope.increment = function() {
            $scope.total++;
        };
        $scope.contacts = [
            {
                _id : 1,
                'name' : 'first contact1',
                'email' : 'contact1@myapp.com'
            },
            {
                _id : 2,
                'name' : 'second contact2',
                'email' : 'contact2@myapp.com'
            },
            {
                _id : 3,
                'name' : ' third contact3',
                'email' : 'contact3@myapp.com'
            }
        ];
        $scope.filter = '';
});
