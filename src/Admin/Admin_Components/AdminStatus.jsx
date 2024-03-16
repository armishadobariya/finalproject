import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminStatus.css';
import img from '../../Assests/Image/Home1/reg_bg.jpeg';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Admin_Sidebar from '../Admin_Nav/Admin_Sidebar';
import Admin_Nav from '../Admin_Nav/Admin_Nav';

const AdminStatus = () => {

	const navigate = useNavigate();
	const [loading, setLoading] = useState(true);

	const [showMore, setShowMore] = useState(false);

	const handleShowMore = () => {
		setShowMore(!showMore);
	};

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 500)
	}, []);

	return (
		<>

			<Admin_Nav />

			<div className='sticky-sidebar'>
				<Admin_Sidebar className="" />
			</div>

			{loading ? (
				<div className="loader">
					<div class="spinner"></div>
				</div>
			) : (


				<>




					<div className=' lg:tw-p-10 lg:tw-ml-[270px]'>

						<div className='tw-grid  shadow-lg lg:tw-p-5 tw-rounded-md '>
							<div>
								<div >
									<div className=' tw-flex tw-place-center tw-font-bold tw-text-xl'>
										<h1>Property Status</h1>
									</div>
									<div className=' tw-flex  tw-justify-end '>
										<label htmlFor="status" className="tw-font-semibold tw-mr-2">Select Status:</label>

										<select name="status" id="status" style={{ outline: 'none' }}>Select status
											<option value="All">All</option>
											<option value="verified">Approved</option>
											<option value="pending">Pending</option>
											<option value="rejected">Rejected</option>
										</select>
									</div>
								</div>
								<hr className='tw-mt-5' />


								<div class="col-lg-12 col-md-12 tw-px-4 tw-mt-4">
									<div class="card tw-mb-4 tw-border-0 tw-shadow">
										<div class="row g-0 p-3 align-items-center">
											<div class="col-md-3 mb-lg-0 mb-md-0 mb-3">
												<img src={img} class="img-fluid rounded" />
											</div>

											<div class="col-md-9 px-lg-3 px-md-3 px-0">
												<h2 class=" font-semibold text-xl">₹ 85.42 L - 1.13 Cr</h2>
												<h4 className=' font-semibold mb-4'>Green Green City - Gold</h4>
												<div className="border bg-light p-3 rounded mb-3">
													<div class="features ">
														<div className='container '>
															<div className='row mb-3'>
																<div className='col-md-3'>
																	<h5 className=' font-semibold tw-mt-2'>Square.Ft</h5>
																	800 sq.ft
																</div>
																<div className='col-md-3'>
																	<h5 className=' font-semibold tw-mt-2'>Main Entrance Facing</h5>
																	East
																</div>
																<div className='col-md-3'>
																	<h5 className=' font-semibold tw-mt-2'>Locality</h5>
																	Surat
																</div>
																<div className='col-md-3'>
																	<h5 className=' font-semibold tw-mt-2'>BHK</h5>
																	2-BHK
																</div>

															</div>
															<div className='row mb-3'>

																<div className='col-md-3'>
																	<h5 className=' font-semibold tw-mt-2'>Type</h5>
																	Independent House
																</div>
																<div className='col-md-3'>
																	<h5 className=' font-semibold tw-mt-2'>Corner Plot</h5>
																	Yes
																</div>
																<div className='col-md-3'>
																	<h5 className=' font-semibold'>Boundary Hall</h5>
																	No
																</div>
																<div className='col-md-3'>
																	<h5 className=' font-semibold'>Parking</h5>
																	Yes
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
																<h6 className="tw-mb-3 tw-p-2 tw-ml-1 tw-mt-[-4px] tw-rounded-md  tw-bg-white tw-text-black tw-font-[550] tw-text-lg" >Pending</h6>
															</div>
														</div>
													</div>
													<div className='ml-auto flex'>
														<button className="tw-mb-3 tw-p-2 tw-ml-2 tw-rounded-md tw-w-20  tw-bg-white tw-text-green-600 tw-border-1 hover:tw-bg-green-600 hover:tw-text-white tw-border-green-600 " style={{ color: 'green', border: '1px solid green' }}>Approve</button>
														<button className="tw-mb-3 tw-p-2 tw-ml-2 tw-rounded-md tw-w-20 tw-bg-white tw-text-red-600 tw-border-1 hover:tw-bg-red-600 hover:tw-text-white tw-border-red-600 " style={{ color: 'red', border: '1px solid red' }}>Rejected</button>
													</div>
												</div>
											</div>
										</div >
									</div >
								</div >


							</div>
						</div>
					</div >

				</>

			)
			}


		</>
	)
}

export default AdminStatus;