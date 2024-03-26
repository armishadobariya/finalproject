import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminAgentDetails.css';
// import h5 from "../../Assests/Image/Admin/Dashboard/TotalProperty/h5.png";
import Admin_Sidebar from '../../Admin_Nav/Admin_Sidebar';
import Admin_Nav from '../../Admin_Nav/Admin_Nav';
import { getAgentUrl, getUserUrl, setMeetingUrl } from '../../../User/Components/Api';
import axios from 'axios';
import CloseIcon from '@mui/icons-material/Close';

const AdminAgentDetails = () => {

	const navigate = useNavigate();
	const [loading, setLoading] = useState(true);
	const [agentData, setAgentData] = useState([]);
	const [agentDataForModal, setAgentDataForModal] = useState([]);
	const [meetingDate, setMeetingDate] = useState('');
	const [meetingTime, setMeetingTime] = useState('');
	const [meetingLink, setMeetingLink] = useState('');
	const [showModal, setShowModal] = useState(false);

	const handlePopUp = (data) => {
		setShowModal(true);
		setAgentDataForModal(data);
		console.log(agentDataForModal);
	}
	const getAgent = async () => {
		try {
			const token = localStorage.getItem('admin');
			const tokenArray = JSON.parse(token);

			const response = await axios.get(getAgentUrl, {
				headers: {
					Authorization: `Bearer ${tokenArray[0]}`,
				},
			});
			console.log("agent", response.data.agents);

			if (response.status === 200) {
				const data = response.data.agents;
				console.log('data: ', data);
				setAgentData(data);
			}
		} catch (error) {
			console.error("fetch all property:", error.message);
		}
	}

	const setMeeting = (name, email) => async () => {
		try {
			const token = localStorage.getItem('token');

			const sendData = {
				name: name,
				email: email,
				date: meetingDate,
				time: meetingTime,
				link: meetingLink,

			};
			console.log(sendData);

			const response = await axios.post(setMeetingUrl, sendData, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});

			if (response.status === 200) {
				// getProperty();
				setShowModal(false);
				console.log("success....!")


			}
		} catch (error) {
			console.error("Error:", error.message);
		}
	}









	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
			getAgent();
		}, 500)

	}, []);


	const formatDate = (dateString) => {
		const date = new Date(dateString);
		const day = date.getDate().toString().padStart(2, '0');
		const month = (date.getMonth() + 1).toString().padStart(2, '0');
		const year = date.getFullYear();
		return `${day} -${month} -${year}`;
	};


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

					<div class="container-fluid" id="main-content">
						<div class="row">
							<div class="col-lg-10 ms-auto p-4 overfloe-hidden">
								<h3 class="mb-4 tw-text-xl tw-font-semibold">AGENTS</h3>

								<div class="card border-0 shadow mb-4">
									<div class="card-body">

										{/* <div class="text-end mb-4">
											<input type="text" oninput="search_user(this.value)" class="form-control shadow-none w-25 ms-auto" placeholder="Type to search" />
										</div> */}

										<div class="table-responsive">
											<table class="table table-hover border text-center">
												<thead>
													<tr class="bg-dark text-light" style={{ "backgroundColor": "black", "color": "white" }}>
														<th scope="col">Profile</th>
														<th scope="col">Details</th>
														<th scope="col">Personal Info</th>
														<th scope="col">Location</th>
														<th scope="col">Bank Details</th>
														<th scope="col">Proof</th>

														<th scope="col">Meeting</th>
														<th scope="col">Status</th>


													</tr>
												</thead>
												<tbody >
													{agentData.map((data, index) => (
														<>
															<tr >
																<td>
																	<img src={data.profilePic} style={{ "borderRadius": "50%", height: "50px", width: "60px" }} alt="" />
																</td>
																<td>

																	<td style={{ display: 'block' }}>{data.name}</td>
																	<td style={{ display: 'block' }}>{data.email}</td>
																	<td style={{ display: 'inline-block' }}>+91 {data.mobileNo}</td>
																</td>

																<td>

																	<td style={{ display: 'block' }}>Age:{data.age}</td>
																	<td style={{ display: 'block' }}>Gender:{data.gender}</td>
																</td>
																<td>

																	<td style={{ display: 'block' }}>{data.address}</td>
																	<td style={{ display: 'block' }}>{data.city}</td>
																	<td style={{ display: 'block' }}>{data.state}</td>
																</td>
																<td>
																	<td style={{ display: 'block' }}> Bank Name: {data.bankName}</td>
																	<td style={{ display: 'block' }}> Ac: {data.bankAccountNo}</td>
																	<td style={{ display: 'block' }}> IFSC: {data.ifscCode}</td>

																</td>
																<td>
																	<tr style={{ marginBottom: "10px" }}>
																		<td style={{ display: 'block' }}>
																			<span>Adhar Card:</span>
																		</td>
																		<td style={{ paddingRight: '15px', paddingBottom: '10px' }}>
																			<img src={data.adharCardFront} style={{ height: "60px", width: "300px" }} className="rounded" alt="" />
																		</td>
																		<td>
																			<img src={data.adharCardBack} style={{ height: "60px", width: "300px" }} className="rounded" alt="" />
																		</td>
																	</tr>
																	<tr style={{ marginTop: "10px" }}>
																		<td style={{ display: 'block' }}>
																			<span>Pan <br /> Card:</span>
																		</td>
																		<td style={{ paddingLeft: '5px' }}>
																			<img src={data.panCard} style={{ height: "60px", width: "80px" }} className="rounded" alt="" />
																		</td>
																	</tr>


																</td>
																<td style={{ paddingLeft: '20px' }} >
																	<button
																		className='bg-black text-white py-1 px-3 pb-2 md:ml-8 rounded md:static font-semibold duration-500 tw-mt-6'
																		onClick={() => handlePopUp(data)}>Set-Meeting</button>
																</td>
																<td style={{ paddingLeft: '20px' }} >
																	<p className='tw-border-2 tw-rounded-lg py-1 px-1 pb-1 tw-mb-2'>{data.status}</p>
																	<button
																		className='bg-black text-white py-1 px-3 pb-2 md:ml-8 rounded md:static font-semibold duration-500'
																		>Approve</button>
																	<button
																		className='bg-black text-white py-1 px-4 pb-2 md:ml-8 rounded md:static font-semibold duration-500 tw-mt-4'
																		onClick={() => handlePopUp(data)}>Cancle</button>
																</td>


															</tr>

														</>








													))}

													<div className="modal" tabIndex="-1" style={{ display: showModal ? 'block' : 'none', backgroundColor: 'transparent', boxShadow: 'none', position: 'fixed', top: 65, left: 10, right: 0, bottom: 0 }}>
														<div className="modal-dialog " style={{ maxWidth: "500px", maxHeight: "600px", width: "100%", backgroundColor: "#ffffff" }}>
															<div className="modal-content" style={{ backgroundColor: "#ffffff", height: '550px', maxWidth: "500px", width: "100%" }}>


																<div className="modal-header">
																	<h5 className="modal-title tw-text-xl tw-font-semibold">Meeting Deatils</h5>
																	<button type="button" className="btn-close" onClick={() => setShowModal(false)}><CloseIcon className='tw-mt-[-5px] tw-mr-[20px]' /></button>
																</div>
																<div className="modal-body " style={{ textAlign: 'left', padding: '20px' }}>
																	<div >
																		<label htmlFor="" className='tw-text-[18px] tw-font-semibold tw-text-gray-500 tw-mr-3 '>Name </label>
																		<h1 className="tw-w-full tw-border-2 tw-h-10 tw-p-3 tw-mb-4 tw-text-black tw-mt-2" >{agentDataForModal.name}</h1>
																	</div>
																	<div >
																		<label htmlFor="" className='tw-text-[18px] tw-font-semibold tw-text-gray-500 tw-mr-3 '>Email </label>
																		<h1 className="tw-w-full tw-border-2 tw-h-10 tw-p-3 tw-mb-4 tw-text-black tw-mt-2" >{agentDataForModal.email}</h1>
																	</div>
																	<div className='tw-flex'>
																		<div className='tw-mr-3'>
																			<label htmlFor="" className='tw-text-[18px] tw-font-semibold tw-text-gray-500 tw-mr-3 '>Date </label>
																			<input type="date"
																				className="tw-w-full tw-border-2 tw-h-10 tw-p-3 tw-mb-4 tw-text-black tw-mt-2"
																				onChange={(e) => { setMeetingDate(e.target.value) }}
																			/>
																		</div>
																		<div>
																			<label htmlFor="" className='tw-text-[18px] tw-font-semibold tw-text-gray-500 tw-mr-3 '>Time </label>
																			<input type="time"
																				className="tw-w-full tw-border-2 tw-h-10 tw-p-3 tw-mb-4 tw-text-black tw-mt-2"
																				onChange={(e) => { setMeetingTime(e.target.value) }} />

																		</div>
																	</div>
																	<div >
																		<label htmlFor="" className='tw-text-[18px] tw-font-semibold tw-text-gray-500 tw-mr-3 '>Meeting Link </label>
																		<input type="text" className="tw-w-full tw-border-2 tw-h-10 tw-p-3 tw-mb-4 tw-text-black tw-mt-2"
																			onChange={(e) => { setMeetingLink(e.target.value) }}
																		/>
																	</div>
																</div>


																<div className="modal-footer">
																	<button type="button" className="btn btn-primary " style={{ backgroundColor: "black", "border": "none" }} onClick={() => setShowModal(false)}>Close</button>
																	<button type="button" className="btn btn-primary " style={{ backgroundColor: "black", "border": "none" }} onClick={setMeeting(agentDataForModal.name, agentDataForModal.email)}>Send</button>
																</div>
															</div>
														</div>
													</div >








												</tbody>
											</table>
										</div>
									</div>
								</div>


							</div>
						</div>
					</div>







				</>

			)
			}


		</>
	)
}

export default AdminAgentDetails;