const express = require('express');
const app = express();
const port = 41000;

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.set('views', __dirname + '/public');

app.use(express.static("public"));

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});

app.get('/', (req, res) => {
	res.render('main.html');
});
  
app.get('/storage_1', (req, res) => {
	res.render('storage_1.html');
});

app.get('/storage_2', (req, res) => {
	res.render('storage_2.html');
});

app.get('/find_1', (req, res) => {
	res.render('find_1.html')
})

app.get('/find_2', (req, res) => {
	res.render('find_2.html')
})