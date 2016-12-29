angular.module( 'header', [] ).directive( 'headertop', ['$location',
function( Data, $location ) {

  function link( $scope, element, attr ) {

  }


  return {
  	link: link,
    restrict: 'E',
    transclude: true,
    templateUrl: 'directives/header/header.html'
  };

}]);
