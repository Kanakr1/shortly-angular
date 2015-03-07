(function(angular){

  angular.module('shortly')
    .directive('shortenedLink', function(Links){
      return {
        restrict: 'E',
        scope: {
          links: '='
        },
        templateUrl: 'app/linktemplate.html'
      };
    });

})(window.angular);
