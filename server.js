const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());



app.post('/rollno', async (req, res) => {
	let rollArr = req.body.data.split(',');

	let arr = [];
	for (let i = 0; i < rollArr.length; i++) {
		arr.push((await axios.get(`https://terriblytinytales.com/testapi?rollnumber=${rollArr[i]}`)).data);
	}
	try {
		let result = {};
		for (let i = 0; i < rollArr.length; i++) {
			result[rollArr[i]] = arr[i];
		}
		res.send(result);
	} catch (error) {
		console.log(error);
	}
});

app.listen(port, () => {
	console.log('Port is working on 8080');
});
