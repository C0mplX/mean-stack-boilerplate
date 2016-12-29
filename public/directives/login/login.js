angular.module( 'login', [] ).directive( 'login', [ 'Data', '$location',
function( Data, $location ) {

  function link( $scope, element, attr ) {
    $scope.error = false;
    $scope.user = {};


    $scope.login = function( user ) {
    /**
    * @function for login in the user.
    * @param user obj
    * @uses Factory Data
    * @uses /api/login
    */

      $scope.submitting = true;
      $scope.error = false;
      Data.post( 'login', {email: user.email, password: user.password} ).then( function( res ) {
        $scope.submitting = false;
        console.log( res );
        if( res.success == true ) {
          // All is good, set the localStorage and route to the stories page
          window.localStorage.setItem( "token", res.message );
          $location.path( '/proteced' );
        }

        if( res.status != 200 && res.success != true ) {
          /**
          * Handles all erorrs from the server
          */
          $scope.error = true;
          $scope.errorMessages = res.data.message;
        }
      } );

    }

  }


  return {
  	link: link,
    restrict: 'E',
    transclude: true,
    templateUrl: 'directives/login/login.html'
  };

}]);
