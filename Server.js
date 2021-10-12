const express = require('express');
const path = require('path');


const app = express();

const port = process.env.port || 3001;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));

require('./Routes/apiRoutes')(app);
require('./Routes/htmlRoutes')(app);

app.listen(PORT, function(){
    console.log('App is listening on port:' + port);
})