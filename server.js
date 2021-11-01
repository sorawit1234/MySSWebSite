//Install express server
// const compression = require('compression')
const express = require('express');
const path = require('path');

const app = express();
app.use(compression())
// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist'));
app.listen(process.env.PORT || 8080);

// Start the app by listening on the default Heroku po