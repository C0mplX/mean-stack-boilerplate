angular.module( 'sidebar', [] ).directive( 'sidebar', [ '$rootScope', '$location',
function( $rootScope, location ) {

  function link( $scope, element, attr ) {
    $scope.selectedSideBarNav = location.path();

    $scope.logout = function() {
      window.localStorage.removeItem( "token" );
      location.path( '/login' );
    }
  }


  return {
  	link: link,
    restrict: 'E',
    transclude: true,
    templateUrl: 'directives/sidebar/sidebar.html'
  };

}]);
