require( 'angular/angular' );
require( 'angular-route/angular-route' );
require( 'angular-moment' );
require( './factory/data' );
require( './controllers/controllers' );
require( './directives/directives' );

angular.module( 'app', ['ngRoute', 'controllers', 'directives', 'angularMoment', 'Data' ] )

  /**
  * Config the app
  */
  .config(['$routeProvider','$locationProvider',
  function( $routeProvider, $locationProvider ) {

    $routeProvider.
    when( '/', {
      templateUrl: 'templates/home.html',
      controller: 'homeCtrl'
    } )
    .when( '/login', {
        templateUrl: 'templates/login.html',
    } )
    .when( '/signup', {
        templateUrl: 'templates/signup.html'
    } )

    // protected routes
    .when( '/proteced', {
        templateUrl: 'templates/protected/home.html'
    } )

    .otherwise( '/login' );

  }])

  .run(['$rootScope', '$location', 'Data', function ($rootScope, $location, Data ) {

    $rootScope.$on('$routeChangeStart', function (event, next, current) {

        var nextUrl = next.$$route.originalPath;

        // Un protected routes should go here.
        if( nextUrl == '/signup'  ) {

        }else {

          // If the user issnot logged in we check if the api token exists
          Data.get('auth').then( function( res ) {
            if( res.status == 401 ) {
              // No access token, denie access
              $location.path('/login');

            }else if( res.success == true ) {

              if( nextUrl == '/proteced' ) {

              }else {
                $location.path('/stories');
              }

            }
          } );
        }
    });

  }]);
