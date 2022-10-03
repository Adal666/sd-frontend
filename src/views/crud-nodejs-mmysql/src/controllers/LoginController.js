"use strict";
import bcrypt from 'bcrypt';

async function login(req, res)
{
	if (!req.session.loggedin)
	{
		res.render('login/index');
	}
	else
	{
		res.redirect('/');
	}
	res.render('login/index');
}

async function auth(req, res)
{
	const data = req.body;

	req.getConnection((err, conn) =>
	{
		conn.query('SELECT * FROM users WHERE email = ?', [data.email], (err, userdata) =>
		{
			if (userdata.length > 0)
			{
				userdata.forEach(element =>
				{
					bcrypt.compare(data.password, element.password, (err, isMatch) =>
					{

						if (!isMatch)
						{
							res.render('login/index', {error: 'Error: incorrect password !'});
						}
						else
						{
              //redirige cuando se logea el usuario
							req.session.loggedin = true;
							req.session.name = element.name;

							res.redirect('/');
						}

					});

					/**/
				});
			}
			else
			{
				res.render('login/index', {error: 'Error: user not exists !'});

			}
		});
	});
}

async function register(req, res)
{
	if (!req.session.loggedin)
	{
		res.render('login/register');
	}
	else
	{
		res.redirect('/');
	}
}

async function storeUser(req, res)
{
	const data = req.body;

	req.getConnection((err, conn) =>
	{
		conn.query('SELECT * FROM users WHERE email = ?', [data.email], (err, userdata) =>
		{
			if (userdata.length > 0)
			{
				res.render('login/register', {error: 'Error: user already exists !'});
			}
			else
			{
				bcrypt.hash(data.password, 12).then(hash =>
				{
					data.password = hash;
					req.getConnection((err, conn) =>
					{
						conn.query('INSERT INTO users SET ?', [data], (err, rows) =>
						{
							req.session.loggedin = true;
							req.session.name = data.name;
							res.redirect('/');
						});
					});
				});
			}
		});
	});
}

async function logout(req, res)
{
	if (req.session.loggedin)
	{
		req.session.destroy();
	}
	res.redirect('/');

}

export default {login, logout, register, storeUser, auth};
