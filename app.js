const express = require('express');
const app = express();
const port = 8080;

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.set('views', __dirname + '/public');

app.use(express.static("public"));

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});

app.get('/', (req, res) => {
	printRequest(req);
	res.render('main.html');
});

app.get('/storage_1', (req, res) => {
	printRequest(req);
	res.render('storage_1.html');
});

app.get('/storage_2', (req, res) => {
	printRequest(req);
	res.render('storage_2.html');
});

app.get('/storage_3', (req, res) => {
	printRequest(req);
	res.render('storage_3.html');
});

app.get('/find_1', (req, res) => {
	printRequest(req);
	res.render('find_1.html');
});

app.get('/find_2', (req, res) => {
	printRequest(req);
	res.render('find_2.html');
});

function printRequest(req) {
	console.log(
		req.ip.substring(7),
		'HTTP', req.httpVersion,
		req.method,
		`${req.url}`,
	);
}