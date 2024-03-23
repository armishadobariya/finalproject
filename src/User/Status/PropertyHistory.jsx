// import React, { useState, useEffect } from 'react';
// import './PropertyHistory.css';
// import img from '../../Assests/Image/Home1/reg_bg.jpeg';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';
// import Nav from '../Nav/Nav';
// import { Footer } from '../Footer/Footer';
// import { pendingStatusUrl } from '../Components/Api';
// import axios from 'axios';

// export const PropertyHistory = () => {

// 	const [propertyData, setPropertyData] = useState([]);

// 	const getPendingProperty = async () => {
// 		try {
// 			const token = localStorage.getItem('token');
// 			const response = await axios.get(pendingStatusUrl, {
// 				headers: {
// 					Authorization: `Bearer ${token}`,
// 				},
// 			});

// 			if (response.status === 200) {
// 				const data = response.data.allProperty;
// 				console.log('data:', data);
// 				// if (Array.isArray(data)) {
// 				setPropertyData(data);
// 				// } else {
// 				// 	console.error('Data received is not an array:', data);
// 				// }
// 			} else {
// 				console.error('Failed to fetch data:', response.status);
// 			}
// 		} catch (error) {
// 			console.error("Error fetching properties:", error);
// 		}
// 	}

// 	useEffect(() => {
// 		getPendingProperty();
// 	}, []);

// 	return (
// 		<>
// 			<Nav />
// 			<div className=' lg:tw-p-10'>

// 				<div className='tw-grid  shadow-lg lg:tw-p-5 tw-rounded-md '>
// 					<div>
// 						<div >
// 							<div className=' tw-flex tw-place-center tw-font-bold tw-text-xl'>
// 								<h1>Property History</h1>
// 							</div>
// 							<div className=' tw-flex  tw-justify-end '>
// 								<label htmlFor="status" className="tw-font-semibold tw-mr-2">Select Status:</label>

// 								<select name="status" id="status" style={{ outline: 'none' }}>Select status
// 									<option value="All">All</option>
// 									<option value="verified">Verified</option>
// 									<option value="pending">Pending</option>
// 									<option value="rejected">Rejected</option>
// 								</select>
// 							</div>
// 						</div>
// 						<hr className='tw-mt-5' />

// 						{/* <div className='tw-mt-5 border-1 rounded-2 p-3'>
//                             <div className=' tw-flex'>
//                                 <h1 className=' tw-font-semibold'>Property Upload Date:</h1><p className='tw-mt-[-2px] tw-ml-2'>12/02/2024</p>
//                             </div>
//                             <div className=' tw-flex'>
//                                 <h1 className='tw-mt-2 tw-font-semibold'>Property Upload For:</h1><p className='tw-mt-1.5 tw-ml-2'> Rent or Sale</p>
//                             </div>
//                             <div className=' tw-flex'>
//                                 <h1 className='tw-mt-2 tw-font-semibold'>Property Type:</h1><p className='tw-mt-1.5 tw-ml-2'>Appartment</p>
//                             </div>
//                             <div className=' tw-flex'>
//                                 <h1 className='tw-mt-2 tw-font-semibold'>State:</h1><p className='tw-mt-1.5 tw-ml-2'> Gujrat</p>
//                             </div>
//                             <div className=' tw-flex'>
//                                 <h1 className='tw-mt-2 tw-font-semibold'>City:</h1><p className='tw-mt-1.5 tw-ml-2'>Surat</p>
//                             </div>
//                             <div className=' tw-flex'>
//                                 <h1 className='tw-mt-2 tw-font-semibold'>Price:</h1><p className='tw-mt-1.5 tw-ml-2'> 7000 per-Month</p>
//                             </div>
//                             <div className=' tw-flex'>
//                                 <h1 className='tw-mt-2 tw-font-semibold'>Size:</h1><p className='tw-mt-1.5 tw-ml-2'>800 Sq. Ft.</p>
//                             </div>
//                             <div className='border-1 rounded-2 p-2 tw-mt-3 tw-flex' >
//                                 <h1 style={{ borderLeft: '7px solid orange' }}>Status:</h1><p className='tw-font-semibold tw-mt-[-3px] tw-ml-2'>Pending</p>
//                             </div>
//                             <div className=' tw-grid tw-justify-end tw-mt-3'>
//                                 <button className='tw-font-semibold border-1 rounded-2 p-2 hover:tw-text-red-500 hover:tw-border-red-500'>Cancel Adding</button>
//                             </div>
//                         </div> */}

// 						<div class="col-lg-12 col-md-12 tw-px-4 tw-mt-4">
// 							<div class="card tw-mb-4 tw-border-0 tw-shadow">
// 								{propertyData.map((property, index) => (

// 									<div key={index} class="row g-0 p-3 align-items-center">
// 										<div class="col-md-3 mb-lg-0 mb-md-0 mb-3">
// 											<img src={property.properyImage[0]} class="img-fluid rounded" />
// 										</div>

// 										<div class="col-md-9 px-lg-3 px-md-3 px-0">
// 											{/* <h2 class=" font-semibold text-xl">{property.address}</h2> */}
// 											<h4 className=' font-semibold mb-4'>Green Green City - Gold</h4>
// 											<div className="border bg-light p-3 rounded mb-3">
// 												<div class="features ">
// 													<div className='container '>
// 														<div className='row mb-3'>
// 															<div className='col-md-3'>
// 																<h5 className=' font-semibold tw-mt-2'>Square.Ft</h5>
// 																{property.size}
// 															</div>
// 															<div className='col-md-3'>
// 																<h5 className=' font-semibold tw-mt-2'>Main Entrance Facing</h5>
// 																{property.faching}
// 															</div>
// 															<div className='col-md-3'>
// 																<h5 className=' font-semibold tw-mt-2'>Locality</h5>
// 																{property.city}
// 															</div>
// 															<div className='col-md-3'>
// 																<h5 className=' font-semibold tw-mt-2'>BHK</h5>
// 																{property.houseType}
// 															</div>

// 														</div>
// 														<div className='row mb-3'>

// 															<div className='col-md-3'>
// 																<h5 className=' font-semibold tw-mt-2'>Type</h5>
// 																{property.propertyType}
// 															</div>
// 															<div className='col-md-3'>
// 																<h5 className=' font-semibold tw-mt-2'>Corner Plot</h5>
// 																Yes
// 															</div>
// 															<div className='col-md-3'>
// 																<h5 className=' font-semibold'>Boundary Hall</h5>
// 																No
// 															</div>
// 															<div className='col-md-3'>
// 																<h5 className=' font-semibold'>Parking</h5>
// 																Yes
// 															</div>
// 														</div>


// 													</div>

// 												</div>

// 											</div>
// 											<div className='d-flex'>
// 												<div className='flex-grow-1'>
// 													<div className="facilities tw-ml-1 flex">
// 														<p className='tw-mt-1 tw-font-semibold tw-text-lg'>Status :</p>
// 														<div className='tw-ml-2'>
// 															<h6 className="tw-mb-3 tw-p-2 tw-ml-2 tw-rounded-md tw-w-20 tw-bg-white tw-text-red-600 tw-border-1 hover:tw-bg-red-600 hover:tw-text-white tw-border-red-600 " style={{ color: 'red', border: '1px solid red' }}>pending</h6>
// 														</div>
// 													</div>
// 												</div>
// 												<div className='ml-auto flex'>
// 													<p className='mr-3'><EditIcon></EditIcon></p>
// 													<p className='ml-3'><DeleteIcon /></p>
// 												</div>


// 											</div>
// 										</div>
// 									</div >
// 								))}

// 							</div >


// 						</div >

// 					</div>

// 				</div >
// 			</div >

// 			<Footer />

// 		</>
// 	);
// }




import React, { useState, useEffect } from 'react';
import './PropertyHistory.css';
import img from '../../Assests/Image/Home1/reg_bg.jpeg';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Nav from '../Nav/Nav';
import { Footer } from '../Footer/Footer';
import { getUserAllPropertyUrl } from '../Components/Api';
import axios from 'axios';

export const PropertyHistory = () => {
	const [properties, setProperties] = useState([]);

	const getPendingProperty = async () => {
		try {
			const token = localStorage.getItem('token');

			const response = await axios.get(getUserAllPropertyUrl, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			console.log("response:", response.data.propertyData);

			if (response.status === 200) {
				const data = response.data.propertyData;
				console.log('data: ', data);
				setProperties(data);
			}
		} catch (error) {
			console.error("fetch all property:", error.message);
		}
	}

	useEffect(() => {
		getPendingProperty();
	}, []);

	return (
		<>
			<Nav />
			<div className=' lg:tw-p-10'>
				<div className='tw-grid  shadow-lg lg:tw-p-5 tw-rounded-md '>
					<div>
						<div>
							<div className=' tw-flex tw-place-center tw-font-bold tw-text-xl'>
								<h1>Property History</h1>
							</div>
							<div className=' tw-flex  tw-justify-end '>
								<label htmlFor="status" className="tw-font-semibold tw-mr-2">Select Status:</label>
								<select name="status" id="status" style={{ outline: 'none' }}>
									<option value="All">All</option>
									<option value="verified">Verified</option>
									<option value="pending">Pending</option>
									<option value="rejected">Rejected</option>
								</select>
							</div>
						</div>
						<hr className='tw-mt-5' />
						{properties.map((property, index) => (
							<div key={img} className="col-lg-12 col-md-12 tw-px-4 tw-mt-4">
								<div className="card tw-mb-4 tw-border-0 tw-shadow">
									<div className="row g-0 p-3 align-items-center">
										<div className="col-md-3 mb-lg-0 mb-md-0 mb-3">
											<img src={property.propertyImage[0]} className="img-fluid rounded" alt="Property" />
										</div>
										<div className="col-md-9 px-lg-3 px-md-3 px-0">
											<div className='flex'>
												<div>
													<h2 className="font-semibold text-2xl tw-text-black">{property.address}</h2>
													<h4 className='font-semibold mb-4 text-xl mt-2 tw-text-gray-600'>₹ {property.price}/-</h4>
												</div>

												<div className='tw-ml-auto tw-mt-3'>
													<h6 className=" tw-rounded-lg tw-bg-white  tw-border-1 tw-border-gray-500 tw-text-[18px] tw-font-[300] " style={{ border: '1px solid grey', paddingInline: '30px', paddingTop: '8px', paddingBottom: '8px' }}>{property.type}</h6>
												</div>
											</div>

											<div className="border bg-light p-3 rounded mb-3">
												<div className="features">
													<div className="container">
														<div className="row mb-3">
															<div className="col-md-3">
																<h5 className="font-semibold tw-mt-2">Square.Ft</h5>
																{property.size} sq.ft
															</div>
															<div className="col-md-3">
																<h5 className="font-semibold tw-mt-2">Main Entrance Facing</h5>
																{property.faching}
															</div>
															<div className="col-md-3">
																<h5 className="font-semibold tw-mt-2">Locality</h5>
																{property.city}
															</div>
															<div className="col-md-3">
																<h5 className="font-semibold">State</h5>
																{property.state}
															</div>

														</div>
														<div className="row mb-3">
															<div className="col-md-3">
																<h5 className="font-semibold tw-mt-2">BHK</h5>
																{property.houseType}
															</div>
															<div className="col-md-3">
																<h5 className="font-semibold tw-mt-2">Type</h5>
																{property.propertyType}
															</div>
															<div className="col-md-3">
																<h5 className="font-semibold tw-mt-2">Property Age</h5>
																{property.propertyAge}
															</div>

															<div className="col-md-3">
																<h5 className="font-semibold">Furnishing</h5>
																{property.furnishing}
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className='d-flex'>
												<div className='flex-grow-1'>
													<div className="facilities tw-ml-1 flex">
														<p className='tw-mt-1 tw-font-semibold tw-text-lg'>Status :</p>
														<div className='tw-ml-2'>
															<h6 className="tw-mb-3 tw-p-2 tw-ml-2 tw-rounded-md tw-w-20 tw-bg-white  " style={{ color: 'green', border: '1px solid green' }}>{property.status}</h6>
														</div>
													</div>
												</div>
												{/* <div className='ml-auto flex'>
													<p className='mr-3'><EditIcon /></p>
													<p className='ml-3'><DeleteIcon /></p>
												</div> */}
											</div>
										</div>
									</div>
								</div>
							</div>
						))}



					</div>
				</div>
			</div>
			<Footer />
		</>
	);
} 