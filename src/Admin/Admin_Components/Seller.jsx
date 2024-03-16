import React, { useState, useEffect } from 'react';
import Admin_Nav from '../Admin_Nav/Admin_Nav';
import Admin_Sidebar from '../Admin_Nav/Admin_Sidebar';
// import './Dash.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import "./Dasboard.css";


const Seller = () => {

	const [loading, setLoading] = useState(true);



	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 500)
	}, []);

	return (
		<>
			<Admin_Nav />
			<div >
				<div className='sticky-sidebar'>
					<Admin_Sidebar className="" />
				</div>
				{loading ? (
					<div className="loader">
						<div class="spinner"></div>
					</div>
				) : (

					<h1>hello</h1>
				)}
			</div>



		</>
	);

}

export default Seller;

