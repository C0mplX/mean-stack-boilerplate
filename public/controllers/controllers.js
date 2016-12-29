/**
*
* This file holds all the controllers. Simply inject them as a dependenci and you are good to go.
* @version 1.0
*
* @uses require()
*/
require( './home/home' );
angular.module( 'controllers', ['home'] );
