/**
*
* This file holds all the directives. Simply inject them as a dependenci and you are good to go.
* @version 1.0
*
* @uses require()
*/
require( './login/login' );
require( './signup/signup' );
require( './header/header' );
require( './sidebar/sidebar' );
angular.module( 'directives', ['login', 'signup', 'header', 'sidebar'] );
