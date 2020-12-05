const express = require ('express');
const path = require ('path');
const morgan = require ('morgan');
const mysql = require  ('mysql');
const Connection= require ('express-myconnection');
const host = 'localhost' ;
const app = express ();

app.set('port',process.env.PORT || 1337);
app.set('view engine', 'ejs','hbs');
app.set('views',path.join(__dirname, 'views'));

app.use (morgan('dev'));
app.use (Connection(mysql, {
      host:'localhost',
        user:'root',
        password:'',
        port : 3306,
        database:'shopdb'
    },'single'));

app.use(express.urlencoded({extended:false}));

const controlRoutes = require ('./routes/idx');

app.use('/', controlRoutes);

app.use(express.static(path.join(__dirname, 'public')))

app.listen(app.set('port'), ()=>{
console.log(`Servidor web iniciado en http://${host}:1337/`);
 
});


