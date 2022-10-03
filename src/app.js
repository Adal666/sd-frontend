"use strict";
import path from 'path';
import {fileURLToPath} from 'url';
import config from "./config.js";
import express from "express";
import {engine} from 'express-handlebars'; //express-handlebars
import myConnection from 'express-myconnection';
import mysql from 'mysql';
import session from 'express-session';
import bodyParser from 'body-parser';
import loginRoutes from './routes/login.js';
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const frontend = `${__dirname}/public/dashboard.html`;

app.set('views', `${__dirname}/views`);
app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(myConnection(mysql,
 {
		host: 'localhost',
 		user: 'root',
 		password: '',
 		port: 3306,
 		database: 'nodelogin'
 }));

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

app.use(loginRoutes);

app.use("/dashboard", express.static(path.join(__dirname, 'public')));

app.get('*', (req, res) =>
{
    if (req.session.loggedin) res.redirect("/dashboard");
    else res.redirect("/login");
})


app.listen(config.port, () =>
{
	console.log(`listening on port ${config.port}`);
});
