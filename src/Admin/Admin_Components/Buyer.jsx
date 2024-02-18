import React, { useState, useEffect } from 'react';
import Admin_Nav from '../Admin_Nav/Admin_Nav';
import Admin_Sidebar from '../Admin_Nav/Admin_Sidebar';
import './Dash.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Dasboard.css";


const Buyer = () => {
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
					<>
						{/* <div className=' tw-ml-[250px] md:tw-mt-[-1100px] tw-mt-[100px] p-3 '> */}

						<div className=' tw-ml-[300px]'>
							<h1>hello</h1>
							<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae eaque rem voluptatibus repudiandae! Hic eligendi ex nesciunt ducimus optio sequi, nobis quo consequuntur ipsum aliquid laborum exercitationem maiores! Laudantium laboriosam delectus reiciendis voluptatum magni expedita vel repellendus sunt! Laborum magnam ducimus fugit dolor exercitationem atque obcaecati in repudiandae eligendi sunt. Perspiciatis pariatur exercitationem sed nisi itaque ipsum maiores dicta architecto. Magnam qui voluptatibus sunt ipsam rem, corporis ex aperiam vel commodi iusto quam a dignissimos magni quisquam, deleniti nemo nostrum, accusamus deserunt in vitae nihil soluta. Blanditiis laboriosam, explicabo adipisci cupiditate fugit dicta optio ex in, dolore alias maiores est.</p>
						</div>
						{/* </div> */}
					</>

				)}
			</div>



		</>
	);


}

export default Buyer;
