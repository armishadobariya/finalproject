
import React, { useState, useEffect } from 'react';
import './PropertyHistory.css';
import Nav from '../Nav/Nav';
import { Footer } from '../Footer/Footer';
import { getUserSelectedPropertyUrl, getUserAllPropertyUrl } from '../Components/Api';
import axios from 'axios';

export const PropertyHistory = () => {
	const [properties, setProperties] = useState([]);
	const [selectedStatus, setSelectedStatus] = useState("All");
	// const [propertyData, setPropertyData] = useState([]);

	const getAllProperty = async () => {
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

	const handleStatusChange = async (event) => {
		const selectedValue = event.target.value;
		setSelectedStatus(selectedValue);
		console.log(selectedValue);

		try {
			const token = localStorage.getItem("token");
			let response;

			if (selectedValue === "All") {
				response = await axios.get(getUserAllPropertyUrl, {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				});
			} else {
				response = await axios.get(`${getUserSelectedPropertyUrl}/${selectedValue}`, {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				});
			}

			if (response.status === 200) {
				console.log("successfully call");
				const data = response.data.allProperty;
				console.log('data: ', data);
				setProperties(data);
			}
		} catch (error) {
			console.error("Error fetching properties:", error.message);
		}
	}


	useEffect(() => {
		getAllProperty();
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
								<select
									name="status"
									id="status"
									style={{ outline: 'none' }}
									value={selectedStatus}
									onChange={handleStatusChange}
								>
									<option value="All">All</option>
									<option value="Approved">Verified</option>
									<option value="Pending">Pending</option>
									<option value="Rejected">Rejected</option>
								</select>
							</div>
						</div>
						<hr className='tw-mt-5' />
						{properties.map((property, index) => (
							<div key={index} className="col-lg-12 col-md-12 tw-px-4 tw-mt-4">
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
															<h6 className="tw-mb-3 tw-p-2 tw-ml-2 tw-rounded-md tw-w-20 tw-bg-white" style={{ color: property.status === 'Rejected' ? 'red' : property.status === 'Pending' ? 'yellow' : 'green', border: '1px solid', borderColor: property.status === 'Rejected' ? 'red' : property.status === 'Pending' ? 'yellow' : 'green' }}>{property.status}</h6>
														</div>
													</div>
												</div>

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