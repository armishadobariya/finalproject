import React, { useState, useEffect } from 'react';
import { PropertyList } from './PropertyList';
import './radio.css';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { PostDetails } from './PostDetails';
import jsonData from './Cityname.json';
import "./PropertyList.css";

export const AddProperty = () => {


	const [selectedState, setSelectedState] = useState('');
	const [selectedCity, setSelectedCity] = useState('');
	const [states, setStates] = useState([]);
	const [cities, setCities] = useState([]);

	useEffect(() => {
		setStates(jsonData.states);
	}, []);

	const handleStateChange = (e) => {
		const stateName = e.target.value;
		setSelectedState(stateName);

		const selectedStateData = jsonData.states.find((state) => state.name === stateName);
		setCities(selectedStateData ? selectedStateData.cities : []);
	};
	const handleCityChange = (e) => {
		setSelectedCity(e.target.value);
	};

	const [selectedFiles, setSelectedFiles] = useState([]);

	const handleFileChange = (event) => {
		const files = event.target.files;
		setSelectedFiles(files);
	};
	const [activeTab, setActiveTab] = useState('description');

	const handleTabClick = (tab) => {
		setActiveTab(tab);
	};

	const [isHovered, setIsHovered] = useState(false);


	const buttonStyles = {
		backgroundColor: isHovered ? '#d3a478' : 'black',
		color: 'white',
		borderRadius: '0.25rem',
		padding: '0.5rem 4.5rem',
		// marginRight: '0.5rem',
		cursor: 'pointer',
		transition: 'background-color 0.3s',
		height: "45px"
	};

	return (
		<>
			<PropertyList />
			<PostDetails />
			<div>
				<div className=' tw-h-full  tw-pb-20 lg:tw-m-16 tw-rounded-3' style={{ backgroundColor: '#f7f7f7' }}>
					<div className=' tw-mb-10 tw-p-5'>
						<h1 className=' tw-text-3xl tw-font-bold tw-pl-12 tw-mt-10'>Add New Property</h1>
						<p className=' tw-pl-12 tw-mt-3'>We are glad to see you again!</p>
					</div>
					<div className=' tw-flex tw-place-content-center'>
						<div className="col-lg-8 tw-shadow-lg tw-rounded-3 tw-p-4 tw-h-full lg:tw-w-[1270px] md:tw-w-full" style={{ backgroundColor: "#fff" }}>
							<div className="col-md-12 tw-mb-4">
								<nav>
									<div className="nav nav-tabs" id="nav-tab2" role="tablist">
										<button className={`nav-link tw-text-black ms-3 ${activeTab === 'description' ? 'active' : ''}`} onClick={() => handleTabClick('description')} type="button" data-bs-toggle="tab" data-bs-target="#nav-item1">1. Description</button>
										<button className={`nav-link tw-text-black ${activeTab === 'media' ? 'active' : ''}`} onClick={() => handleTabClick('media')} type="button" data-bs-toggle="tab" data-bs-target="#nav-item2">2. Media</button>
										<button className={`nav-link tw-text-black ${activeTab === 'location' ? 'active' : ''}`} onClick={() => handleTabClick('location')} type="button" data-bs-toggle="tab" data-bs-target="#nav-item3">3. Location</button>
										<button className={`nav-link tw-text-black ${activeTab === 'detail' ? 'active' : ''}`} onClick={() => handleTabClick('detail')} type="button" data-bs-toggle="tab" data-bs-target="#nav-item4">4. Detail</button>
									</div>
								</nav>
								{activeTab === 'description' && (
									<div >
										<div>
											<h1 className=' tw-mt-8 tw-text-lg tw-font-semibold'>Property For</h1>

											<div className="row tw-mt-3 tw-flex tw-gap-5 tw-p-3">
												<div className=" col-2 tw-border-2 tw-p-2 tw-rounded-2 ">
													<input class="form-check-input" type="radio" name="why" id="exampleRadios1" value="option1" />
													<label class="form-check-label tw-mr-6" for="exampleRadios1">
														Sell
													</label>
												</div>
												<div class=" col-2 tw-border-2 tw-p-2 tw-rounded-2">
													<input class="form-check-input" type="radio" name="why" id="exampleRadios2" value="option2" />
													<label class="form-check-label" for="exampleRadios2">
														Buy
													</label>
												</div>
											</div>
										</div>

										<h1 className=' tw-mt-4 tw-text-lg tw-font-semibold'>Property Description</h1>
										<div className=' tw-grid'>
											<label className=' tw-mt-8 tw-font-semibold '>Description</label>
											<textarea className='tw-border-2 tw-rounded-2  tw-mt-2 tw-p-2 tw-h-56' placeholder='There are many variations of passages.' />
										</div>
										<div className=' tw-flex tw-justify-end tw-mt-10'>
											<button className=' tw-font-bold tw-bg-black tw-text-white tw-p-2 tw-tw-w-40 tw-col-2 tw-h-11 tw-text-lg tw-rounded-1'>Next</button>
										</div>
									</div>
								)}

								{activeTab === 'media' && (
									<div >
										<div>
											<h1 className=' tw-mt-8 tw-text-lg tw-font-semibold'>Upload photos of your property </h1>
											<input type="file" id='file' style={{ display: "none" }} />
											<label htmlFor="file" className=' tw-place-content-center grid p-5 tw-h-full tw-w-full tw-mt-4 rounded-3' style={{ color: "#de0611", border: "1px dashed #de0611" }}>
												<h1 className=' tw-place-content-center tw-grid'>  <FileUploadIcon style={{ height: "90px", width: "100px", color: "#ddd" }} className=' border-2 rounded-3' /></h1>
												<h1 className=' tw-font-bold tw-text-lg tw-mt-3  tw-place-content-center tw-grid tw-text-black'>Upload your Images Here</h1>
												<h1 className='  tw-place-content-center tw-grid tw-font-semibold tw-mt-4' style={{ color: "#aaa" }}>Photos must be JPEG or PNG format and at least 2048x768</h1>
												<div className=' tw-place-content-center tw-grid tw-mt-8'>
													<h1 className=' tw-font-bold tw-border-1 tw-p-2 tw-w-40 col-2 tw-h-11 tw-text-lg tw-rounded-2 tw-text-black tw-place-content-center tw-grid'>Browse Files</h1>
												</div>
											</label>
											<div className=' tw-flex tw-justify-end tw-mt-10 tw-gap-3'>
												<button className=' tw-font-semibold tw-bg-black tw-text-white tw-p-2 tw-w-40 col-2 tw-h-11 tw-text-lg tw-rounded-1'>Previous</button>
												<button className=' tw-font-semibold tw-bg-black tw-text-white tw-p-2 tw-w-40 col-2 tw-h-11 tw-text-lg tw-rounded-1'>Next</button>
											</div>
										</div>
									</div>
								)}

								{activeTab === 'location' && (
									<div >
										<div >
											<h1 className=' tw-mt-8 tw-text-lg tw-font-semibold'>Listing Location </h1>
											<div className=' tw-grid row'>
												<label htmlFor="address" className=' tw-mt-5 tw-font-semibold' >Address</label>
												<input type="text" id="address" className='tw-border-2 tw-rounded-2  tw-mt-2 tw-h-12 col-md-12' placeholder='Address of your proprerty' />
											</div>
											<div className=' row'>
												<div className=' col-md-6 tw-grid'>
													<label htmlFor="address" className=' tw-mt-5 tw-font-semibold' >Address</label>
													<select value={selectedState} onChange={handleStateChange} className=' tw-h-12 tw-border-2 tw-rounded-2 tw-p-2 tw-mt-2'>
														<option value="">Select a state</option>
														{states.map((state) => (
															<option key={state.name} value={state.name}>
																{state.name}
															</option>
														))}
													</select>
												</div>
												<div className=' col-md-6 tw-grid'>
													<label htmlFor="address" className=' tw-mt-5 tw-font-semibold' >City</label>
													<select value={selectedCity} onChange={handleCityChange} className=' tw-h-12 tw-border-2 tw-rounded-2 tw-p-2 tw-mt-2'>
														<option value="">Select a city</option>
														{cities.map((city) => (
															<option key={city} value={city}>
																{city}
															</option>
														))}
													</select>
												</div>
												<div className=' tw-mt-8'>
													<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238133.18800756568!2d72.65748445425247!3d21.159120355995483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sSurat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1705687115050!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className=' tw-w-full' style={{ height: '300px' }}></iframe>
												</div>
												<div className=' tw-flex tw-justify-end tw-mt-10 tw-gap-3'>
													<button className=' tw-font-semibold tw-bg-black tw-text-white tw-p-2 tw-w-40 col-2 tw-h-11 tw-text-lg tw-rounded-1'>Previous</button>
													<button className=' tw-font-semibold tw-bg-black tw-text-white tw-p-2 tw-w-40 col-2 tw-h-11 tw-text-lg tw-rounded-1'>Next</button>
												</div>
											</div>

										</div>
									</div>
								)}

								{activeTab === 'detail' && (
									<div >
										<div>
											<h1 className=' tw-mt-8 tw-text-lg tw-font-semibold'>Listing details</h1>
										</div>
										<div className="row tw-mt-5">
											<div className=' col-lg-4 tw-grid'>
												<label htmlFor="sqft" className=' tw-font-semibold' >Square feet</label>
												<input type="text" id="sqft" className=' tw-border-2 tw-rounded-2 tw-h-11 tw-p-2 tw-mt-2' placeholder='Size in ft.' />
											</div>
											<div className=' col-lg-4 tw-grid'>
												<label htmlFor="sqft" className=' tw-font-semibold'  >Price</label>
												<input type="text" id="sqft" className=' tw-border-2 tw-rounded-2 tw-h-11 tw-p-2 tw-mt-2' placeholder='Price' />
											</div> <div className=' col-lg-4 tw-grid'>
												<label htmlFor="sqft" className=' tw-font-semibold'  >Property Age</label>
												<input type="text" id="sqft" className=' tw-border-2 tw-rounded-2 tw-h-11 tw-p-2 tw-mt-2' placeholder='Proprerty age (In year)' />
											</div>
										</div>

										<div className="row tw-mt-5">

											<div className='col-lg-4 tw-grid'>
												<label htmlFor="propertyType" className='tw-font-semibold'>Property Type</label>
												<select
													id="propertyType"
													className='tw-border-2 tw-rounded-2 tw-h-11 tw-p-2 tw-mt-2 tw-w-full'
													required=""
													data-error="Please select property type"
												>
													<option value="" selected disabled>Select Property Type</option>
													<option value="independent-house">Independent House</option>
													<option value="villa">Villa</option>
													<option value="apartment">Apartment</option>
													<option value="affordable-house">Affordable House</option>
												</select>
											</div>
											<div className='col-lg-4 tw-grid'>
												<label htmlFor="facing" className='tw-font-semibold'>Facing</label>
												<select
													id="facing"
													className='tw-border-2 tw-rounded-2 tw-h-11 tw-p-2 tw-mt-2 tw-w-full'
													required=""
													data-error="Please select property type"
												>
													<option value="" selected disabled>Select Property Facing</option>
													<option value="east">East</option>
													<option value="wast">Wast</option>
													<option value="north">North</option>
													<option value="south">South</option>
												</select>
											</div>
											<div className='col-lg-4 tw-grid'>
												<label htmlFor="bhk_type" className='tw-font-semibold'>BHK_Type</label>
												<select
													id="bhk_type"
													className='tw-border-2 tw-rounded-2 tw-h-11 tw-p-2 tw-mt-2 tw-w-full'
													required=""
													data-error="Please select property type"
												>
													<option value="" selected disabled>Select BHK_Type</option>
													<option value="east">1 BHK</option>
													<option value="wast">2 BHK</option>
													<option value="north">3 BHK</option>
													<option value="south">3+ BHK</option>
												</select>
											</div>

										</div>

										<div className="row tw-mt-10">
											<h1 className=' tw-font-semibold'>Facilities</h1>
										</div>
										<div className="row tw-grid  md:tw-flex tw-space-y-5 tw-p-3 tw-justify-evenly  ">
											<div className="tw-border-2 tw-p-2 tw-rounded-2 col-md-2 tw-pl-7 md:tw-mt-5">
												<input className="form-check-input" type="checkbox" name='parking' id='parking' />
												<label className="form-check-label tw-pl-3" htmlFor="exampleCheckbox1">
													Parking
												</label>
											</div>
											<div className="tw-border-2 tw-p-2 tw-rounded-2 col-md-2  tw-pl-7 ">
												<input className="form-check-input" type="checkbox" name='lift' id='lift' />
												<label className="form-check-label tw-pl-3" htmlFor="exampleCheckbox2">
													Lift
												</label>
											</div>
											<div className="tw-border-2 tw-p-2 tw-rounded-2 col-md-2  tw-pl-7">
												<input className="form-check-input" type="checkbox" name='gas-pipeline' id='gas-pipeline' />
												<label className="form-check-label tw-pl-3" htmlFor="exampleCheckbox3">
													Gas Pipeline
												</label>
											</div>
										</div>
										<div className="row  tw-grid  md:tw-flex tw-space-y-5 tw-p-3 tw-justify-evenly">
											<div className="tw-border-2 tw-p-2 tw-rounded-2 col-md-2 tw-pl-7 md:tw-mt-5">
												<input className="form-check-input" type="checkbox" name='parking' id='parking' />
												<label className="form-check-label tw-pl-3" htmlFor="exampleCheckbox1">
													Garden
												</label>
											</div>
											<div className="tw-border-2 tw-p-2 tw-rounded-2 col-md-2  tw-pl-7">
												<input className="form-check-input" type="checkbox" name='lift' id='lift' />
												<label className="form-check-label tw-pl-3" htmlFor="exampleCheckbox2">
													24x7 Security
												</label>
											</div>
											<div className="tw-border-2 tw-p-2 tw-rounded-2 col-md-2  tw-pl-7">
												<input className="form-check-input" type="checkbox" name='gas-pipeline' id='gas-pipeline' />
												<label className="form-check-label tw-pl-3" htmlFor="exampleCheckbox3">
													Inverter
												</label>
											</div>
										</div>

										<div className="row tw-mt-10">
											<h1 className=' tw-font-semibold'>Facilities</h1>
										</div>
										<div className="row  tw-grid  md:tw-flex tw-space-y-4 tw-p-3 tw-justify-evenly  ">
											<div className="tw-border-2 tw-p-2 tw-rounded-2 col-md-2 tw-pl-5 md:tw-mt-5">
												<input className="form-check-input" type="radio" name="amenity" id="parking" />
												<label className="form-check-label tw-pl-2" htmlFor="parking">
													Un-Furnished
												</label>
											</div>
											<div className="tw-border-2 tw-p-2 tw-rounded-2 col-md-2 tw-pl-5">
												<input className="form-check-input" type="radio" name="amenity" id="lift" />
												<label className="form-check-label tw-pl-2" htmlFor="lift">
													Semi-Furnished
												</label>
											</div>
											<div className="tw-border-2 tw-p-2 tw-rounded-2 col-md-2 tw-pl-5">
												<input className="form-check-input" type="radio" name="amenity" id="gas-pipeline" />
												<label className="form-check-label tw-pl-2" htmlFor="gas-pipeline">
													Full-Furnished
												</label>
											</div>

										</div>

										<div className="row tw-mt-3">
											<div className="col-md-6 tw-grid">
												<label htmlFor="contact" className=' tw-font-semibold' >Contact No.</label>
												<input type="text" id="contact" className=' tw-border-2 tw-rounded-2 tw-h-11 tw-p-2 tw-mt-2' placeholder='Contact No.' />
											</div>
											<div className="col-md-6 tw-grid">
												<label htmlFor="email" className=' tw-font-semibold' >Email</label>
												<input type="text" id="email" className=' tw-border-2 tw-rounded-2 tw-h-11 tw-p-2 tw-mt-2' placeholder='Enter Email' />
											</div>
										</div>
										<div className=' tw-flex tw-justify-end tw-mt-10 gap-3'>
											<button className=' tw-font-semibold tw-bg-black tw-text-white tw-p-2 tw-tw-w-40 col-2 tw-h-11 tw-text-lg tw-rounded-1'>Previous</button>
											<button className=' tw-font-semibold tw-bg-black tw-text-white tw-p-2 tw-tw-w-40 col-2 tw-h-11 tw-text-lg tw-rounded-1'>Add</button>
										</div>


									</div>

								)}
							</div>
						</div>
					</div>

				</div >
			</div >

		</>
	)
}