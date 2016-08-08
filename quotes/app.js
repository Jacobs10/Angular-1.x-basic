angular.module('quoteBook', [])
.controller('mainCtrl', function($scope, dataService){
  $scope.quote = {};
  $scope.quotes = dataService.getData();
  $scope.showAddQuote = false;
  $scope.showRemoveQuote = false;
  $scope.showFilterQuotes = false;

  $scope.toggleAddQuote = function(){
    $scope.showAddQuote = !$scope.showAddQuote;
    $scope.showRemoveQuote = false;
    $scope.showFilterQuotes = false;
  };

  $scope.toggleRemoveQuote = function(){
    $scope.showRemoveQuote = !$scope.showRemoveQuote;
    $scope.showAddQuote = false;
    $scope.showFilterQuotes = false;
  };

  $scope.toggleFilterQuotes = function(){
    $scope.showFilterQuotes = !$scope.showFilterQuotes;
    $scope.showAddQuote = false;
    $scope.showRemoveQuote = false;
  }

  $scope.addQuote = function(){
    dataService.addData($scope.quote);
    $scope.quotes = dataService.getData();
    $scope.showAddQuote = false;
    $scope.quote = {};
  };

  $scope.removeQuote = function(){
    dataService.removeData($scope.removeQuoteNum);
    $scope.showRemoveQuote = false;
    $scope.removeQuoteNum = null;
  }
})
.factory('dataService', function(){
  var quotesAPI = {};

  var quotes = [
    { text: 'The world will not accept dictatorship or domination.', author: 'Mikhail Gorbachev'},
    { text: 'Nothing is so permanent as a temporary government program.', author: 'Milton Friedman'},
    { text: 'Voters quickly forget what a man says.', author: 'Richard Nixon'},
    { text: 'If there\'s anything a public servant hates to do it\'s something for the public.', author: 'Kin Hubbard'}
  ];

  quotesAPI.getData = function(){
    return quotes;
  }

  quotesAPI.addData = function(quote){
    if(quote && quote.text && quote.author && Object.keys(quote).length === 2){
      quotes.push(quote);
    }
  }

  quotesAPI.removeData = function(number){
      quotes.splice(number-1, 1);
  }

  return quotesAPI;
})
