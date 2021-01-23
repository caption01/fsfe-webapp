const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send('Hello Bom');
})

app.listen(3000, () => {
	console.log('server is runing at 3000')
});
