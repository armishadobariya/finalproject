import React, { useState, useEffect } from 'react';
import PropertyList from "./PropertyList"
import './radio.css';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { PostDetails } from './PostDetails';
import jsonData from './Cityname.json';
import "./PropertyList.css";
import Nav from '../Nav/Nav';
import { Footer } from '../Footer/Footer';
import { addPropertyUrl } from '../Components/Api';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const AddProperty = () => {
	const [activeTabIndex, setActiveTabIndex] = useState(0);
	const [selectedFiles, setSelectedFiles] = useState([]);
	const [selectedState, setSelectedState] = useState('');
	const [selectedCity, setSelectedCity] = useState('');
	const [selectedFileName, setSelectedFileName] = useState('');

	const [states, setStates] = useState([]);
	const [cities, setCities] = useState([]);
	const [response, setResponse] = useState('');
	const navigate = useNavigate();

	const [type, setType] = useState('');
	const [description, setDescription] = useState('');
	const [propertyImage, setPropertyImage] = useState([]);
	const [address, setAddress] = useState('');
	const [size, setSize] = useState('');
	const [price, setPrice] = useState('');
	const [age, setAge] = useState('');
	const [propertyType, setPropertyType] = useState('');
	const [face, setFace] = useState('');
	const [houseType, setHouseType] = useState('');
	const [facilities, setFacilities] = useState('');
	const [furnishing, setFurnishing] = useState('');
	const [mobileNo, setMobileNo] = useState('');
	const [email, setEmail] = useState('');
	// const [size, setSize] = useState('');
	const [sizeError, setSizeError] = useState('');
	const [priceError, setPriceError] = useState('');
	const [ageError, setAgeError] = useState('');
	const [mobileNoError, setMobileNoError] = useState('');

	useEffect(() => {
		setStates(jsonData.states);
	}, []);

	const handleNext = () => {
		setActiveTabIndex(activeTabIndex + 1);
	};

	const handleStateChange = (e) => {
		const stateName = e.target.value;
		setSelectedState(stateName);
		const selectedStateData = jsonData.states.find((state) => state.name === stateName);
		setCities(selectedStateData ? selectedStateData.cities : []);
	};

	const handleCityChange = (e) => {
		setSelectedCity(e.target.value);
	};

	const handleCheckboxChange = (event) => {
		const { name, checked } = event.target;
		if (checked) {
			setFacilities([...facilities, name]);
		} else {
			setFacilities(facilities.filter(item => item !== name));
		}
	};




	const addPropertyData = async (e) => {
		try {

			if (handlePriceChange()) {
				const formData = new FormData();
				for (let i = 0; i < propertyImage.length; i++) {

					formData.append('propertyImage', propertyImage[i]);
				}
				formData.append('propertyType', propertyType);
				formData.append('type', type);
				formData.append('description', description);
				formData.append('address', address);
				formData.append('state', selectedState);
				formData.append('city', selectedCity);
				formData.append('size', size);
				formData.append('price', price);
				formData.append('propertyAge', age);
				formData.append('faching', face);
				formData.append('houseType', houseType);
				formData.append('facility', facilities);
				formData.append('furnishing', furnishing);
				formData.append('mobileNo', mobileNo);
				formData.append('email', email);

				const token = localStorage.getItem('user');
			const tokenArray = JSON.parse(token);
				const responseData = await axios.post(addPropertyUrl, formData, {
					headers: {
						"Authorization": `Bearer ${tokenArray[0]}`,
						"Content-Type": "multipart/form-data",
					}
				});

				if (responseData.status === 200) {
					console.log(responseData.data);
					navigate('/');
				}
			}
		} catch (error) {
			console.log(error);
		}
	};
	// const handleImage = (event) => {
	// 	setImage(event.target.files[0]);
	// 	// setSelectedFiles(event.target.files[0]);
	// }


	// const handleImage = (e) => {
	// 	const file = e.target.files[0];
	// 	setSelectedFileName(file.name);
	// };

	const handleImage = (e) => {
		const files = e.target.files;
		const fileNames = [];
		const file = [];
		console.log(files);

		console.log('fileNames: ', fileNames);
		for (let i = 0; i < files.length; i++) {
			fileNames.push(files[i].name);
		}
		setPropertyImage((pre) => {
			console.log([...files]);
			return [...files]
		});
		setSelectedFiles(fileNames);
	};

	const handleRadioChange = (e) => {
		setType(e.target.value);
	}

	const handleFurnisherType = (e) => {
		setFurnishing(e.target.value);
	}

	const handlePropertyTypeChange = (event) => {
		setPropertyType(event.target.value);
	};

	// const validateName = (name) => {
	// 	const allowAlphabet = /^[a-zA-Z]+$/;

	// 	if (name.length <= 2 || !allowAlphabet.test(name)) {
	// 		setNameErr('Name must be contain mote than two Alphabets..');
	// 		return false;
	// 	}

	// 	setNameErr('');
	// 	return true;
	// }
	const handleSizeChange = (e) => {
		const newSize = e.target.value;
		setSize(newSize);

		// Validate the input
		if (!newSize.trim()) {
			setSizeError('Size is required');
		} else if (!/^\d+$/.test(newSize)) {
			setSizeError('Size must be a number');
		} else {
			setSizeError('');
		}
	};

	const handlePriceChange = (e) => {
		const newPrice = e.target.value;
		setPrice(newPrice);

		// Validate the input
		if (!newPrice.trim()) {
			setPriceError('Price is required');
		} else if (!/^\d+(\.\d{1,2})?$/.test(newPrice)) {
			setPriceError('Price must be a valid number');
		} else {
			setPriceError('');
		}
	};
	const handleAgeChange = (e) => {
		const newAge = e.target.value;
		setAge(newAge);

		// Validate the input
		if (!newAge.trim()) {
			setAgeError('Age is required');
		} else if (!/^\d+(\.\d{1,2})?$/.test(newAge)) {
			setAgeError('Age must be a in  number');
		} else {
			setAgeError('');
		}
	};
	const handleMobileNoChange = (e) => {
		const newMobileNo = e.target.value;
		setMobileNo(newMobileNo);

		// Validate the input
		if (!newMobileNo.trim()) {
			setMobileNoError('Contact No. is required');
		} else if (!/^\d{10}$/.test(newMobileNo)) {
			setMobileNoError('Contact No. must be a 10-digit number');
		} else {
			setMobileNoError('');
		}
	};
	return (
		<>
			<Nav />
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
										<button className={`nav-link tw-text-black ms-3 ${activeTabIndex === 0 ? 'active' : ''}`} onClick={() => setActiveTabIndex(0)} type="button" data-bs-toggle="tab" data-bs-target="#nav-item1">1. Description</button>
										<button className={`nav-link tw-text-black ${activeTabIndex === 1 ? 'active' : ''}`} onClick={() => setActiveTabIndex(1)} type="button" data-bs-toggle="tab" data-bs-target="#nav-item2">2. Media</button>
										<button className={`nav-link tw-text-black ${activeTabIndex === 2 ? 'active' : ''}`} onClick={() => setActiveTabIndex(2)} type="button" data-bs-toggle="tab" data-bs-target="#nav-item3">3. Location</button>
										<button className={`nav-link tw-text-black ${activeTabIndex === 3 ? 'active' : ''}`} onClick={() => setActiveTabIndex(3)} type="button" data-bs-toggle="tab" data-bs-target="#nav-item4">4. Detail</button>
									</div>
								</nav>
								{activeTabIndex === 0 && (
									<div >
										<div >
											<div>
												<h1 className=' tw-mt-8 tw-text-lg tw-font-semibold'>Property For</h1>

												<div className="row tw-mt-3 tw-flex tw-gap-5 tw-p-3">
													<div className=" col-2 tw-border-2 tw-p-2 tw-rounded-2 ">
														<input class="form-check-input" type="radio" name="why" id="exampleRadios1" value="Sell" checked={type === 'Sell'} onChange={handleRadioChange} />
														<label class="form-check-label tw-mr-6" for="exampleRadios1">
															Sell
														</label>
													</div>
													<div class=" col-2 tw-border-2 tw-p-2 tw-rounded-2">
														<input class="form-check-input" type="radio" name="why" id="exampleRadios2" value="Rent" checked={type === 'Rent'} onChange={handleRadioChange} />
														<label class="form-check-label" for="exampleRadios2">
															Rent
														</label>
													</div>
												</div>
											</div>

											<h1 className=' tw-mt-4 tw-text-lg tw-font-semibold'>Property Description</h1>
											<div className=' tw-grid'>
												<label className=' tw-mt-8 tw-font-semibold '>Description</label>
												<textarea className='tw-border-2 tw-rounded-2  tw-mt-2 tw-p-2 tw-h-56' value={description}
													onChange={(e) => { setDescription(e.target.value) }} placeholder='There are many variations of passages.' />
											</div>
											<div className=' tw-flex tw-justify-end tw-mt-10'>
											</div>
										</div>
									</div>
								)}
								{activeTabIndex === 1 && (
									<div>
										<div>
											<div>
												<h1 className='tw-mt-8 tw-text-lg tw-font-semibold'>Upload photos of your property</h1>
												<input type="file" id='file' style={{ display: "none" }} onChange={handleImage} multiple />
												<label htmlFor="file" className='tw-place-content-center grid p-5 tw-h-full tw-w-full tw-mt-4 rounded-3' style={{ color: "#de0611", border: "1px dashed #de0611" }}>
													<h1 className='tw-place-content-center tw-grid'>  <FileUploadIcon style={{ height: "90px", width: "100px", color: "#ddd" }} className='border-2 rounded-3' /></h1>
													<h1 className='tw-font-bold tw-text-lg tw-mt-3 tw-place-content-center tw-grid tw-text-black'>Upload your Images Here</h1>
													{selectedFiles.map((fileName, index) => (
														<h1 key={index} style={{ color: 'black', fontWeight: '600', marginLeft: '150px', marginTop: '5px' }}>{fileName}</h1>
													))}
													<h1 className='tw-place-content-center tw-grid tw-font-semibold tw-mt-4' style={{ color: "#aaa" }}>Photos must be JPEG or PNG format and at least 2048x768</h1>
													<div className='tw-place-content-center tw-grid tw-mt-8'>
														<h1 className='tw-font-bold tw-border-1 tw-p-2 tw-w-40 col-2 tw-h-11 tw-text-lg tw-rounded-2 tw-text-black tw-place-content-center tw-grid'>Browse Files</h1>
													</div>
												</label>
												<div className='tw-flex tw-justify-end tw-mt-10 tw-gap-3'>
												</div>
											</div>
										</div>
									</div>
								)}
								{activeTabIndex === 2 && (
									<div >
										<div >
											<div >
												<h1 className=' tw-mt-8 tw-text-lg tw-font-semibold'>Listing Location </h1>
												<div className=' tw-grid row'>
													<div className=' col-md-12 tw-grid'>
														<label htmlFor="address" className=' tw-mt-5 tw-font-semibold'>Address</label>
														<input type="text" id="address" className='tw-border-2 tw-p-3 tw-rounded-2  tw-mt-2 tw-h-12 tw-w-full ' onChange={(e) => { setAddress(e.target.value) }} placeholder='Address of your proprerty' />
													</div>
												</div>
												<div className=' row'>
													<div className=' col-md-6 tw-grid'>
														<label htmlFor="address" className=' tw-mt-5 tw-font-semibold' >State</label>
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
														{/* <button className=' tw-font-semibold tw-bg-black tw-text-white tw-p-2 tw-w-40 col-2 tw-h-11 tw-text-lg tw-rounded-1'>Previous</button>
														<button className=' tw-font-semibold tw-bg-black tw-text-white tw-p-2 tw-w-40 col-2 tw-h-11 tw-text-lg tw-rounded-1'>Next</button> */}
													</div>
												</div>

											</div>
										</div>
									</div>
								)}
								{activeTabIndex === 3 && (
									<div >
										<div >
											<div>
												<h1 className=' tw-mt-8 tw-text-lg tw-font-semibold'>Listing details</h1>
											</div>
											<div className="row tw-mt-5">
												<div className="col-lg-4 tw-grid">
													<label htmlFor="sqft" className="tw-font-semibold">Square feet</label>
													<input
														type="text"
														id="sqft"
														className="tw-border-2 tw-rounded-2 tw-h-11 tw-p-2 tw-mt-2"
														placeholder="Size in ft. ex:370"
														value={size}
														onChange={handleSizeChange}
													/>
													{sizeError && <p className="text-red-500">{sizeError}</p>}
												</div>
												<div className="col-lg-4 tw-grid">
													<label htmlFor="price" className="tw-font-semibold">Price</label>
													<input
														type="text"
														id="price"
														className="tw-border-2 tw-rounded-2 tw-h-11 tw-p-2 tw-mt-2"
														placeholder="Enter the price"
														value={price}
														onChange={handlePriceChange}
													/>
													{priceError && <p className="text-red-500">{priceError}</p>}
												</div>

												<div className="col-lg-4 tw-grid">
													<label htmlFor="age" className="tw-font-semibold">Age</label>
													<input
														type="text"
														id="age"
														className="tw-border-2 tw-rounded-2 tw-h-11 tw-p-2 tw-mt-2"
														placeholder="Enter the price"
														value={age}
														onChange={handleAgeChange}
													/>
													{ageError && <p className="text-red-500">{ageError}</p>}
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
														value={propertyType}
														onChange={handlePropertyTypeChange}
													>
														<option value="" disabled>Select Property Type</option>
														<option value="Independent House">Independent House</option>
														<option value="Villa">Villa</option>
														<option value="Appartment">Apartment</option>
														<option value="Affordable House">Affordable House</option>
													</select>
												</div>
												<div className='col-lg-4 tw-grid'>
													<label htmlFor="facing" className='tw-font-semibold'>Facing</label>
													<select
														id="facing"
														className='tw-border-2 tw-rounded-2 tw-h-11 tw-p-2 tw-mt-2 tw-w-full'
														required=""
														data-error="Please select property type"
														value={face}
														onChange={(e) => { setFace(e.target.value) }}
													>
														<option value="" selected disabled>Select Property Facing</option>
														<option value="East">East</option>
														<option value="West">West</option>
														<option value="North">North</option>
														<option value="South">South</option>
													</select>
												</div>
												<div className='col-lg-4 tw-grid'>
													<label htmlFor="bhk_type" className='tw-font-semibold'>BHK_Type</label>
													<select
														id="bhk_type"
														className='tw-border-2 tw-rounded-2 tw-h-11 tw-p-2 tw-mt-2 tw-w-full'
														required=""
														data-error="Please select property type"
														value={houseType}
														onChange={(e) => { setHouseType(e.target.value) }}
													>
														<option value="" selected disabled>Select BHK_Type</option>
														<option value="1 BHK">1 BHK</option>
														<option value="2 BHK">2 BHK</option>
														<option value="3 BHK">3 BHK</option>
														<option value="3+ BHK">3+ BHK</option>
													</select>
												</div>

											</div>



											<div className="row tw-mt-10">
												<h1 className='tw-font-semibold'>Facilities</h1>
											</div>
											<div className="row tw-grid  md:tw-flex tw-space-y-5 tw-p-3 tw-justify-evenly">
												<div className="tw-border-2 tw-p-2 tw-rounded-2 col-md-2 tw-pl-7 md:tw-mt-5">
													<input className="form-check-input" type="checkbox" name='parking' id='parking' onChange={handleCheckboxChange} />
													<label className="form-check-label tw-pl-3" htmlFor="parking">
														Parking
													</label>
												</div>
												<div className="tw-border-2 tw-p-2 tw-rounded-2 col-md-2  tw-pl-7 ">
													<input className="form-check-input" type="checkbox" name='lift' id='lift' onChange={handleCheckboxChange} />
													<label className="form-check-label tw-pl-3" htmlFor="lift">
														Lift
													</label>
												</div>
												<div className="tw-border-2 tw-p-2 tw-rounded-2 col-md-2  tw-pl-7">
													<input className="form-check-input" type="checkbox" name='gas-pipeline' id='gas-pipeline' onChange={handleCheckboxChange} />
													<label className="form-check-label tw-pl-3" htmlFor="gas-pipeline">
														Gas Pipeline
													</label>
												</div>
											</div>
											<div className="row  tw-grid  md:tw-flex tw-space-y-5 tw-p-3 tw-justify-evenly">
												<div className="tw-border-2 tw-p-2 tw-rounded-2 col-md-2 tw-pl-7 md:tw-mt-5">
													<input className="form-check-input" type="checkbox" name='garden' id='garden' onChange={handleCheckboxChange} />
													<label className="form-check-label tw-pl-3" htmlFor="garden">
														Garden
													</label>
												</div>
												<div className="tw-border-2 tw-p-2 tw-rounded-2 col-md-2  tw-pl-7">
													<input className="form-check-input" type="checkbox" name='security' id='security' onChange={handleCheckboxChange} />
													<label className="form-check-label tw-pl-3" htmlFor="security">
														24x7 Security
													</label>
												</div>
												<div className="tw-border-2 tw-p-2 tw-rounded-2 col-md-2  tw-pl-7">
													<input className="form-check-input" type="checkbox" name='inverter' id='inverter' onChange={handleCheckboxChange} />
													<label className="form-check-label tw-pl-3" htmlFor="inverter">
														Inverter
													</label>
												</div>
											</div>

											<div className="row tw-mt-10">
												<h1 className=' tw-font-semibold'>Furnishing</h1>
											</div>
											<div className="row  tw-grid  md:tw-flex tw-space-y-4 tw-p-3 tw-justify-evenly  ">
												<div className="tw-border-2 tw-p-2 tw-rounded-2 col-md-2 tw-pl-5 md:tw-mt-5">
													<input className="form-check-input" type="radio" name="amenity" id="parking" value='Unfurnished' checked={furnishing === 'Unfurnished'} onChange={handleFurnisherType} />

													<label className="form-check-label tw-pl-2" htmlFor="parking">
														Un-Furnished
													</label>
												</div>
												<div className="tw-border-2 tw-p-2 tw-rounded-2 col-md-2 tw-pl-5">
													<input className="form-check-input" type="radio" name="amenity" id="lift" value='Semi Furnished' checked={furnishing === 'Semi Furnished'} onChange={handleFurnisherType} />
													<label className="form-check-label tw-pl-2" htmlFor="lift">
														Semi-Furnished
													</label>
												</div>
												<div className="tw-border-2 tw-p-2 tw-rounded-2 col-md-2 tw-pl-5">
													<input className="form-check-input" type="radio" name="amenity" id="gas-pipeline" value='Full Furnished' checked={furnishing === 'Full Furnished'} onChange={handleFurnisherType} />
													<label className="form-check-label tw-pl-2" htmlFor="gas-pipeline">
														Full-Furnished
													</label>
												</div>

											</div>

											<div className="row tw-mt-3">
												<div className="col-md-6 tw-grid">
													<label htmlFor="contact" className="tw-font-semibold">Contact No.</label>
													<input
														type="text"
														id="contact"
														className="tw-border-2 tw-rounded-2 tw-h-11 tw-p-2 tw-mt-2"
														placeholder="Contact No."
														value={mobileNo}
														onChange={handleMobileNoChange}
													/>
													{mobileNoError && <p className="text-red-500" style={{ color: "red" }}>{mobileNoError}</p>}
												</div>
												<div className="col-md-6 tw-grid">
													<label htmlFor="email" className=' tw-font-semibold' >Email</label>
													<input type="text" id="email" className=' tw-border-2 tw-rounded-2 tw-h-11 tw-p-2 tw-mt-2' placeholder='Enter Email' onChange={(e) => { setEmail(e.target.value) }} />
												</div>
											</div>
											<div className=' tw-flex tw-justify-end tw-mt-10 gap-3'>
											</div>


										</div>
									</div>
								)}
								<div className=' tw-flex tw-justify-end tw-mt-10 gap-3'>
									{activeTabIndex > 0 && (
										<button className=' tw-font-semibold tw-bg-black tw-text-white tw-p-2 tw-w-40 col-2 tw-h-11 tw-text-lg tw-rounded-1' onClick={() => setActiveTabIndex(activeTabIndex - 1)}>Previous</button>
									)}
									{activeTabIndex < 3 && (
										<button className=' tw-font-semibold tw-bg-black tw-text-white tw-p-2 tw-w-40 col-2 tw-h-11 tw-text-lg tw-rounded-1' onClick={handleNext}>Next</button>
									)}
									{activeTabIndex === 3 && (
										<button className=' tw-font-semibold tw-bg-black tw-text-white tw-p-2 tw-w-40 col-2 tw-h-11 tw-text-lg tw-rounded-1' onClick={addPropertyData}>Add</button>
									)}

								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	)
}
