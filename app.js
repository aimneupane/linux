const express = require('express');
const bodyParser = require('body-parser');
const app = express();


app.use('/',express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));


app.get('/',(req, res, next)=>{
   res.render('index',{title:'home'});
});
module.exports = app;
