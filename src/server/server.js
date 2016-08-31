const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/../client/app'));

/*
 *app.get('/', function(req, res){
 *  res.send('Successfully contacted Ross Janky Server');
 *})
 */
/*
 *app.get('/api/delimiters', function(req, res) {
 *  res.send('Get request Successful');
 *});
 */
require('./utils/middleware.js')(app, express);
require('./utils/helpers.js');
require('./utils/router.js')(app);

const dir = __dirname + '/../client/app';
app.listen(port, function(){
  console.log('Server running on port: ', port);
});

