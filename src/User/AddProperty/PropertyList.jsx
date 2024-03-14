import React, { useState, useEffect } from 'react';
import img from "../../Assests/Image/Home1/reg_bg.jpeg";
import h1 from "../../Assests/Image/Admin/Dashboard/TotalProperty/home1.jpg";
import h2 from "../../Assests/Image/Admin/Dashboard/TotalProperty/h2.jpeg";
import h3 from "../../Assests/Image/Admin/Dashboard/TotalProperty/h3.jpg";
import h4 from "../../Assests/Image/Admin/Dashboard/TotalProperty/h4.jpg";
import h5 from "../../Assests/Image/Admin/Dashboard/TotalProperty/h5.png";

import { useNavigate } from 'react-router-dom';





const PropertyList = () => {

	const [showMore, setShowMore] = useState(false);
	const [loading, setLoading] = useState(true);

	const navigate = useNavigate();

	const moreDetail = () => {
		navigate('/Admin/MoreDetails')
	}


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

			<div>




				<div className='tw-flex tw-justify-center tw-items-center tw-mt-5'>

					<h1 className='tw-font-semibold ' style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '34px' }}>List Of Property</h1>
				</div>


				<div className='tw-gap-20 tw-ml-[30px] md:tw-flex'>
					<div className=' tw-mt-10 '>
						<div class=" tw-w-[400px] tw-ml-[55px] tw-h-[800px] mb-4 border-0 tw-shadow-2xl tw-rounded-md">
							<div class="g-0 align-items-center">
								<div class="">
									<img src={h5} height='250px' width='400px' className=' tw-shadow-sm' />
								</div>
							</div >

							<div class=" tw-ml-6 tw-mt-6 ">

								<h4 className=' tw-font-semibold tw-text-xl '>Anandam Bungalows</h4>
								<h2 class=" tw-font-semibold tw-text-lg tw-mb-4 tw-mt-1">₹ 1.13 Cr - 3.20 Cr</h2>

								<div >
									<h2 className='tw-font-semibold tw-text-base tw-mt-5'>Features</h2>
								</div>

								<div className='tw-flex tw-ml-2'>

									<div className=" tw-me-[10px] tw-text-sm tw-bg-gray-100 tw-pl-[7px] tw-pr-[5px] tw-pt-[2px] tw-rounded-2xl tw-mb-3 tw-mt-4 tw-w-[65px]">
										<h5 className='font-semibold '>Balcony</h5>
									</div>
									<div className=" tw-text-sm tw-bg-gray-100 tw-pl-[7px] tw-pr-[5px] tw-pt-[2px] tw-pb-[4px] tw-rounded-2xl tw-mb-3 tw-mt-4 tw-w-[60px]">
										<h5 className='font-semibold '>Garden</h5>
									</div>
								</div>

								<div >
									<h2 className='tw-font-semibold tw-text-base tw-mt-5'>Facilities</h2>
								</div>
								<div className='tw-flex tw-ml-2'>

									<div className=" tw-me-[10px] tw-bg-gray-100  tw-pl-[6px] tw-pr-[8px] tw-pt-[2px] tw-pb-[2px] tw-rounded-2xl tw-text-sm tw-mb-3 tw-mt-4 tw-w-[150px]">
										<h5 className='tw-text-sm'><span className='tw-font-semibold tw-text-sm'>Square.Ft</span> - 1400 sq.ft</h5>

									</div>
									<div className=" tw-bg-gray-100 tw-pl-[7px] tw-pr-[5px] tw-pt-[2px] tw-rounded-2xl tw-text-sm tw-mb-3 tw-mt-4 tw-w-[110px]">
										<h5 className='tw-text-sm'><span className='tw-font-semibold '>Locality</span> - Surat</h5>

									</div>
								</div>


								<div className='tw-flex tw-ml-2'>

									<div className=" tw-me-[10px] tw-bg-gray-100 tw-pl-[7px] tw-pr-[5px] tw-pt-[2px] tw-pb-[2px] tw-rounded-2xl tw-text-sm tw-mb-3 tw-mt-4 tw-w-[99px]">
										<h5 className='tw-text-sm'><span className='tw-font-semibold '>BHK</span> - 6 BHK</h5>

									</div>
									<div className=" tw-bg-gray-100 tw-pl-[7px] tw-pr-[5px] tw-pt-[2px] tw-rounded-2xl tw-text-sm tw-mb-3 tw-mt-4 tw-w-[144px]">
										<h5 className='tw-text-sm'><span className='tw-font-semibold '>Type</span> - Luxury House</h5>

									</div>
								</div>

								<div className=" tw-bg-gray-100 tw-ml-2 tw-pl-[7px] tw-pr-[5px] tw-pt-[2px] tw-pb-[2px] tw-rounded-2xl tw-text-sm tw-mb-3 tw-mt-4 tw-w-[191px]">
									<h5 className='tw-text-sm'><span className='tw-font-semibold '>Main Entrance Facing</span> - East</h5>
								</div>


								<div className='flex-grow-1'>
									<div className="facilities tw-ml-1">
										<h6 className="tw-mb-3 tw-mt-8 tw-font-semibold">Owner Name</h6>
									</div>
								</div>

								<div className='tw-flex tw-mt-8'>
									<div className=' '>
										<button type="submit" class="tw-p-2 tw-bg-custom-color tw-me-8 tw-ml-6  tw-text-white tw-font-semibold tw-mb-3 tw-rounded-md">
											Contact Seller</button>

									</div>
									<div className=' '>
										<button type="submit" className='tw-pl-2 tw-pr-2 tw-pt-[6px] tw-pb-[6px] tw-bg-white tw-text-black tw-border-2 hover:tw-bg-black hover:tw-text-white tw-border-black tw-font-semibold tw-mb-3 tw-rounded-md' onClick={moreDetail}>
											More Details
										</button>
									</div>
								</div>





							</div>

						</div >
					</div >

					<div className=' tw-mt-10'>
						<div class=" tw-w-[400px] tw-ml-[0px] tw-h-[800px] mb-4 border-0 tw-shadow-2xl tw-rounded-md  	 ">
							<div class="g-0 align-items-center">
								<div class="">
									<img src={img} height='250px' width='400px' className=' tw-shadow-sm' />
								</div>
							</div >

							<div class=" tw-ml-6 tw-mt-6">

								<h4 className=' tw-font-semibold tw-text-xl '>Green Green City - Gold</h4>
								<h2 class=" tw-font-semibold tw-text-lg tw-mb-4 tw-mt-1">₹ 85.42 L - 1.13 Cr</h2>

								<div >
									<h2 className='tw-font-semibold tw-text-base tw-mt-5'>Features</h2>
								</div>

								<div className='tw-flex tw-ml-2'>

									<div className=" tw-me-[10px] tw-text-sm tw-bg-gray-100 tw-pl-[7px] tw-pr-[5px] tw-pt-[2px] tw-rounded-2xl tw-mb-3 tw-mt-4 tw-w-[65px]">
										<h5 className='font-semibold '>Balcony</h5>
									</div>
									<div className=" tw-text-sm tw-bg-gray-100 tw-pl-[7px] tw-pr-[5px] tw-pt-[2px] tw-pb-[4px] tw-rounded-2xl tw-mb-3 tw-mt-4 tw-w-[60px]">
										<h5 className='font-semibold '>Garden</h5>
									</div>
								</div>

								<div >
									<h2 className='tw-font-semibold tw-text-base tw-mt-5'>Facilities</h2>
								</div>
								<div className='tw-flex tw-ml-2'>

									<div className=" tw-me-[10px] tw-bg-gray-100  tw-pl-[6px] tw-pr-[8px] tw-pt-[2px] tw-pb-[2px] tw-rounded-2xl tw-text-sm tw-mb-3 tw-mt-4 tw-w-[140px]">
										<h5 className='tw-text-sm'><span className='tw-font-semibold tw-text-sm'>Square.Ft</span> - 900 sq.ft</h5>

									</div>
									<div className=" tw-bg-gray-100 tw-pl-[7px] tw-pr-[5px] tw-pt-[2px] tw-rounded-2xl tw-text-sm tw-mb-3 tw-mt-4 tw-w-[110px]">
										<h5 className='tw-text-sm'><span className='tw-font-semibold '>Locality</span> - Surat</h5>

									</div>
								</div>


								<div className='tw-flex tw-ml-2'>

									<div className=" tw-me-[10px] tw-bg-gray-100 tw-pl-[7px] tw-pr-[5px] tw-pt-[2px] tw-pb-[2px] tw-rounded-2xl tw-text-sm tw-mb-3 tw-mt-4 tw-w-[99px]">
										<h5 className='tw-text-sm'><span className='tw-font-semibold '>BHK</span> - 4 BHK</h5>

									</div>
									<div className=" tw-bg-gray-100 tw-pl-[7px] tw-pr-[5px] tw-pt-[2px] tw-rounded-2xl tw-text-sm tw-mb-3 tw-mt-4 tw-w-[184px]">
										<h5 className='tw-text-sm'><span className='tw-font-semibold '>Type</span> - Independent House</h5>

									</div>
								</div>

								<div className=" tw-bg-gray-100 tw-ml-2 tw-pl-[7px] tw-pr-[5px] tw-pt-[2px] tw-pb-[2px] tw-rounded-2xl tw-text-sm tw-mb-3 tw-mt-4 tw-w-[191px]">
									<h5 className='tw-text-sm'><span className='tw-font-semibold '>Main Entrance Facing</span> - East</h5>
								</div>


								<div className='flex-grow-1'>
									<div className="facilities tw-ml-1">
										<h6 className="tw-mb-3 tw-mt-8 tw-font-semibold">Owner Name</h6>
									</div>
								</div>

								<div className='tw-flex tw-mt-8'>
									<div className=' '>
										<button type="submit" class="tw-p-2 tw-cursor-pointer tw-bg-custom-color tw-me-8 tw-ml-6  tw-text-white tw-font-semibold tw-mb-3 tw-rounded-md">
											Contact Seller</button>

									</div>
									<div className=' '>
										<button type="submit" className='tw-pl-2 tw-pr-2 tw-pt-[6px] tw-pb-[6px] tw-bg-white tw-text-black tw-border-2 hover:tw-bg-black hover:tw-text-white tw-border-black tw-font-semibold tw-mb-3 tw-rounded-md' onClick={moreDetail}>
											More Details
										</button>
									</div>
								</div>





							</div>

						</div >
					</div >



					<div className=' tw-mt-10'>
						<div class=" tw-w-[400px] tw-ml-[0px] tw-h-[800px] mb-4 border-0 tw-shadow-2xl tw-rounded-md	 ">
							<div class="g-0 align-items-center">
								<div class="">
									<img src={h2} height='250px' width='400px' className=' tw-shadow-sm' />
								</div>
							</div >

							<div class=" tw-ml-6 tw-mt-6">

								<h4 className=' tw-font-semibold tw-text-xl '>Sentosa Heights</h4>
								<h2 class=" tw-font-semibold tw-text-lg tw-mb-4 tw-mt-1">₹ 85.42 L - 1.13 Cr</h2>

								<div >
									<h2 className='tw-font-semibold tw-text-base tw-mt-5'>Features</h2>
								</div>

								<div className='tw-flex tw-ml-2'>

									<div className=" tw-me-[10px] tw-text-sm tw-bg-gray-100 tw-pl-[7px] tw-pr-[5px] tw-pt-[2px] tw-rounded-2xl tw-mb-3 tw-mt-4 tw-w-[65px]">
										<h5 className='font-semibold '>Balcony</h5>
									</div>
									<div className=" tw-text-sm tw-bg-gray-100 tw-pl-[7px] tw-pr-[5px] tw-pt-[2px] tw-pb-[4px] tw-rounded-2xl tw-mb-3 tw-mt-4 tw-w-[60px]">
										<h5 className='font-semibold '>Garden</h5>
									</div>
								</div>

								<div >
									<h2 className='tw-font-semibold tw-text-base tw-mt-5'>Facilities</h2>
								</div>
								<div className='tw-flex tw-ml-2'>

									<div className=" tw-me-[10px] tw-bg-gray-100  tw-pl-[6px] tw-pr-[8px] tw-pt-[2px] tw-pb-[2px] tw-rounded-2xl tw-text-sm tw-mb-3 tw-mt-4 tw-w-[140px]">
										<h5 className='tw-text-sm'><span className='tw-font-semibold tw-text-sm'>Square.Ft</span> - 800 sq.ft</h5>

									</div>
									<div className=" tw-bg-gray-100 tw-pl-[7px] tw-pr-[5px] tw-pt-[2px] tw-rounded-2xl tw-text-sm tw-mb-3 tw-mt-4 tw-w-[110px]">
										<h5 className='tw-text-sm'><span className='tw-font-semibold '>Locality</span> - Surat</h5>

									</div>
								</div>


								<div className='tw-flex tw-ml-2'>

									<div className=" tw-me-[10px] tw-bg-gray-100 tw-pl-[7px] tw-pr-[5px] tw-pt-[2px] tw-pb-[2px] tw-rounded-2xl tw-text-sm tw-mb-3 tw-mt-4 tw-w-[99px]">
										<h5 className='tw-text-sm'><span className='tw-font-semibold '>BHK</span> - 2 BHK</h5>

									</div>
									<div className=" tw-bg-gray-100 tw-pl-[7px] tw-pr-[5px] tw-pt-[2px] tw-rounded-2xl tw-text-sm tw-mb-3 tw-mt-4 tw-w-[124px]">
										<h5 className='tw-text-sm'><span className='tw-font-semibold '>Type</span> - Apartment</h5>

									</div>
								</div>

								<div className=" tw-bg-gray-100 tw-ml-2 tw-pl-[7px] tw-pr-[5px] tw-pt-[2px] tw-pb-[2px] tw-rounded-2xl tw-text-sm tw-mb-3 tw-mt-4 tw-w-[191px]">
									<h5 className='tw-text-sm'><span className='tw-font-semibold '>Main Entrance Facing</span> - East</h5>
								</div>


								<div className='flex-grow-1'>
									<div className="facilities tw-ml-1">
										<h6 className="tw-mb-3 tw-mt-8 tw-font-semibold">Owner Name</h6>
									</div>
								</div>

								<div className='tw-flex tw-mt-8'>
									<div className=' '>
										<button type="submit" class="tw-p-2 tw-bg-custom-color tw-me-8 tw-ml-6  tw-text-white tw-font-semibold tw-mb-3 tw-rounded-md">
											Contact Seller</button>

									</div>
									<div className=' '>
										<button type="submit" className='tw-pl-2 tw-pr-2 tw-pt-[6px] tw-pb-[6px] tw-bg-white tw-text-black tw-border-2 hover:tw-bg-black hover:tw-text-white tw-border-black tw-font-semibold tw-mb-3 tw-rounded-md' onClick={moreDetail}>
											More Details
										</button>
									</div>
								</div>
							</div>
						</div >
					</div >
				</div>

			</div>

		</>
	)
}

export default PropertyList






// import React, { useState } from 'react';
// import SquareFootIcon from '@mui/icons-material/SquareFoot';
// import './PropertyList.css'
// import { styled } from '@mui/material/styles';
// import Card from '@mui/material/Card';
// import CardMedia from '@mui/material/CardMedia';
// import CardContent from '@mui/material/CardContent';
// import CardActions from '@mui/material/CardActions';
// import Typography from '@mui/material/Typography';
// // import img from '../../Assests/Image/reg_bg.avif';
// import img from "../../Assests/Image/Home1/reg_bg.jpeg"
// // import img from "../../Assests/Image/Home1/h1.jpg"

// import LivingIcon from '@mui/icons-material/Living';
// import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
// import TotalProperty from '../../Admin/Admin_Components/TotalProperty';



// export const PropertyList = () => {

// 	const [isHovered, setIsHovered] = useState(false);

// 	const buttonStyles = {
// 		backgroundColor: isHovered ? '#d3a478' : 'black',
// 		text: isHovered ? 'black' : 'white',
// 		color: 'white',
// 		borderRadius: '0.25rem',
// 		padding: '0.5rem 1rem',
// 		marginRight: '0.5rem',
// 		cursor: 'pointer',
// 		transition: 'background-color 0.3s',
// 	};

// 	return (
// 		<>





// 			<div className='tw-flex tw-justify-center tw-items-center tw-mt-5'>

// 				<h1 className='tw-text-3xl tw-font-bold'>List Of Property</h1>
// 			</div>
// 			<div className='container-fluid tw-mt-5 tw-mb-5'>
// 				<div className='md:tw-flex md:tw-flex-wrap lg:tw-grid lg:tw-grid-cols-3 tw-justify-evenly tw-gap-10'>
// 					<div className='tw-w-full sm:tw-w-1/2 md:tw-w-1/2 lg:tw-w-1/2 shadow-md rounded-3xl'>
// 						<Card className='tw-w-full md:tw-w-1/3 '   >
// 							<CardMedia
// 								component="img"
// 								height="194"
// 								image={img}
// 								alt="Product"
// 							/>
// 							<div style={{ position: 'relative', bottom: '40px', left: '20px' }}>
// 								<Typography className=' tw-text-base tw-font-bold tw-bg-white tw-w-20 tw-rounded-3'>
// 									<h1 className=' tw-font-bold tw-h-7 tw-grid tw-place-content-center'> ₹34.45 L</h1>
// 								</Typography>
// 							</div>
// 							<CardContent className='' style={{ borderBottom: '1px solid #ccc' }}>
// 								<Typography variant="body2" >
// 									<div style={{ borderBottom: '1px solid #ccc' }} className=' w-full  mb-3'>
// 										<p className=' tw-mb-3 tw-text-black tw-font-semibold' style={{ fontSize: '16px' }}>123 Main Street, Anytown, CA 12345, United States</p>
// 									</div>
// 									<div className=' tw-mt-3 tw-bg-text-light tw-font-gray tw-flex tw-justify-content-evenly'>
// 										<div>
// 											<SquareFootIcon style={{ color: "#bbb" }} />1200 sqft
// 										</div>
// 										<div>
// 											<LivingIcon style={{ color: "#bbb" }} /> 2 Rooms
// 										</div>
// 										<div>
// 											<CalendarMonthIcon style={{ color: "bbb" }} /> 2 year old
// 										</div>

// 									</div>
// 								</Typography>
// 							</CardContent>
// 							<CardActions style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: "12px", marginLeft: "12px" }}>
// 								<div>
// 									<h1>For Rent</h1>
// 								</div>
// 								<button
// 									onMouseOver={(e) => (e.target.style.backgroundColor = '#d3a478')}
// 									onMouseOut={(e) => (e.target.style.backgroundColor = 'black')}
// 									style={buttonStyles}
// 								>
// 									More Details
// 								</button>


// 							</CardActions>

// 						</Card>
// 					</div>
// 					<div className='tw-w-full sm:tw-w-1/2 md:tw-w-1/2 lg:tw-w-1/2'>
// 						<Card className='tw-w-full md:tw-w-1/3 '   >

// 							<CardMedia
// 								component="img"
// 								height="194"
// 								image={img}
// 								alt="Product"
// 							/>
// 							<div style={{ position: 'relative', bottom: '40px', left: '20px' }}>
// 								<Typography className=' tw-text-base tw-font-bold tw-bg-white tw-w-20 tw-rounded-3'>
// 									<h1 className=' tw-font-bold tw-h-7 tw-grid tw-place-content-center'> ₹34.45 L</h1>
// 								</Typography>
// 							</div>
// 							<CardContent className='' style={{ borderBottom: '1px solid #ccc' }}>
// 								<Typography variant="body2" >

// 									<div style={{ borderBottom: '1px solid #ccc' }} className=' w-full  mb-3'>
// 										<p className=' tw-mb-3 tw-text-black tw-font-semibold' style={{ fontSize: '16px' }}>123 Main Street, Anytown, CA 12345, United States</p>
// 									</div>
// 									<div className=' tw-mt-3 tw-bg-text-light tw-font-gray tw-flex tw-justify-content-evenly'>
// 										<div>
// 											<SquareFootIcon style={{ color: "#bbb" }} />1200 sqft
// 										</div>
// 										<div>
// 											<LivingIcon style={{ color: "#bbb" }} /> 2 Rooms
// 										</div>
// 										<div>
// 											<CalendarMonthIcon style={{ color: "bbb" }} /> 2 year old
// 										</div>

// 									</div>
// 								</Typography>
// 							</CardContent>
// 							<CardActions style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: "12px", marginLeft: "12px" }}>
// 								<div>
// 									<h1>For Rent</h1>
// 								</div>
// 								<button
// 									onMouseOver={(e) => (e.target.style.backgroundColor = '#d3a478')}
// 									onMouseOut={(e) => (e.target.style.backgroundColor = 'black')}
// 									style={buttonStyles}
// 								>
// 									More Details
// 								</button>
// 							</CardActions>

// 						</Card>
// 					</div>
// 					<div className='tw-w-full sm:tw-w-1/2 md:tw-w-1/2 lg:tw-w-1/2'>
// 						<Card className='tw-w-full md:tw-w-1/3 '   >

// 							<CardMedia
// 								component="img"
// 								height="194"
// 								image={img}
// 								alt="Product"
// 							/>
// 							<div style={{ position: 'relative', bottom: '40px', left: '20px' }}>
// 								<Typography className=' tw-text-base tw-font-bold tw-bg-white tw-w-20 tw-rounded-3'>
// 									<h1 className=' tw-font-bold tw-h-7 tw-grid tw-place-content-center'> ₹34.45 L</h1>
// 								</Typography>
// 							</div>
// 							<CardContent className='' style={{ borderBottom: '1px solid #ccc' }}>
// 								<Typography variant="body2" >

// 									<div style={{ borderBottom: '1px solid #ccc' }} className=' w-full  mb-3'>
// 										<p className=' tw-mb-3 tw-text-black tw-font-semibold' style={{ fontSize: '16px' }}>123 Main Street, Anytown, CA 12345, United States</p>
// 									</div>
// 									<div className=' tw-mt-3 tw-bg-text-light tw-font-gray tw-flex tw-justify-content-evenly'>
// 										<div>
// 											<SquareFootIcon style={{ color: "#bbb" }} />1200 sqft
// 										</div>
// 										<div>
// 											<LivingIcon style={{ color: "#bbb" }} /> 2 Rooms
// 										</div>
// 										<div>
// 											<CalendarMonthIcon style={{ color: "bbb" }} /> 2 year old
// 										</div>

// 									</div>
// 								</Typography>
// 							</CardContent>
// 							<CardActions style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: "12px", marginLeft: "12px" }}>
// 								<div>
// 									<h1>For Rent</h1>
// 								</div>
// 								<button
// 									onMouseOver={(e) => (e.target.style.backgroundColor = '#d3a478')}
// 									onMouseOut={(e) => (e.target.style.backgroundColor = 'black')}
// 									style={buttonStyles}
// 								>
// 									More Details
// 								</button>
// 							</CardActions>
// 						</Card>
// 					</div>


// 				</div>
// 			</div >
// 		</>
// 	)
// }