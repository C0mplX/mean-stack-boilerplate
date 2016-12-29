angular.module( 'signup', [] ).directive( 'signup', [ 'Data',
function( Data ) {

  function link( $scope, element, attr ) {

    $scope.error = false;
    $scope.user = {};

    $scope.signup = function( user ) {
    /**
    * @function for signing up a new user
    * @param user obj
    * @uses Data
    */

      $scope.submitting = true;
      $scope.error = false;
      $scope.success = false;

      Data.post( 'signup', {
        nickname: user.nickname,
        email: user.email,
        password: user.password
      } ).then( function( res ) {

        $scope.submitting = false;

        if( res.success == true ) {
          // Login in the user.
          $scope.success = true;
          $scope.successMessage = res.message;
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
    templateUrl: 'directives/signup/signup.html'
  };

}]);
