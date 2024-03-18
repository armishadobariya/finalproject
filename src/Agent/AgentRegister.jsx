import React, { useState } from 'react';
import logo from '../Assests/Image/nav2.svg';

import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import './AgentRegister.css';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import axios from 'axios';
import { agentAddUrl } from '../User/Components/Api';

const steps = ['Personal Information', 'Personal Information', 'Bank Related Information'];

export const AgentRegister = () => {
	const [step, setStep] = useState(1);
	const totalSteps = 3;

	const [agentName, setAgentName] = useState('');
	const [agentEmail, setAgentEmail] = useState('');
	const [agentContact, setAgentContact] = useState('');
	const [agentAge, setAgentAge] = useState('');
	const [agentGender, setAgentGender] = useState('');
	const [agentCity, setAgentCity] = useState('');
	const [agentState, setAgentState] = useState('');
	const [agentAddress, setAgentAddress] = useState('');
	const [agentBankName, setAgentBankName] = useState('');
	const [agentBankAcc, setAgentBankAcc] = useState('');
	const [agentIfscNo, setAgentIfscNo] = useState('');
	const [selectedFiles, setSelectedFiles] = useState([]);

	const [adharFront, setAdharFront] = useState('');
	const [adharBack, setAdharBack] = useState('');
	const [panFront, setPanFront] = useState('');
	const [panBack, setPanBack] = useState('');


	const addAgentData = async (e) => {
		console.log('hello');
		try {
			const formData = new FormData();

			formData.append('name', agentName);
			formData.append('email', agentEmail);
			formData.append('mobileNo', agentContact);
			formData.append('age', agentAge);
			formData.append('gender', agentGender);
			formData.append('city', agentCity);
			formData.append('state', agentState);
			formData.append('address', agentAddress);
			formData.append('bankName', agentBankName);
			formData.append('bankAccountNo', agentBankAcc);
			formData.append('ifscCode', agentIfscNo);
			formData.append('adharFront', adharFront);
			formData.append('adharBack', adharBack);
			formData.append('panFront', panFront);
			formData.append('panBack', panBack);

			const token = localStorage.getItem("token");

			const responseData = await axios.post(agentAddUrl, formData)

			if (responseData.status === 201) {

				console.log(responseData);
			}
		}
		catch (error) {
			console.log(error);
		}
	}




	const nextStep = () => {
		if (step < totalSteps) {
			setStep((prevStep) => prevStep + 1);
		}
	};

	const prevStep = () => {
		if (step > 1) {
			setStep((prevStep) => prevStep - 1);
		}
	};


	const handleAgentGender = (e) => {
		setAgentAge(e.target.value);
	}

	// const handleImage = (e) => {
	// 	const files = e.target.files;
	// 	const fileNames = [];
	// 	for (let i = 0; i < files.length; i++) {
	// 		fileNames.push(files[i].name);
	// 	}
	// 	setSelectedFiles(fileNames);
	// };

	const handleImage = (e, type) => {
		const file = e.target.files[0];
		switch (type) {
			case 'adharFront':
				setAdharFront(file);
				break;
			case 'adharBack':
				setAdharBack(file);
				break;
			case 'panFront':
				setPanFront(file);
				break;
			case 'panBack':
				setPanBack(file);
				break;
			default:
				break;
		}
	};

	return (
		<>
			<div className="tw-grid tw-place-content-center tw-h-screen ">
				<div className=" tw-p-10 tw-w-full tw-rounded-2xl" style={{ backgroundColor: '#f7f7f7' }}>
					<div className=' tw-mb-2 tw-p-2'>
						<h1 className=' tw-text-3xl tw-font-bold '>Register Your self as an Agent</h1>
						<p className='  tw-mt-3'>complete your profile to following steps!</p>
					</div>
					<div className=" p-4 tw-border rounded-md tw-shadow-md tw-overflow-hidden tw-text-black" style={{ backgroundColor: "white" }}>
						{/* <div className="tw-col-span-1 sm:tw-col-span-2 md:tw-col-span-1">
                        <img src={img} alt="Agent Image" className="w-full  rounded" />
                    </div> */}
						<div className="sm:tw-col-span-2 md:tw-col-span-2">
							{/* <div className=' tw-place-content-center tw-flex tw-mb-5 tw-mt-3'>
                                <img src={logo} alt="" height="100px" width="230px" className=' tw-place-content-center' />
                            </div> */}
							<Box sx={{ width: '100%' }}>
								<Stepper activeStep={step - 1} alternativeLabel>
									{steps.map((label) => (
										<Step key={label}>
											<StepLabel >{label}</StepLabel>
										</Step>
									))}
								</Stepper>
							</Box>
							<form>
								{step === 1 && (
									<div>
										<div className="tw-grid">
											<label htmlFor="name" className="tw-font-semibold">
												Name
											</label>
											<input type="text" id="name" className="tw-border-2 rounded-2 tw-w-full tw-h-11 tw-p-2" value={agentName} onChange={(e) => { setAgentName(e.target.value) }} />
										</div>
										<div className="tw-grid tw-mt-3">
											<label htmlFor="email" className="tw-font-semibold">
												Email
											</label>
											<input type="text" id="email" className="tw-border-2 rounded-2 tw-h-11 tw-p-2 tw-mt-1 " value={agentEmail} onChange={(e) => { setAgentEmail(e.target.value) }} />
										</div>
										<div className="tw-grid tw-mt-3">
											<label htmlFor="contact" className="tw-font-semibold">
												Contact No.
											</label>
											<input type="text" id="contact" className="tw-border-2 rounded-2 tw-h-11 tw-p-2 tw-mt-1" value={agentContact} onChange={(e) => { setAgentContact(e.target.value) }} />
										</div>
									</div>
								)}
								{step === 2 && (
									<div>
										{/* ... Step 2 content */}
										<div className='tw-grid'>
											<label htmlFor="age" className='tw-font-semibold'>Age</label>
											<input type="text" id="age" className='tw-border-2 rounded-2 tw-h-11 ' value={agentAge} onChange={(e) => { setAgentAge(e.target.value) }} style={{ width: "49%" }} />
										</div>
										<label htmlFor="gender" className=' tw-font-semibold tw-mt-2'>Gender</label>
										<div className=' flex gap-3'>
											<div className=" tw-flex tw-border-2 tw-p-2 rounded-2 tw-w-full ">
												<input className="form-check-input" type="radio" name="amenity" id="parking" value="male" checked={agentAge === 'male'} onChange={handleAgentGender} />
												<label className="form-check-label tw-pl-1" htmlFor="parking">
													Male
												</label>
											</div>
											<div className=" tw-flex  tw-border-2 tw-p-2 rounded-2 tw-w-full">
												<input className="form-check-input" type="radio" name="amenity" id="lift" value="female" checked={agentAge === 'female'} onChange={handleAgentGender} />
												<label className="form-check-label tw-pl-2" htmlFor="lift">
													Female
												</label>
											</div>
										</div>
										<div className="tw-flex">


											<div className="tw-grid tw-w-full tw-mt-2">
												<label htmlFor="name" className='tw-font-semibold'>City</label>
												<input type="text" id="name" className='tw-border-2 rounded-2 tw-h-11 tw-p-2' value={agentCity} onChange={(e) => { setAgentCity(e.target.value) }} required />
											</div>
											<div className="tw-grid tw-ml-3 tw-w-full tw-mt-2">
												<label htmlFor="email" className='tw-font-semibold'>State</label>
												<input type="text" id="email" className='tw-border-2 rounded-2 tw-h-11 tw-p-2 tw-mt-1' value={agentState} onChange={(e) => { setAgentState(e.target.value) }} required />
											</div>
										</div>
										<div className=" tw-grid tw-mt-2">
											<label htmlFor="email" className=' tw-font-semibold' >Address</label>
											<input type="text" id="email" className=' tw-border-2 rounded-2 tw-h-11 tw-p-2 tw-mt-1' value={agentAddress} onChange={(e) => { setAgentAddress(e.target.value) }} />
										</div>
									</div>
								)}
								{step === 3 && (
									<div>
										{/* ... Step 3 content */}
										<div className=" tw-grid tw-mt-3 ">
											<label htmlFor="email" className=' tw-font-semibold' >Bank Name</label>
											<input type="text" id="email" className=' tw-border-2 rounded-2 tw-h-10 tw-p-2 tw-mt-1' value={agentBankName} onChange={(e) => { setAgentBankName(e.target.value) }} />
										</div>

										<div className="tw-flex">


											<div className="tw-grid tw-w-full tw-mt-2">
												<label htmlFor="name" className='tw-font-semibold'>Bank Acc No.</label>
												<input type="text" id="name" className='tw-border-2 rounded-2 tw-h-10 tw-p-2' value={agentBankAcc} onChange={(e) => { setAgentBankAcc(e.target.value) }} required />
											</div>
											<div className="tw-grid tw-ml-3 tw-w-full tw-mt-2">
												<label htmlFor="email" className='tw-font-semibold'>IFSC No.</label>
												<input type="text" id="email" className='tw-border-2 rounded-2 tw-h-10 tw-p-2 tw-mt-1' value={agentIfscNo} onChange={(e) => { setAgentIfscNo(e.target.value) }} required />
											</div>
										</div>
										{/* <div className=" tw-grid tw-mt-2 ">
                                            <label htmlFor="email" className=' tw-font-semibold' >Bank A/c No.</label>
                                            <input type="text" id="email" className=' tw-border-2 rounded-2 tw-h-11 tw-p-2 tw-mt-1' />
                                        </div>
                                        <div className=" tw-grid tw-mt-2">
                                            <label htmlFor="name" className=' tw-font-semibold' >IFSC No.</label>
                                            <input type="text" id="name" className=' tw-border-2 rounded-2 tw-h-11 tw-p-2' required />
                                        </div> */}

										<div >
											<label htmlFor="card" className=' tw-font-semibold tw-mt-3'>Adhar card</label>
											<div className=' tw-flex tw-gap-2'>
												{/* <div className=' tw-w-full'>

													<input type="file" id='file' style={{ display: "none" }} />
													<label htmlFor="file" className=' tw-place-content-center tw-flex tw-gap-3 tw-p-1 tw-h-full tw-w-full tw-mt-1 rounded-3' style={{ color: "#de0611", border: "1px dashed black" }}>
														<h1 className=' tw-place-content-center tw-grid'>  <FileUploadIcon style={{ height: "28px", width: "28px", color: "#ddd" }} className=' border-2 rounded-3' /></h1>
														<h1 className='  tw-place-content-center tw-grid tw-pl-2' style={{ color: "#aaa" }}>Front side of Adhar</h1>

													</label>
												</div> */}

												<input type="file" id='adharFrontFile' style={{ display: "none" }} onChange={(e) => handleImage(e, 'adharFront')} multiple />
												<label htmlFor="adharFrontFile" className='tw-place-content-center tw-flex tw-gap-3 tw-p-1 tw-h-full tw-w-full tw-mt-1 rounded-3' style={{ color: "#de0611", border: "1px dashed black" }}>
													<h1 className='tw-place-content-center tw-grid'>  <FileUploadIcon style={{ height: "28px", width: "28px", color: "#ddd" }} className='border-2 rounded-3' /></h1>
													<h1 className='  tw-place-content-center tw-grid tw-pl-2' style={{ color: "#aaa" }}>Front side of Adhar</h1>
													{adharFront && <h1 style={{ color: 'black', fontWeight: '500' }}>{adharFront.name}</h1>}
												</label>



												<div className=' tw-w-full'>
													{/* <input type="file" id='file' style={{ display: "none" }} />
													<label htmlFor="file" className=' tw-place-content-center tw-flex tw-gap-3 tw-p-1 tw-h-full tw-w-full tw-mt-1 rounded-3' style={{ color: "#de0611", border: "1px dashed black" }}>
														<h1 className=' tw-place-content-center tw-grid'>  <FileUploadIcon style={{ height: "28px", width: "28px", color: "#ddd" }} className=' tw-border-2 rounded-3' /></h1>
														<h1 className='  tw-place-content-center tw-grid tw-pl-2' style={{ color: "#aaa" }}>Back side of Adhar</h1>

													</label> */}
													<input type="file" id='adharBackFile' style={{ display: "none" }} onChange={(e) => handleImage(e, 'adharBack')} multiple />
													<label htmlFor="adharBackFile" className='tw-place-content-center tw-flex tw-gap-3 tw-p-1 tw-h-full tw-w-full tw-mt-1 rounded-3' style={{ color: "#de0611", border: "1px dashed black" }}>
														<h1 className='tw-place-content-center tw-grid'>  <FileUploadIcon style={{ height: "28px", width: "28px", color: "#ddd" }} className='border-2 rounded-3' /></h1>
														<h1 className='  tw-place-content-center tw-grid tw-pl-2' style={{ color: "#aaa" }}>Back side of Adhar</h1>
														{adharBack && <h1 style={{ color: 'black', fontWeight: '500' }}>{adharBack.name}</h1>}
													</label>
												</div>
											</div>
										</div>
										<div >
											<label htmlFor="card" className=' tw-font-semibold tw-mt-3'>Pan card</label>
											<div className=' tw-flex tw-gap-4 '>
												<div className=' tw-w-full'>
													<input type="file" id='panFrontFile' style={{ display: "none" }} onChange={(e) => handleImage(e, 'panFront')} multiple />
													<label htmlFor="panFrontFile" className='tw-place-content-center tw-flex tw-gap-3 tw-p-1 tw-h-full tw-w-full tw-mt-1 rounded-3' style={{ color: "#de0611", border: "1px dashed black" }}>
														<h1 className='tw-place-content-center tw-grid'>  <FileUploadIcon style={{ height: "28px", width: "28px", color: "#ddd" }} className='border-2 rounded-3' /></h1>
														<h1 className='  tw-place-content-center tw-grid tw-pl-2' style={{ color: "#aaa" }}>Front side of Pan</h1>
														{panFront && <h1 style={{ color: 'black', fontWeight: '500' }}>{panFront.name}</h1>}
													</label>
												</div>
												<div className=' tw-w-full'>
													<input type="file" id='panBackFile' style={{ display: "none" }} onChange={(e) => handleImage(e, 'panBack')} multiple />
													<label htmlFor="panBackFile" className='tw-place-content-center tw-flex tw-gap-3 tw-p-1 tw-h-full tw-w-full tw-mt-1 rounded-3' style={{ color: "#de0611", border: "1px dashed black" }}>
														<h1 className='tw-place-content-center tw-grid'>  <FileUploadIcon style={{ height: "28px", width: "28px", color: "#ddd" }} className='border-2 rounded-3' /></h1>
														<h1 className='  tw-place-content-center tw-grid tw-pl-2' style={{ color: "#aaa" }}>Back side of Pan</h1>
														{panBack && <h1 style={{ color: 'black', fontWeight: '500' }}>{panBack.name}</h1>}
													</label>
												</div>
											</div>
										</div>
									</div>
								)}
								<div className="tw-mt-4 tw-flex tw-gap-4 tw-justify-end">
									{step > 1 && (
										<button
											type="button"
											className=" tw-font-semibold tw-bg-black tw-text-white tw-px-4 tw-py-2 rounded"
											onClick={prevStep}
										>
											Previous
										</button>
									)}
									{step < totalSteps ? (
										<button
											className="tw-font-semibold tw-text-white tw-bg-black tw-p-2 tw-w-40 tw-col-2 tw-h-11 tw-text-lg rounded-1"
											onClick={nextStep}
										>
											Save & Next
										</button>
									) : (
										<button
											className="tw-font-semibold tw-bg-black tw-text-white tw-p-2 tw-w-40 tw-col-2 tw-h-11 tw-text-lg rounded-1"
											onClick={addAgentData}
										>
											Submit
										</button>
									)}
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};