var mongoose     = require('mongoose');
var hash         = require( 'password-hash' );

var users        = require( '../database/schema/users.js' );

var register  = module.exports = {};
var User = mongoose.model( "User", users.Schema );
// Build the user modal
register.doSignup = function( req, res ) {
  // Get the req params
  var body = req.body;

  // Check if fields is empty
  req.check( 'email', 'Wrong email format' ).notEmpty().isEmail();
  req.check( 'nickname', 'Fill in nickname' ).notEmpty();
  req.check( 'password', 'fill in password' ).notEmpty();

  req.getValidationResult().then(function(result) {
    if( !result.isEmpty() ) {
      res.status(400);
      res.json( { error: true, message: result.mapped() } );
    }else {

      // check if a user exists in the database.
      User.findOne( {email: body.email}, function( err, user ) {
        if( user ) {
          // User exists return
          res.status(400);
          res.json( { success: false, message: { message: { msg: 'User Exists' } } } );
        }else {

          // User does not exists, create a new one and return response.
          var user = new User({
            nickname: body.nickname,
            email: body.email,
            password: hash.generate(body.password)
          });

          user.save( function( err, user ) {
            if( err ) {
              res.status(400);
              res.json( {success: false, message: { message: { msg: 'Could not create user' } } } );
            } else {
              res.status(200);
              res.json( {success: true, message: 'User Created'} );
            }
          } );

        }
      } )
    }
  });
}
