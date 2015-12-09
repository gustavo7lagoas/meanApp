angular.module('myApp').factory('Contact',
    function($resource) {
        return $resource('contacts/:contactId');
});
