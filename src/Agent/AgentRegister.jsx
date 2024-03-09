import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import './AgentRegister.css';
import img from '../Assests/Image/person.avif'
// import person from '../Assets/Image/agent/person.jpg';
import FileUploadIcon from '@mui/icons-material/FileUpload';

const steps = [
	'Step1',
	'Step2',
	'Step3',
];
export const AgentRegister = () => {
	const [step, setStep] = useState(1);
	const totalSteps = 3;

	const nextStep = () => {
		if (step < totalSteps) {
			setStep(step + 1);
		}
	};

	const prevStep = () => {
		if (step > 1) {
			setStep(step - 1);
		}
	};

	return (
		<>
			<div className="tw-grid tw-place-content-center tw-h-screen tw-p-10">
				<div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 md:tw-grid-cols-3 tw-gap-4 p-4 tw-border tw-border-gray-300 tw-rounded-md tw-shadow-md tw-overflow-hidden tw-p-5">
					<div className="tw-col-span-1 sm:tw-col-span-2 md:tw-col-span-1">
						<img
							src={img}
							alt="Agent Image"
							className="w-full h-[100px] rounded"
							style={{ height: "200px" }}
						/>
					</div>

					<div className="tw-col-span-1 sm:tw-col-span-2 md:tw-col-span-2">
						<div className="flex items-center justify-between mb-4">
							<div className="flex items-center">
								{[1, 2, 3].map((s) => (
									<div
										key={s}
										className={`w-6 h-6 rounded-full mx-1 ${s <= step ? 'bg-green-500' : 'bg-gray-300'
											}`}
									>
										{s <= step && <span className="text-black">{s}</span>}
									</div>
								))}
							</div>
						</div>
						<Box sx={{ width: '100%' }}>
							<Stepper activeStep={1} alternativeLabel>
								{steps.map((label) => (
									<Step key={label}>
										<StepLabel>{label}</StepLabel>
									</Step>
								))}
							</Stepper>
						</Box>
						<form>
							{/* Step Content */}
							{step === 1 && (
								<div>
									<div className=" grid">
										<label htmlFor="name" className=' tw-font-semibold' >Name</label>
										<input type="text" id="name" className=' border-2 rounded-2 tw-h-11 tw-p-2' />
									</div>
									<div className=" grid tw-mt-3">
										<label htmlFor="email" className=' tw-font-semibold' >Email</label>
										<input type="text" id="email" className=' border-2 rounded-2 tw-h-11 tw-p-2 tw-mt-1' />
									</div>
									<div className=" grid tw-mt-3">
										<label htmlFor="contact" className=' tw-font-semibold' >Contact No.</label>
										<input type="text" id="contact" className=' border-2 rounded-2 tw-h-11 tw-p-2  tw-mt-1' />
									</div>
								</div>
							)}
							{step === 2 && (
								<div>
									{/* <div className=" tw-grid tw-col-span-1 sm:tw-col-span-2 md:tw-col-span-1 ">
                                        <label htmlFor="age" className=' tw-font-semibold' >Age</label>
                                        <input type="text" id="age" className=' border-2 rounded-2 tw-h-11 tw-p-2 tw-mt-2' required />
                                    </div> */}
									{/* <label htmlFor="gender" className=' tw-font-semibold' >Gender</label> */}
									{/* <div className=' tw-flex'>
                                        <div className=" tw-flex flex tw-col-span-1 sm:tw-col-span-2 md:tw-col-span-1  border-2 p-2 rounded-2 ">
                                            <input className="form-check-input" type="radio" name="amenity" id="parking" />Male
                                            <label className="form-check-label tw-pl-1" htmlFor="parking">
                                                Male
                                            </label>
                                        </div>
                                        <div className=" tw-grid tw-col-span-1 sm:tw-col-span-2 md:tw-col-span-1  border-2 p-2 rounded-2 ">
                                            <input className="form-check-input" type="radio" name="amenity" id="lift" />Female
                                            <label className="form-check-label tw-pl-2" htmlFor="lift">
                                                Female
                                            </label>
                                        </div>
                                    </div> */}
									{/* <div className=" tw-grid tw-col-span-1 sm:tw-col-span-2 md:tw-col-span-1 ">
                                        <label htmlFor="age" className=' tw-font-semibold' >Gender</label>
                                        <input type="radio" id="male" className=' tw-border-2 rounded-2 tw-h-11 tw-p-2 tw-mt-2' required />
                                    </div>
                                    <div className=" tw-grid tw-col-span-1 sm:tw-col-span-2 md:tw-col-span-1 ">
                                        <input type="text" id="age" className=' border-2 rounded-2 tw-h-11 tw-p-2 tw-mt-10' required />
                                    </div> */}
									{/* <div className='tw-grid tw-grid-cols-2 tw-gap-2 tw-bg-blue-500 tw-w-full'>
                                        <div>
                                            <input type="text" className='w-full border-2 h-11 p-2' placeholder="Input 1" style={{ cursor: "text" }} />
                                        </div>
                                        <div>
                                            <input type="text" className='w-full border-2 h-11 p-2' placeholder="Input 2" />
                                        </div>
                                    </div> */}
									<div className='tw-grid'>
										<label htmlFor="age" className='tw-font-semibold'>Age</label>
										<input type="text" id="age" className='border-2 rounded-2 h-11 ' style={{ width: "49%" }} />
									</div>
									<label htmlFor="gender" className=' tw-font-semibold tw-mt-2'>Gender</label>
									<div className=' flex gap-3'>
										<div className=" tw-flex flex  border-2 p-2 rounded-2 w-full ">
											<input className="form-check-input" type="radio" name="amenity" id="parking" />
											<label className="form-check-label tw-pl-1" htmlFor="parking">
												Male
											</label>
										</div>
										<div className=" flex  border-2 p-2 rounded-2 w-full">
											<input className="form-check-input" type="radio" name="amenity" id="lift" />
											<label className="form-check-label tw-pl-2" htmlFor="lift">
												Female
											</label>
										</div>
									</div>
									<div className="tw-flex">


										<div className="tw-grid tw-w-full tw-mt-2">
											<label htmlFor="name" className='tw-font-semibold'>City</label>
											<input type="text" id="name" className='border-2 rounded-2 h-11 p-2' required />
										</div>
										<div className="grid ml-3 w-full tw-mt-2">
											<label htmlFor="email" className='tw-font-semibold'>State</label>
											<input type="text" id="email" className='border-2 rounded-2 h-11 p-2 mt-1' required />
										</div>
									</div>
									<div className=" grid tw-mt-2">
										<label htmlFor="email" className=' tw-font-semibold' >Address</label>
										<input type="text" id="email" className=' border-2 rounded-2 tw-h-11 tw-p-2 tw-mt-1' />
									</div>
								</div>
							)}
							{step === 3 && (
								<div>
									<div className=" grid tw-mt-3 ">
										<label htmlFor="email" className=' tw-font-semibold' >Bank Name</label>
										<input type="text" id="email" className=' border-2 rounded-2 tw-h-11 tw-p-2 tw-mt-1' />
									</div>
									<div className=" grid tw-mt-2 ">
										<label htmlFor="email" className=' tw-font-semibold' >Bank A/c No.</label>
										<input type="text" id="email" className=' border-2 rounded-2 tw-h-11 tw-p-2 tw-mt-1' />
									</div>
									<div className=" grid tw-mt-2">
										<label htmlFor="name" className=' tw-font-semibold' >IFSC No.</label>
										<input type="text" id="name" className=' border-2 rounded-2 tw-h-11 tw-p-2' required />
									</div>
									{/* 
                                    <label htmlFor="card" className=' tw-font-semibold tw-mt-4' >Upload Your AdharCard or PanCard</label>
                                    <input type="file" id='file' style={{ display: "none" }} />

                                    <label htmlFor="file" className=' tw-place-content-center grid p-4 tw-h-full tw-w-full tw-mt-1 rounded-3' style={{ color: "#de0611", border: "1px dashed black" }}>
                                        <h1 className=' place-content-center grid'>  <FileUploadIcon style={{ height: "40px", width: "40px", color: "#ddd" }} className=' border-2 rounded-3' /></h1>
                                        <h1 className=' tw-font-bold mt-3  place-content-center grid tw-text-black'>Upload your Identity Here</h1>
                                        <h1 className='  place-content-center grid  tw-mt-4' style={{ color: "#aaa" }}>Photos must be JPEG or PNG format and at least 2048x768</h1>

                                    </label> */}

									<div >
										<label htmlFor="card" className=' tw-font-semibold tw-mt-3'>Adhar card</label>
										<div className=' tw-flex tw-gap-4 '>
											<div className=' tw-w-full'>

												<input type="file" id='file' style={{ display: "none" }} />
												<label htmlFor="file" className=' tw-place-content-center tw-flex gap-3 p-2 tw-h-full tw-w-full tw-mt-1 rounded-3' style={{ color: "#de0611", border: "1px dashed black" }}>
													<h1 className=' place-content-center grid'>  <FileUploadIcon style={{ height: "34px", width: "34px", color: "#ddd" }} className=' border-2 rounded-3' /></h1>
													{/* <h1 className=' tw-font-bold  place-content-center grid tw-text-black'>Front side</h1> */}
													<h1 className='  place-content-center grid ' style={{ color: "#aaa" }}>Front side of Adhar</h1>

												</label>
											</div>

											<div className=' tw-w-full'>
												<input type="file" id='file' style={{ display: "none" }} />
												<label htmlFor="file" className=' tw-place-content-center tw-flex gap-3 p-2 tw-h-full tw-w-full tw-mt-1 rounded-3' style={{ color: "#de0611", border: "1px dashed black" }}>
													<h1 className=' place-content-center grid'>  <FileUploadIcon style={{ height: "34px", width: "34px", color: "#ddd" }} className=' border-2 rounded-3' /></h1>
													{/* <h1 className=' tw-font-bold  place-content-center grid tw-text-black'>Front side</h1> */}
													<h1 className='  place-content-center grid ' style={{ color: "#aaa" }}>Back side of Adhar</h1>

												</label>
											</div>
										</div>
									</div>
									<div >
										<label htmlFor="card" className=' tw-font-semibold tw-mt-3'>Pan card</label>
										<div className=' tw-flex tw-gap-4 '>
											<div className=' tw-w-full'>
												<input type="file" id='file' style={{ display: "none" }} />
												<label htmlFor="file" className=' tw-place-content-center tw-flex gap-3 p-2 tw-h-full tw-w-full tw-mt-1 rounded-3' style={{ color: "#de0611", border: "1px dashed black" }}>
													<h1 className=' place-content-center grid'>  <FileUploadIcon style={{ height: "34px", width: "34px", color: "#ddd" }} className=' border-2 rounded-3' /></h1>
													{/* <h1 className=' tw-font-bold  place-content-center grid tw-text-black'>Front side</h1> */}
													<h1 className='  place-content-center grid ' style={{ color: "#aaa" }}>Front side of Pan</h1>

												</label>
											</div>
											<div className=' tw-w-full'>
												<input type="file" id='file' style={{ display: "none" }} />
												<label htmlFor="file" className=' tw-place-content-center tw-flex gap-3 p-2 tw-h-full tw-w-full tw-mt-1 rounded-3' style={{ color: "#de0611", border: "1px dashed black" }}>
													<h1 className=' place-content-center grid'>  <FileUploadIcon style={{ height: "34px", width: "34px", color: "#ddd" }} className=' border-2 rounded-3' /></h1>
													{/* <h1 className=' tw-font-bold  place-content-center grid tw-text-black'>Front side</h1> */}
													<h1 className='  place-content-center grid ' style={{ color: "#aaa" }}>Back side of Pan</h1>

												</label>
											</div>
										</div>
									</div>
								</div>
							)}
							<div className="tw-mt-4 flex gap-4 tw-justify-end">
								{step > 1 && (
									<button
										type="button"
										className="tw-bg-gray-500 tw-text-white tw-px-4 tw-py-2 tw-rounded"
										onClick={prevStep}
									>
										Previous
									</button>
								)}

								{step < totalSteps ? (
									<button className='tw-font-semibold bg-black text-white p-2 tw-w-40 col-2 tw-h-11 tw-text-lg rounded-1' onClick={nextStep}>
										Save & Next
									</button>
								) : (
									<button className='font-semibold bg-black text-white p-2 w-40 col-2 h-11 text-lg rounded-1' >
										Submit
									</button>
								)}
							</div>

						</form>
					</div>
				</div >
			</div >
		</>
	);
};
