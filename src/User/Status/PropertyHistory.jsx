import React, { useState } from 'react';
import './PropertyHistory.css';
import img from '../../Assests/Image/Home1/reg_bg.jpeg';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Nav from '../Nav/Nav';
import { Footer } from '../Footer/Footer';
export const PropertyHistory = () => {

	const [showMore, setShowMore] = useState(false);

	const handleShowMore = () => {
		setShowMore(!showMore);
	};

	return (
		<>
			<Nav />
			<div className=' lg:tw-p-10'>

				<div className='tw-grid  shadow-lg lg:tw-p-5 tw-rounded-md '>
					<div>
						<div >
							<div className=' tw-flex place-content-center tw-font-bold tw-text-xl'>
								<h1>Property History</h1>
							</div>
							<div className=' tw-flex justify-content-end '>
								<label htmlFor="status" className="tw-font-semibold tw-mr-2">Select Status:</label>

								<select name="status" id="status" style={{ outline: 'none' }}>Select status
									<option value="All">All</option>
									<option value="verified">Verified</option>
									<option value="pending">Pending</option>
									<option value="rejected">Rejected</option>
								</select>
							</div>
						</div>
						<hr className='tw-mt-5' />

						{/* <div className='tw-mt-5 border-1 rounded-2 p-3'>
                            <div className=' tw-flex'>
                                <h1 className=' tw-font-semibold'>Property Upload Date:</h1><p className='tw-mt-[-2px] tw-ml-2'>12/02/2024</p>
                            </div>
                            <div className=' tw-flex'>
                                <h1 className='tw-mt-2 tw-font-semibold'>Property Upload For:</h1><p className='tw-mt-1.5 tw-ml-2'> Rent or Sale</p>
                            </div>
                            <div className=' tw-flex'>
                                <h1 className='tw-mt-2 tw-font-semibold'>Property Type:</h1><p className='tw-mt-1.5 tw-ml-2'>Appartment</p>
                            </div>
                            <div className=' tw-flex'>
                                <h1 className='tw-mt-2 tw-font-semibold'>State:</h1><p className='tw-mt-1.5 tw-ml-2'> Gujrat</p>
                            </div>
                            <div className=' tw-flex'>
                                <h1 className='tw-mt-2 tw-font-semibold'>City:</h1><p className='tw-mt-1.5 tw-ml-2'>Surat</p>
                            </div>
                            <div className=' tw-flex'>
                                <h1 className='tw-mt-2 tw-font-semibold'>Price:</h1><p className='tw-mt-1.5 tw-ml-2'> 7000 per-Month</p>
                            </div>
                            <div className=' tw-flex'>
                                <h1 className='tw-mt-2 tw-font-semibold'>Size:</h1><p className='tw-mt-1.5 tw-ml-2'>800 Sq. Ft.</p>
                            </div>
                            <div className='border-1 rounded-2 p-2 tw-mt-3 tw-flex' >
                                <h1 style={{ borderLeft: '7px solid orange' }}>Status:</h1><p className='tw-font-semibold tw-mt-[-3px] tw-ml-2'>Pending</p>
                            </div>
                            <div className=' tw-grid tw-justify-end tw-mt-3'>
                                <button className='tw-font-semibold border-1 rounded-2 p-2 hover:tw-text-red-500 hover:tw-border-red-500'>Cancel Adding</button>
                            </div>
                        </div> */}

						<div class="col-lg-12 col-md-12 px-4 mt-4">
							<div class="card mb-4 border-0 shadow">
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

														<h6 className="mb-3 p-2 ml-2 rounded-2  w-20" style={{ color: 'red', border: '1px solid red' }}>Rejected</h6>
													</div>
												</div>
											</div>
											<div className='ml-auto flex'>
												<p className='mr-3'><EditIcon></EditIcon></p>
												<p className='ml-3'><DeleteIcon /></p>
											</div>


										</div>
									</div>
								</div >
							</div >
						</div >
						<div class="col-lg-12 col-md-12 px-4 mt-4">
							<div class="card mb-4 border-0 shadow">
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

														<h6 className="mb-3 p-2 ml-2  rounded-2  w-20" style={{ color: 'orange', border: '1px solid orange' }}>Pending</h6>
													</div>
												</div>
											</div>


											<div className='ml-auto flex'>
												<p className='mr-3'><EditIcon></EditIcon></p>
												<p className='ml-3'><DeleteIcon /></p>
											</div>
										</div>
									</div>
								</div >
							</div >
						</div >
						<div class="col-lg-12 col-md-12 px-4 mt-4">
							<div class="card mb-4 border-0 shadow">
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

														<h6 className="mb-3 p-2 ml-2 rounded-2 w-20" style={{ color: 'green', border: '1px solid green' }}>Confirm</h6>
													</div>
												</div>
											</div>
											<div className='ml-auto flex'>
												<p className='mr-3'><EditIcon></EditIcon></p>
												<p className='ml-3'><DeleteIcon /></p>
												{/* <button type="submit" className='p-2 bg-black text-white font-semibold mb-3'>
                                                    Cancle
                                                </button> */}
											</div>
										</div>
									</div>
								</div >
							</div >
						</div >
					</div>
				</div>
			</div >

			<Footer />
		</>
	)
}