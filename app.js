var currencyApp = angular.module('currencyApp', ['ngRoute', 'ngResource']);

currencyApp.config(function($routeProvider){
    $routeProvider

    .when('/', {
        templateUrl: 'pages/home.html',
        controller: 'mainController'
    })
    .when('/convert', {
        templateUrl: 'pages/convert.html',
        controller: 'currencyController'
    })
});


currencyApp.service('currencyService', function(){
    this.moneyEnter = "";
    this.currencyFrom = "";
    this.currencyTo = "";
    // this.APPID = "a1df6ac2e69dcf304a245d3a4a2394aa";
    this.convertCurrency = "USD";
});

currencyApp.controller('mainController', ['$scope', 'currencyService', function($scope, currencyService){
    $scope.currencyFrom =  currencyService.currencyFrom;
    $scope.currencyTo = currencyService.currencyTo;
    $scope.moneyEnter = currencyService.moneyEnter;
    
    $scope.$watch('currencyFrom', function(){
        currencyService.currencyFrom = $scope.currencyFrom;
    });
    $scope.$watch('currencyTo', function(){
        currencyService.currencyTo = $scope.currencyTo;
    });
    $scope.$watch('moneyEnter', function(){
        currencyService.moneyEnter = $scope.moneyEnter;
    });
   
}]);
// currencyApp.$inject = ['$scope', 'currency'];

currencyApp.controller('currencyController', ['$scope', '$resource', '$routeParams', 'currencyService', function($scope, $resource, $routeParams, currencyService){
    
    $scope.currencyFrom = currencyService.currencyFrom;
    $scope.currencyTo = currencyService.currencyTo;
    $scope.moneyEnter = currencyService.moneyEnter;

    $scope.country = currencyService.country;
    $scope.convertCurrency = "USD";
    $scope.currencyFrom = currencyService.currencyFrom;
    
    // $scope.days = $routeParams.days || 2;
    
    $scope.currencyAPI = $resource("https://api.exchangeratesapi.io/latest?symbols=");
   
    $scope.currencyResult = $scope.currencyAPI.get({ q: $scope.currencyFrom, currencyTo:$scope.currencyTo } );
    console.log($scope.currencyResult);
    console.log($scope.currencyFrom);
    console.log($scope.currencyTo);
    console.log($scope.moneyEnter);
    console.log('hii');
    
    // $scope.convertToCelsius = function(degK) {
    //     return degK - 273;
    // }

    // $scope.convertCurrency = function(){
    //     var from = document.getElementById("from").value;
    //     var to = document.getElementById("to").value;
    // }
    
    $scope.convertToAnotherCurrency = function(anothercurrency){
       return anothercurrency / 2; 
    }
    $scope.convertToUsd = function(usd) { 
      
        return (usd * 2);
        
    };
}]);







