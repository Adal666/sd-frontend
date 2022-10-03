import express  from 'express';
import path from 'path';
import morgan  from 'morgan';
import mysql  from 'mysql';
import myConnection  from 'express-myconnection';

const app = express();

//importing routes
import customerRoutes from './routes/customer';

//settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: '',
    port :3306,
    database: 'crudnodejsmysql'
},'single'));
app.use(express.urlencoded({extended: false}))

//routes
 app.use('/', customerRoutes);

 //statics files
 app.use(express.static(path.join(__dirname,'public'))); 

//starting the server
app.listen(app.get('port'), ()=>{
console.log('Server on port 3000');
});