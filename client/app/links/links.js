angular.module('shortly.links', [])

.controller('LinksController',['$scope', 'Links', function ($scope, Links) {
  // Your code here
  var findLinks = function(){
    Links.findLinks().then(function(){
      $scope.links = Links.getLinks();
    });
  };
  findLinks();

  // $scope.redirect = function(link){
  //   Links.redirect(link);
  // };

}]);
