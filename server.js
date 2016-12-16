var express  = require( 'express' );
var path     = require( 'path' );
var bp       = require('body-parser');
var root     = __dirname;
var port     = 8000;
var app      = express();


app.use( express.static( path.join( root, 'client' )));
app.use( express.static( path.join( root, 'bower_components' )));
app.use( bp.json() );

require('./server/config/mongoose.js')

var routes = require('./server/config/routes.js');
routes(app);

app.listen( port, function() {
  console.log( `discussion board server running on port ${ port }` );
});
