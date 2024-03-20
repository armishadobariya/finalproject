import React, { useState } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import img from "../../Assests/Image/Home1/reg_bg.jpeg";
import './Rent.css';
import Nav from '../Nav/Nav';
import { Footer } from '../Footer/Footer';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Rent = () => {

	const [showMore, setShowMore] = useState(false);
	const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(false);
	const [value, setValue] = React.useState([0, 100]);

	const navigate = useNavigate();


	const handleNavbarToggle = () => {
		setIsNavbarCollapsed(!isNavbarCollapsed);
	};

	const handleShowMore = () => {
		setShowMore(!showMore);
	};

	function valuetext(value) {
		return `${value}°C`;
	}

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const handleMoreDetail = () => {
		navigate('/Buy/ReadMoreDetails')
	}


	const getSellAllPropert = async () => {
		try {
			// setLoad(true)
			const response = await axios.get();
			console.log(response.data["allProperty"]);
			// setLoad(false)
			// ------------------------------------- note ------------------------------------------
			// tamne loko ne data array na from ma malse teni ander thi key no use kari value access kari le jo
			// badho data chhe e -----> response.data["allProperty"] <----- ani ander hase
			// setLoad e loader mate banavu chhe data avta var lagse aetale
		} catch (error) {
			console.log(error)
		}
	}



	return (
		<>
			<Nav />
			<div className='mt-5 md:flex'>
				<div className="col-lg-3 col-md-12 mb-lg-0 mb-4 ps-4">
					<nav className="navbar navbar-expand-lg navbar-light bg-white rounded shadow">
						<div className="container-fluid flex-lg-column align-items-stretch">
							<h4 className="mt-2">FILTERS</h4>
							{/* <button className="navbar-toggler shadow-none" type="button" data-bs-toggle="collapse"
								data-bs-target="#filterDropDown" aria-controls="navbarNav" aria-expanded="false"
								aria-label="Toggle navigation">
								<span className="navbar-toggler-icon"></span>
							</button> */}
							<button
								className="navbar-toggler shadow-none"
								type='button'
								onClick={handleNavbarToggle}
								aria-controls="showNavbar"
								aria-expanded={!isNavbarCollapsed}
								aria-label="Toggle navigation"
								style={{ background: 'white' }}
							>
								<span className="navbar-toggler-icon"></span>
							</button>
							<div className={`collapse navbar ${isNavbarCollapsed ? '' : 'show'}`} id="showNavbar" >
								<div className="border bg-light p-3 rounded mb-3 tw-w-full">
									<div className="mb-3">
										<label htmlFor="cityDropdown" className="form-label">SELECT CITY</label>
										<select className="form-select shadow-none" id="cityDropdown">
											<option value="city1">City 1</option>
											<option value="city2">City 2</option>
											<option value="city3">City 3</option>
										</select>
									</div>
								</div>



								<div className="border bg-light p-3 rounded mb-3 tw-w-full">

									<label htmlFor="cityDropdown" className="form-label">PRICE</label>

									<Box >
										<Slider
											getAriaLabel={() => 'Temperature range'}
											value={value}
											onChange={handleChange}
											valueLabelDisplay="auto"
											getAriaValueText={valuetext}
											style={{
												color: "black",
											}}
										/>
									</Box>
									{/* <div>
										<div className="d-flex">
											<div className='me-2'>
												<input type="number" className="form-control shadow-none" />
											</div>
											<div>
												<h1> to </h1>
											</div>
											<div className='ms-2'>
												<input type="number" className="form-control shadow-none" />
											</div>
										</div>
									</div> */}
								</div>
								<div className="border bg-light p-3 rounded mb-3">
									<label htmlFor="cityDropdown" className="form-label">SQUARE FEET</label>
									<div>
										<div className="d-flex">
											<div className='me-2'>
												<input type="number" className="form-control shadow-none" />
											</div>
											<div>
												<h1> to </h1>
											</div>
											<div className='ms-2'>
												<input type="number" className="form-control shadow-none" />
											</div>
										</div>
									</div>
								</div>
								<div className="border bg-light p-3 rounded mb-3 tw-w-full">
									<div className='mb-3'>
										<label htmlFor="cityDropdown" className="form-label">PROPERTY TYPE</label>
										<select className="form-select shadow-none" id="cityDropdown">
											<option value="city1">Apartment</option>
											<option value="city2">Independent House</option>
											<option value="city3">Villa</option>
										</select>

									</div>
								</div>
								<div className="border bg-light p-3 rounded mb-3 tw-w-full ">
									<label className="form-label">BHK</label>
									<div className="form-check">
										<input className="form-check-input" type="radio" name="bhk" id="1bhk" value="1bhk" />
										<label className="form-check-label" htmlFor="1bhk">
											1-BHK
										</label>
									</div>
									<div className="form-check">
										<input className="form-check-input" type="radio" name="bhk" id="2bhk" value="2bhk" />
										<label className="form-check-label" htmlFor="2bhk">
											2-BHK
										</label>
									</div>
									<div className="form-check">
										<input className="form-check-input" type="radio" name="bhk" id="3bhk" value="3bhk" />
										<label className="form-check-label" htmlFor="3bhk">
											3-BHK
										</label>
									</div>
								</div>
								<div className='tw-w-full'>
									<button type="submit" className='tw-border-2 tw-p-2 tw-bg-black tw-text-white tw-font-semibold tw-w-full tw-mb-3 tw-mt-2'>
										FIND
									</button>
								</div>
							</div>
						</div>
					</nav>
				</div>
				<div class="col-lg-9 col-md-12 px-4">
					<div class="card mb-4 border-0 shadow">
						<div class="row g-0 p-3 align-items-center">
							<div class="col-md-4 mb-lg-0 mb-md-0 mb-3">
								<img src={img} class="img-fluid rounded" />
							</div>

							<div class="col-md-8 px-lg-3 px-md-3 px-0">
								<h2 class=" font-semibold text-xl">₹ 85.42 L - 1.13 Cr</h2>
								<h4 className=' font-semibold mb-4'>Green Green City - Gold</h4>
								<div className="border bg-light p-3 rounded mb-3">
									{/* <div class="features ">
                                        <div className='container '>
                                            <div className='row mb-3'>
                                                <div className='col-md-4'>
                                                    <h5 className=' font-semibold tw-mt-2'>Square.Ft</h5>
                                                    800 sq.ft
                                                </div>
                                                <div className='col-md-4'>
                                                    <h5 className=' font-semibold tw-mt-2'>Main Entrance Facing</h5>
                                                    East
                                                </div>
                                                <div className='col-md-4'>
                                                    <h5 className=' font-semibold tw-mt-2'>Locality</h5>
                                                    Surat
                                                </div>

                                            </div>
                                            <div className='row mb-3'>
                                                <div className='col-md-4'>
                                                    <h5 className=' font-semibold tw-mt-2'>BHK</h5>
                                                    2-BHK
                                                </div>
                                                <div className='col-md-4'>
                                                    <h5 className=' font-semibold tw-mt-2'>Type</h5>
                                                    Independent House
                                                </div>
                                                <div className='col-md-4'>
                                                    <h5 className=' font-semibold tw-mt-2'>Corner Plot</h5>
                                                    Yes
                                                </div>
                                            </div>
                                            <div className='row'>

                                                <div className='col-md-4'>
                                                    <h5 className=' font-semibold'>Boundary Hall</h5>
                                                    No
                                                </div>
                                                <div className='col-md-4'>
                                                    <h5 className=' font-semibold'>Parking</h5>
                                                    Yes
                                                </div>
                                            </div>

                                        </div>

                                    </div> */}

									<div className="features">
										<div className='container '>
											<div className='row mb-3'>
												<div className='col-md-4'>
													<h5 className='font-semibold tw-mt-2'>Square.Ft</h5>
													800 sq.ft
												</div>
												<div className='col-md-4'>
													<h5 className='font-semibold tw-mt-2'>Main Entrance Facing</h5>
													East
												</div>
												<div className='col-md-4'>
													<h5 className='font-semibold tw-mt-2'>Locality</h5>
													Surat
												</div>
											</div>

											{showMore && (
												<>
													<div className='row mb-3'>
														<div className='col-md-4'>
															<h5 className='font-semibold tw-mt-2'>BHK</h5>
															2-BHK
														</div>
														<div className='col-md-4'>
															<h5 className='font-semibold tw-mt-2'>Type</h5>
															Independent House
														</div>
														<div className='col-md-4'>
															<h5 className='font-semibold tw-mt-2'>Corner Plot</h5>
															Yes
														</div>
													</div>
													<div className='row mb-3'>
														<div className='col-md-4'>
															<h5 className='font-semibold'>Boundary Hall</h5>
															No
														</div>
														<div className='col-md-4'>
															<h5 className='font-semibold'>Parking</h5>
															Yes
														</div>
													</div>
												</>
											)}

											<button onClick={handleShowMore} className="show-more-button  tw-font-thin tw-bg-gray-200 tw-p-1 rounded-4">
												{showMore ? 'Show Less' : 'Show More'}
											</button>


										</div>
									</div>

								</div>
								<div className='d-flex'>
									<div className='flex-grow-1'>
										<div className="facilities tw-ml-1">
											<h6 className="mb-3">Owner Name</h6>
										</div>
									</div>
									{/* <div className='ml-auto'>
										<button type="submit" className='p-2 bg-black text-white font-semibold mb-3 tw-mr-4'>
											More Details
										</button>
										<button type="submit" className='p-2 bg-black text-white font-semibold mb-3'>
											Contact Seller
										</button>
									</div> */}


									<div className='tw-flex tw-mt-8'>
										<div className=' '>
											<button type="submit" class="tw-p-2 tw-bg-custom-color tw-me-2 tw-ml-6  tw-text-white tw-font-semibold tw-mb-3 tw-rounded-md">
												Contact Seller</button>

										</div>
										<div className=' '>
											<button type="submit" className='tw-pl-2 tw-pr-2 tw-pt-[6px] tw-pb-[6px] tw-bg-white tw-text-black tw-border-2 hover:tw-bg-black hover:tw-text-white tw-border-black tw-font-semibold tw-mb-3 tw-rounded-md' onClick={handleMoreDetail}>
												More Details
											</button>
										</div>
									</div>
								</div>
							</div>
						</div >
					</div >
				</div >
			</div >


			<br />
			<br />
			<Footer />

		</>
	)
}


export default Rent;