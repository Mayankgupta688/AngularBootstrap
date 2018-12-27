
  var myModule = angular.module("myModule", ['ngRoute']);

  myModule.controller('indexController', ['$scope', '$http', indexController]);
  myModule.controller('sampleController', ['$scope', '$http', sampleController]);
  
  myModule.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider.when('/', {
      templateUrl: 'index/index.vash',
      controller: 'indexController'
    }).when('/sample', {
      templateUrl: 'index/sample.vash',
      controller: 'sampleController'
    }).otherwise({
      redirectTo: '/'
    });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });

  }]);

  angular.bootstrap(document, ['myModule']);
