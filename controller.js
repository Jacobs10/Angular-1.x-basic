angular.module('carApp', [])
  .controller('carEditCtrl', carEditCtrl);

function carEditCtrl($scope) {
  $scope.cars = cars;
  $scope.startAdd = startAdd;
  $scope.cancel = cancel;
  $scope.add = add;
  $scope.startEdit = startEdit;
  $scope.save = save;
  $scope.startRemove = startRemove;
  $scope.remove = remove;
  $scope.getSelected = getSelected;
  $scope.showReviews = false;
  $scope.showReviewForm = false;

  var Review = function(){
           return {
             body: null,
             stars: 5,
             author: null,
             isEmpty: function(){
               return !(this.content || this.author);
             },
           };
         };

$scope.review = new Review;

$scope.addReview = function(reviews){
  reviews.push($scope.review);
  $scope.review = new Review;
}

  var selected = -1;
  setView('list');

  function setView(view) {
    $scope.view = view;
  }

  function startAdd() {
    $scope.carBox = '';
    setView('add');
  }

  function cancel() {
    setView('list');
  }

  function add() {
    $scope.cars.push({name: $scope.carBox, price: 30, reviews:[]});
    setView('list');
  }

  function startEdit(index) {
    selected = index;
    $scope.carBox = $scope.cars[index].name;
    setView('edit');
  }

  function save() {
    $scope.cars[selected].name = $scope.carBox;
    setView('list');
  }

  function startRemove(index) {
    selected = index;
    setView('delete');
  }

  function remove() {
    $scope.cars.splice(selected, 1);
    setView('list');
  }

  function getSelected() {
    return cars[selected].name;
  }
}
