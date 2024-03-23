import React, { useState, useEffect } from 'react';
import Admin_Nav from '../Admin_Nav/Admin_Nav';
import Admin_Sidebar from '../Admin_Nav/Admin_Sidebar';
import './Dash.css';
import { Card, CardContent, Typography, Grid } from "@mui/material";
import home from "../../Assests/Image/Admin/house1.png";
import comment from "../../Assests/Image/Admin/comment.png";
import view from "../../Assests/Image/Admin/eye.png";
import book from "../../Assests/Image/Admin/heart.png";
import close from "../../Assests/Image/Admin/down-arrow.png";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Dasboard.css";
import StarIcon from '@mui/icons-material/Star';
import me from "../../Assests/Image/Home1/4me.jpeg";
import armisha from "../../Assests/Image/Home1/armisha.jpeg";
import p1 from "../../Assests/Image/Admin/Dashboard/01.jpg";
import p2 from "../../Assests/Image/Admin/Dashboard/02.jpg";
import p3 from "../../Assests/Image/Admin/Dashboard/03.jpg";
import p4 from "../../Assests/Image/Admin/Dashboard/04.jpg";
import map from "../../Assests/Image/Admin/map.png";
import { useNavigate } from 'react-router-dom';
import "./Common.css";
import { getFeedbackUrl, totalAgentCountUrl, totalPropertyCountUrl, totalRentCountUrl, totalSellCountUrl, totalUserCountUrl } from '../../User/Components/Api';
import axios from 'axios';

const Dashboard = () => {

	const [totalSeCount, setTotalSeCount] = useState(0);
	const [totalAgeCount, setTotalAgeCount] = useState(0);
	const [totalUseCount, setTotalUseCount] = useState(0);
	const [totalReCount, setTotalReCount] = useState(0);
	const [totalProCount, setTotalProCount] = useState(0);
	const [isCardOpen1, setIsCardOpen1] = useState(true);
	const [isCardOpen2, setIsCardOpen2] = useState(true);
	const [isCardOpen3, setIsCardOpen3] = useState(true);
	const [isCardOpen4, setIsCardOpen4] = useState(true);
	const [loading, setLoading] = useState(true);

	const [getFeedback, setGetFeedback] = useState([]);

	const getFeedbacks = async () => {
		try {
			const token = localStorage.getItem('token');

			const response = await axios.get(getFeedbackUrl, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			console.log("response:", response.data.data);

			if (response.status === 200) {
				const data = response.data.allProperty;
				console.log('data: ', data);
				setGetFeedback(data);
			}
		} catch (error) {
			console.error("fetch all property:", error.message);
		}
	}


	const navigate = useNavigate();

	const toggleCard1 = () => {
		console.log("hello");
		setIsCardOpen1(!isCardOpen1);
	}

	const toggleCard2 = () => {
		console.log("hello");
		setIsCardOpen2(!isCardOpen2);
	}
	const toggleCard3 = () => {
		console.log("hello");
		setIsCardOpen3(!isCardOpen3);
	}
	const toggleCard4 = () => {
		console.log("hello");
		setIsCardOpen4(!isCardOpen4);
	}

	const handleTotalProperty = () => {
		navigate('/Admin/TotalProperty');
	}
	const handleRentProperty = () => {
		navigate('/Admin/TotalRentProperty');
	}

	const handleSellProperty = () => {
		navigate('/Admin/TotalSellProperty');
	}


	const totalPropertyCount = async () => {
		try {
			const token = localStorage.getItem('token');

			const response = await axios.get(totalPropertyCountUrl, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			console.log("response:", response.data.property);

			if (response.status === 200) {
				const data = response.data.property;
				console.log('data: ', data);
				setTotalProCount(data);
			}
		} catch (error) {
			console.error("fetch all property:", error.message);
		}
	}

	const totalRentCount = async () => {
		try {
			const token = localStorage.getItem('token');

			const response = await axios.get(totalRentCountUrl, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			console.log("response:", response.data.property);

			if (response.status === 200) {
				const data = response.data.property;
				console.log('data: ', data);
				setTotalReCount(data);
			}
		} catch (error) {
			console.error("fetch all property:", error.message);
		}
	}
	const totalSellCount = async () => {
		try {
			const token = localStorage.getItem('token');

			const response = await axios.get(totalSellCountUrl, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			console.log("response:", response.data.property);

			if (response.status === 200) {
				const data = response.data.property;
				console.log('data: ', data);
				setTotalSeCount(data);
			}
		} catch (error) {
			console.error("fetch all property:", error.message);
		}
	}

	const totalUserCount = async () => {
		try {
			const token = localStorage.getItem('token');

			const response = await axios.get(totalUserCountUrl, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			console.log("response:", response.data.users);

			if (response.status === 200) {
				const data = response.data.users;
				console.log('data: ', data);
				setTotalUseCount(data);
			}
		} catch (error) {
			console.error("fetch all property:", error.message);
		}
	}

	const totalAgentCount = async () => {
		try {
			const token = localStorage.getItem('token');

			const response = await axios.get(totalAgentCountUrl, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			console.log("response:", response.data.agents);

			if (response.status === 200) {
				const data = response.data.agents;
				console.log('data: ', data);
				setTotalAgeCount(data);
			}
		} catch (error) {
			console.error("fetch all property:", error.message);
		}
	}




	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
			totalPropertyCount();
			totalRentCount();
			totalSellCount();
			totalUserCount();
			totalAgentCount();
			getFeedbacks();
		}, 500)
	}, []);

	return (
		<>
			<Admin_Nav />
			<div >
				<div className='sticky-sidebar'>
					<Admin_Sidebar className="" />
				</div>
				{loading ? (
					<div className="loader">
						<div class="spinner"></div>
					</div>
				) : (


					<div className='tw-ml-[250px] md:tw-mt-[-1100px] tw-mt-[-520px] p-3'>
						{/* <div className=' tw-ml-[250px] md:tw-mt-[-1000px] tw-mt-[-500px] p-3 '> */}
						<div className="cart-content">
							<Grid container spacing={3}>
								<Grid item xs={12} sm={6} md={6}>
									<Card className="cancleCard">
										<CardContent className=' tw-cursor-pointer' onClick={handleTotalProperty}>
											<Typography variant="h6 dashCardText" >Available Property</Typography>
											<Typography variant="h4">{totalProCount}</Typography>
										</CardContent>
									</Card>
								</Grid>
								<Grid item xs={12} sm={6} md={6}>
									<Card className="penddingPayment">
										<CardContent className=' tw-cursor-pointer' onClick={handleRentProperty}>
											<Typography variant="h6 dashCardText">Property For Rent</Typography>
											<Typography variant="h4">{totalReCount}</Typography>
										</CardContent>
									</Card>
								</Grid>
								<Grid item xs={12} sm={6} md={6}>
									<Card className="completePayment">
										<CardContent className=' tw-cursor-pointer' onClick={handleSellProperty}>
											<Typography variant="h6 dashCardText">Property For Sale</Typography>
											<Typography variant="h4">{totalSeCount}</Typography>
										</CardContent>
									</Card>
								</Grid>
								<Grid item xs={12} sm={6} md={6}>
									<Card className="users">
										<CardContent>
											<Typography variant="h6 dashCardText">Total Earning</Typography>
											<Typography variant="h4">{ }/-</Typography>
										</CardContent>
									</Card>
								</Grid>
								<Grid item xs={12} sm={6} md={6}>
									<Card className="cancleCard">
										<CardContent >
											<Typography variant="h6 dashCardText" >Total User</Typography>
											<Typography variant="h4">{totalUseCount}</Typography>
										</CardContent>
									</Card>
								</Grid>

								<Grid item xs={12} sm={6} md={6}>
									<Card className="users">
										<CardContent>
											<Typography variant="h6 dashCardText">Total Agent</Typography>
											<Typography variant="h4">{totalAgeCount}</Typography>
										</CardContent>
									</Card>
								</Grid>
							</Grid>
						</div>

						<div className='user_info'>

							<div className=''>
								<div className='profile_overview'>
									<Grid container spacing={3} marginTop={5}>
										<Grid item xs={12} sm={12} md={6}>
											<Card className={`shadow-lg`}>
												<CardContent>
													<div className='flex'>
														<Typography variant="h6" className='tw-mt-[15px] tw-ml-[12px] tw-mr-[355px] '>
															Profile Overview
														</Typography>
														<div className='tw-mt-[15px] tw-cursor-pointer'>
															<KeyboardArrowDownIcon style={{ cursor: 'pointer' }} onClick={toggleCard1} />
														</div>
													</div>
													{isCardOpen1 && (
														<div>
															<div className='tw-mt-[45px] tw-mb-10'>
																<div className='flex'>
																	<div className='flex items-center ml-4'>
																		<Typography variant="h4" className='mr-2'>
																			<img src={home} alt="" height='50px' width='50px' />
																		</Typography>
																		<div className='ml-4'>
																			<Typography variant="h5" style={{ color: 'grey', fontWeight: '500' }}>580</Typography>
																			<p variant="h10" style={{ color: 'grey' }}>Property Deals</p>
																		</div>
																	</div>

																	<div className='flex items-center tw-ml-[90px]'>
																		<Typography variant="h2" className='mr-2'>
																			<img src={comment} alt="" height='50px' width='50px' />
																		</Typography>
																		<div className='ml-4'>
																			<Typography variant="h5" style={{ color: 'grey', fontWeight: '500' }}>365</Typography>
																			<p variant="h10" style={{ color: 'grey' }}>Total Public Comments</p>
																		</div>
																	</div>
																</div>
																<div className='flex tw-mt-[50px]'>
																	<div className='flex items-center ml-4'>
																		<Typography variant="h4" className='mr-2'>
																			<img src={view} alt="" height='50px' width='50px' />
																		</Typography>
																		<div className='ml-4'>
																			<Typography variant="h6">1245</Typography>
																			<p variant="h10">Property Views
																			</p>
																		</div>
																	</div>

																	<div className='flex items-center tw-ml-[90px]'>
																		<Typography variant="h2" className='mr-2'>
																			<img src={book} alt="" height='50px' width='50px' />
																		</Typography>
																		<div className='ml-4'>
																			<Typography variant="h6">54</Typography>
																			<p variant="h10">Bookmarked Property
																			</p>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													)}
												</CardContent>
											</Card>
										</Grid>
										<Grid item xs={12} sm={12} md={6} className={isCardOpen1 ? 'md:tw-ml-[610px] lg:tw-mt-[-358px]' : ''}>
											<Card className={`shadow-lg`}>
												<CardContent>
													<div className='flex'>
														<Typography variant="h6" className='tw-mt-[15px] tw-ml-[12px] tw-mr-[370px] '>
															Recent Activity
														</Typography>
														<div className='tw-mt-[15px]'>
															<KeyboardArrowDownIcon style={{ cursor: 'pointer' }} onClick={toggleCard2} />
														</div>
													</div>
													{isCardOpen2 && (
														<div>
															<div className='tw-mt-[30px] tw-mb-4'>
																<div className=''>
																	<div className='ml-4'>
																		<p className='' style={{ fontSize: '14px' }} > <span style={{ color: 'grey' }}> Dec 27th, 10:12 am</span> - Get new message from custome on city tradecenter.
																		</p>
																	</div>
																	<br />
																	<div className='ml-4'>
																		<p style={{ fontSize: '14px' }}><span style={{ color: 'grey' }}>Dec 21th, 09:12 pm </span> - New property approve for Rent by homex.
																		</p>
																	</div>
																	<br />
																</div>
																<div className='ml-4'>
																	<p style={{ fontSize: '14px' }}><span style={{ color: 'grey' }}>Dec 18th, 12:12 pm </span>- Booking request for Nirala Appartment
																	</p>
																</div>
																<br />
																<div className='ml-4'>
																	<p style={{ fontSize: '14px' }}><span style={{ color: 'grey' }}>Dec 15th, 05:45 pm</span> - Payment receive from customer invoice no 2319891
																	</p>
																</div>
																<br />

																<div className='ml-4'>
																	<p style={{ fontSize: '14px' }}><span style={{ color: 'grey' }}>Dec 15th, 03:32 pm</span> - Comments replay by admin in Apolo Family Appartment
																	</p>
																</div>
															</div>
														</div>
													)}
												</CardContent>
											</Card>
										</Grid>
									</Grid>
								</div>
							</div>

							<div>
								<div className='recent_properties'>
									<Grid container spacing={3} marginTop={1}>
										<Grid item xs={12} sm={12} md={12}>
											<Card className={`shadow-lg`}>
												<CardContent>
													<div className='flex'>
														<Typography variant="h6" className='tw-mt-[15px] tw-ml-[12px] tw-me-[950px]'>
															Recent Properties
														</Typography>
														<div className='tw-mt-[15px]'>
															<KeyboardArrowDownIcon className=' tw-cursor-pointer' onClick={toggleCard3} />
														</div>
													</div>


													{isCardOpen3 && (
														<div>
															<div className='tw-mt-[45px] tw-mb-6'>
																<div className='tw-flex tw-ml-[15px] tw-mt-[50px] '>
																	<img src={p1} alt="" style={{ height: '150px', width: "150px" }} />
																	<div className=' tw-ml-7 tw-mt-[20px] tw-font-semibold'>
																		<h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '25px' }} >Apolo Family Appartment</h2>
																	</div>
																	<div className=''>
																		<img src={map} alt="" height='20px' width='20px' className='tw-mt-16 tw-ms-[-260px] ' />
																		<p className=' tw-mt-[-22px] tw-ml-[-230px]' style={{ color: 'gray' }}> Avenue South Burlington, Los Angles.</p>
																	</div>

																</div>
																<div className=' tw-ml-[200px] tw-mt-[-54px] ' style={{ color: 'gray' }}>
																	<p>24th Jan, 2024</p>
																</div>
															</div>

															<div className='tw-mt-[45px] tw-mb-6'>
																<div className='tw-flex tw-ml-[15px] tw-mt-[65px] '>
																	<img src={p2} alt="" style={{ height: '150px', width: "150px" }} />
																	<div className=' tw-ml-7 tw-mt-[20px] tw-font-semibold'>
																		<h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '25px' }} >Apolo Family Appartment</h2>
																	</div>
																	<div className=''>
																		<img src={map} alt="" height='20px' width='20px' className='tw-mt-16 tw-ms-[-260px] ' />
																		<p className=' tw-mt-[-22px] tw-ml-[-230px]' style={{ color: 'gray' }}> Avenue South Burlington, Los Angles.</p>
																	</div>

																</div>
																<div className=' tw-ml-[200px] tw-mt-[-54px] ' style={{ color: 'gray' }}>
																	<p>24th Jan, 2024</p>
																</div>
															</div>

															<div className='tw-mt-[45px] tw-mb-6'>
																<div className='tw-flex tw-ml-[15px] tw-mt-[65px] '>
																	<img src={p3} alt="" style={{ height: '150px', width: "150px" }} />
																	<div className=' tw-ml-7 tw-mt-[20px] tw-font-semibold'>
																		<h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '25px' }} >Apolo Family Appartment</h2>
																	</div>
																	<div className=''>
																		<img src={map} alt="" height='20px' width='20px' className='tw-mt-16 tw-ms-[-260px] ' />
																		<p className=' tw-mt-[-22px] tw-ml-[-230px]' style={{ color: 'gray' }}> Avenue South Burlington, Los Angles.</p>
																	</div>

																</div>
																<div className=' tw-ml-[200px] tw-mt-[-54px] ' style={{ color: 'gray' }}>
																	<p>24th Jan, 2024</p>
																</div>
															</div>

															<div className='tw-mt-[45px] tw-mb-6'>
																<div className='tw-flex tw-ml-[15px] tw-mt-[65px] '>
																	<img src={p4} alt="" style={{ height: '150px', width: "150px" }} />
																	<div className=' tw-ml-7 tw-mt-[20px] tw-font-semibold'>
																		<h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '25px' }} >Apolo Family Appartment</h2>
																	</div>
																	<div className=''>
																		<img src={map} alt="" height='20px' width='20px' className='tw-mt-16 tw-ms-[-260px] ' />
																		<p className=' tw-mt-[-22px] tw-ml-[-230px]' style={{ color: 'gray' }}> Avenue South Burlington, Los Angles.</p>
																	</div>

																</div>
																<div className=' tw-ml-[200px] tw-mt-[-54px] ' style={{ color: 'gray' }}>
																	<p>24th Jan, 2024</p>
																</div>
															</div>
														</div>
													)}
												</CardContent>
											</Card>
										</Grid>
									</Grid>
								</div>
							</div>
							<div>

								<div className='recent_comment'>
									<Grid container spacing={3} marginTop={1}>
										<Grid item xs={12} sm={12} md={12}>
											<Card className={`shadow-lg`}>
												<CardContent>
													<div className='flex'>
														<Typography variant="h6" className='tw-mt-[15px] tw-ml-[12px] tw-me-[950px]'>
															Recent Comment
														</Typography>
														<div className='tw-mt-[15px] tw-cursor-pointer tw-text-xs'>
															<KeyboardArrowDownIcon onClick={toggleCard4} />
														</div>

													</div>


													{isCardOpen4 && (
														<div>
															<div className='tw-mt-[45px] tw-mb-6'>
																<div className='tw-flex tw-ml-[15px] tw-mt-[50px] '>
																	<img src={me} alt="" style={{ height: '80px', width: "80px", borderRadius: '50%' }} />
																	<div className=' tw-ml-7 tw-font-semibold'>
																		<h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '25px' }} >Ayushi Dobariya</h2>
																	</div>
																</div>

																<div className=' md:tw-mt-[-40px] tw-mt-[-10px] tw-ml-[122px]'>
																	<div>
																		{[1, 2, 3, 4, 5].map((value) => (
																			<StarIcon
																				key={value}
																				className=''
																				style={{ height: "20px", width: "20px", color: "#d3a478", marginRight: '-3px' }}

																			/>
																		))}
																	</div>
																</div>
																<div className='tw-ml-[122px] tw-mt-4 md:tw-mr-14 tw-mr-10'>
																	<p style={{ color: 'gray' }}>Fermentum mus porttitor tempor arcu posuere.</p>
																</div>
																<div className='link_hover tw-text-sm tw-ml-[122px] tw-mt-[20px]'>
																	<a
																		href=""
																		className='me-4'
																	>
																		Approve
																	</a>
																	<a href=""
																		className="me-4"
																	>Delete</a>
																	<a href="" className='me-4'>Spam</a>
																	<a href="" className='me-4'>View</a>

																</div>
																<div className=' tw-mt-7 tw-w-[1132px] tw-ml-4'>
																	<hr />
																</div>
															</div>

															<div className='tw-mt-[45px] tw-mb-6 tw-ml-[60px]'>
																<div className='tw-flex tw-ml-[10px] tw-mt-[50px] '>
																	<img src={armisha} alt="" style={{ height: '80px', width: "80px", borderRadius: '50%' }} />
																	<div className=' tw-ml-6 tw-font-semibold'>
																		<h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '25px' }} >Armisha Dobariya</h2>
																	</div>
																</div>

																<div className=' md:tw-mt-[-40px] tw-mt-[-10px] tw-ml-[115px]'>
																	<div>
																		{[1, 2, 3, 4, 5].map((value) => (
																			<StarIcon
																				key={value}
																				className=''
																				style={{ height: "20px", width: "20px", color: "#d3a478", marginRight: '-3px' }}

																			/>
																		))}
																	</div>
																</div>
																<div className='tw-ml-[115px] tw-mt-4 tw-mr-10'>
																	<p style={{ color: 'gray' }}>Fermentum mus porttitor tempor arcu posuere.</p>
																</div>
																<div className='link_hover tw-text-sm tw-ml-[115px] tw-mt-[20px]'>
																	<a
																		href=""
																		className='me-4'
																	>
																		Approve
																	</a>
																	<a href=""
																		className="me-4"
																	>Delete</a>
																	<a href="" className='me-4'>Spam</a>
																	<a href="" className='me-4'>View</a>

																</div>
																<div className=' tw-mt-7 tw-w-[1132px] tw-ml-[-45px]'>
																	<hr />
																</div>
															</div>

															<div className='tw-mt-[45px] tw-mb-6'>
																<div className='tw-flex tw-ml-[15px] tw-mt-[50px] '>
																	<img src={me} alt="" style={{ height: '80px', width: "80px", borderRadius: '50%' }} />
																	<div className=' tw-ml-7 tw-font-semibold'>
																		<h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '25px' }} >Ayushi Dobariya</h2>
																	</div>
																</div>

																<div className=' md:tw-mt-[-40px] tw-mt-[-10px] tw-ml-[122px]'>
																	<div>
																		{[1, 2, 3, 4, 5].map((value) => (
																			<StarIcon
																				key={value}
																				className=''
																				style={{ height: "20px", width: "20px", color: "#d3a478", marginRight: '-3px' }}

																			/>
																		))}
																	</div>
																</div>
																<div className='tw-ml-[122px] tw-mt-4 md:tw-mr-14 tw-mr-10'>
																	<p style={{ color: 'gray' }}>Fermentum mus porttitor tempor arcu posuere.</p>
																</div>
																<div className='link_hover tw-text-sm tw-ml-[122px] tw-mt-[20px]'>
																	<a
																		href=""
																		className='me-4'
																	>
																		Approve
																	</a>
																	<a href=""
																		className="me-4"
																	>Delete</a>
																	<a href="" className='me-4'>Spam</a>
																	<a href="" className='me-4'>View</a>

																</div>
																<div className=' tw-mt-7 tw-w-[1132px] tw-ml-4'>
																	<hr />
																</div>
															</div>

															<div className='tw-mt-[45px] tw-mb-6 tw-ml-[60px]'>
																<div className='tw-flex tw-ml-[10px] tw-mt-[50px] '>
																	<img src={armisha} alt="" style={{ height: '80px', width: "80px", borderRadius: '50%' }} />
																	<div className=' tw-ml-6 tw-font-semibold'>
																		<h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '25px' }} >Armisha Dobariya</h2>
																	</div>
																</div>

																<div className=' md:tw-mt-[-40px] tw-mt-[-10px] tw-ml-[115px]'>
																	<div>
																		{[1, 2, 3, 4, 5].map((value) => (
																			<StarIcon
																				key={value}
																				className=''
																				style={{ height: "20px", width: "20px", color: "#d3a478", marginRight: '-3px' }}

																			/>
																		))}
																	</div>
																</div>
																<div className='md:tw-ml-[115px]  tw-mt-4 tw-mr-10'>
																	<p style={{ color: 'gray' }}>Fermentum mus porttitor tempor arcu posuere.</p>
																</div>
																<div className='link_hover tw-text-sm tw-ml-[115px] tw-mt-[20px]'>
																	<a
																		href=""
																		className='me-4'
																	>
																		Approve
																	</a>
																	<a href=""
																		className="me-4"
																	>Delete</a>
																	<a href="" className='me-4'>Spam</a>
																	<a href="" className='me-4'>View</a>

																</div>

															</div>
														</div>
													)}
												</CardContent>
											</Card>
										</Grid>
									</Grid>
								</div>
							</div>
						</div>



					</div>
				)}
			</div >




		</>
	);
};

export default Dashboard;






