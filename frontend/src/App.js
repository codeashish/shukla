import './App.css';
import React, { useState } from 'react';
import axios from 'axios';
function App() {
	const [rollno, setrollno] = useState('');
	const [data, setData] = useState({});
	function change(e) {
		setrollno(e.target.value);
	}
	async function submit(e) {
		e.preventDefault();
		setData({});

		let res = await axios.post('/rollno', { data: rollno });

		setData(res.data);
	}

	return (
		<div className="App">
			<h1 className="m-4">Enter Roll Number </h1>

			<div className="form-group">
				<input
					type="text"
					id="search"
					placeholder="Enter RollNumbers seperated by commas"
					className="form-control form-control-lg "
					onChange={(e) => change(e)}
				/>
				<div className="col-md-12 text-center">
					<input type="submit" onClick={(e) => submit(e)} className="m-4 btn btn-danger btn-lg  " />
				</div>
			</div>
			{Object.keys(data).length !== 0 && (
				<div>
					<table border={2} cellPadding={5} className="container">
						<thead>
							<tr>
								<td>Roll no</td>
								<td style={{ color: 'black' }}>Result</td>
							</tr>
						</thead>
						<tbody>
							{data &&
								Object.keys(data).map(function (element, index) {
									return (
										<tr key={index}>
											<td style={{ color: 'black' }}>{element}</td>
											<td style={{ color: 'black' }}>{data[element]}</td>
										</tr>
									);
								})}
						</tbody>
					</table>
				</div>
			)}
		</div>
	);
}

export default App;
