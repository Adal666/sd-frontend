"use strict";
async function listCustomer(req, res)
{
	req.getConnection((err, conn) =>
	{
		conn.query('SELECT * FROM customer', (err, customers) =>
		{
			if (err)
			{
				res.json(err);
			}
			res.render('customers', {
				data: customers
			});
		});
	});
}

async function saveCustomer(req, res)
{
	const data = req.body;

	req.getConnection((err, conn) =>
	{
		conn.query('INSERT INTO customer set ?', [data], (err, customer) =>
		{
			console.log(customer);
			res.redirect('/');
		});
	});
}

async function deleteCustomer(req, res)
{
	const {id} = req.params;

	req.getConnection((err, conn) =>
	{
		conn.query('DELETE FROM customer WHERE id = ?', [id], (err, rows) =>
		{
			res.redirect('/');
		});
	});
}

export default { listCustomer, saveCustomer, deleteCustomer }
