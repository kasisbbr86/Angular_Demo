  (function(angular) {
  'use strict';
angular.module('docsTemplateUrlDirective', [])
  .controller('Controller', ['$scope', function($scope) {
      console.log('controler');
    $scope.customer = {
      name: 'Naomi',
      address: '1600 Amphitheatre'
    };
  }])
  .directive('myCustomer', function() {
    return {
        restrict: 'E',
      templateUrl: 'my-customer.html'
      //template: 'Name: {{customer.name}} Address: {{customer.address}}'
    };
  });
})(window.angular);