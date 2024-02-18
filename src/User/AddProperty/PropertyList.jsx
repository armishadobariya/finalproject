import React, { useState } from 'react';
import SquareFootIcon from '@mui/icons-material/SquareFoot';
import './PropertyList.css'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
// import img from '../../Assets/Image/reg_bg.avif';
import LivingIcon from '@mui/icons-material/Living';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';



export const PropertyList = () => {

	const [isHovered, setIsHovered] = useState(false);

	const buttonStyles = {
		backgroundColor: isHovered ? '#d3a478' : 'black',
		text: isHovered ? 'black' : 'white',
		color: 'white',
		borderRadius: '0.25rem',
		padding: '0.5rem 1rem',
		marginRight: '0.5rem',
		cursor: 'pointer',
		transition: 'background-color 0.3s',
	};

	return (
		<>
			<div className='flex justify-center items-center mt-5'>

				<h1 className='text-3xl font-bold'>List Of Property</h1>
			</div>
			<div className='container-fluid   mt-5 tw-mb-5'>
				<div className='md:flex md:tw-flex-wrap lg:tw-grid lg:tw-grid-cols-3 tw-justify-evenly tw-gap-10'>
					<div className='w-full sm:w-1/2 md:w-1/2 lg:w-1/2'>
						<Card className='w-full md:w-1/3 '   >
							<CardMedia
								component="img"
								height="194"
								// image={img}
								alt="Product"
							/>
							<div style={{ position: 'relative', bottom: '40px', left: '20px' }}>
								<Typography className=' tw-text-base font-bold bg-white w-20 rounded-3'>
									<h1 className=' tw-font-bold tw-h-7 grid place-content-center'> ₹34.45 L</h1>
								</Typography>
							</div>
							<CardContent className='' style={{ borderBottom: '1px solid #ccc' }}>
								<Typography variant="body2" >
									<div style={{ borderBottom: '1px solid #ccc' }} className=' w-full  mb-3'>
										<p className=' tw-mb-3 text-black tw-font-semibold' style={{ fontSize: '16px' }}>123 Main Street, Anytown, CA 12345, United States</p>
									</div>
									<div className=' tw-mt-3 bg-text-light font-gray flex justify-content-evenly'>
										<div>
											<SquareFootIcon style={{ color: "#bbb" }} />1200 sqft
										</div>
										<div>
											<LivingIcon style={{ color: "#bbb" }} /> 2 Rooms
										</div>
										<div>
											<CalendarMonthIcon style={{ color: "bbb" }} /> 2 year old
										</div>

									</div>
								</Typography>
							</CardContent>
							<CardActions style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: "12px", marginLeft: "12px" }}>
								<div>
									<h1>For Rent</h1>
								</div>
								<button
									onMouseOver={(e) => (e.target.style.backgroundColor = '#d3a478')}
									onMouseOut={(e) => (e.target.style.backgroundColor = 'black')}
									style={buttonStyles}
								>
									More Details
								</button>


							</CardActions>

						</Card>
					</div>
					<div className='w-full sm:w-1/2 md:w-1/2 lg:w-1/2'>
						<Card className='w-full md:w-1/3 '   >

							<CardMedia
								component="img"
								height="194"
								// image={img}
								alt="Product"
							/>
							<div style={{ position: 'relative', bottom: '40px', left: '20px' }}>
								<Typography className=' tw-text-base font-bold bg-white w-20 rounded-3'>
									<h1 className=' tw-font-bold tw-h-7 grid place-content-center'> ₹34.45 L</h1>
								</Typography>
							</div>
							<CardContent className='' style={{ borderBottom: '1px solid #ccc' }}>
								<Typography variant="body2" >

									<div style={{ borderBottom: '1px solid #ccc' }} className=' w-full  mb-3'>
										<p className=' tw-mb-3 text-black tw-font-semibold' style={{ fontSize: '16px' }}>123 Main Street, Anytown, CA 12345, United States</p>
									</div>
									<div className=' tw-mt-3 bg-text-light font-gray flex justify-content-evenly'>
										<div>
											<SquareFootIcon style={{ color: "#bbb" }} />1200 sqft
										</div>
										<div>
											<LivingIcon style={{ color: "#bbb" }} /> 2 Rooms
										</div>
										<div>
											<CalendarMonthIcon style={{ color: "bbb" }} /> 2 year old
										</div>

									</div>
								</Typography>
							</CardContent>
							<CardActions style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: "12px", marginLeft: "12px" }}>
								<div>
									<h1>For Rent</h1>
								</div>
								<button
									onMouseOver={(e) => (e.target.style.backgroundColor = '#d3a478')}
									onMouseOut={(e) => (e.target.style.backgroundColor = 'black')}
									style={buttonStyles}
								>
									More Details
								</button>
							</CardActions>

						</Card>
					</div>
					<div className='w-full sm:w-1/2 md:w-1/2 lg:w-1/2'>
						<Card className='w-full md:w-1/3 '   >

							<CardMedia
								component="img"
								height="194"
								// image={img}
								alt="Product"
							/>
							<div style={{ position: 'relative', bottom: '40px', left: '20px' }}>
								<Typography className=' tw-text-base font-bold bg-white w-20 rounded-3'>
									<h1 className=' tw-font-bold tw-h-7 grid place-content-center'> ₹34.45 L</h1>
								</Typography>
							</div>
							<CardContent className='' style={{ borderBottom: '1px solid #ccc' }}>
								<Typography variant="body2" >

									<div style={{ borderBottom: '1px solid #ccc' }} className=' w-full  mb-3'>
										<p className=' tw-mb-3 text-black tw-font-semibold' style={{ fontSize: '16px' }}>123 Main Street, Anytown, CA 12345, United States</p>
									</div>
									<div className=' tw-mt-3 bg-text-light font-gray flex justify-content-evenly'>
										<div>
											<SquareFootIcon style={{ color: "#bbb" }} />1200 sqft
										</div>
										<div>
											<LivingIcon style={{ color: "#bbb" }} /> 2 Rooms
										</div>
										<div>
											<CalendarMonthIcon style={{ color: "bbb" }} /> 2 year old
										</div>

									</div>
									{/* <h1 className=' tw-font-bold tw-text-lg mt-3'>₹2.45 L</h1> */}
								</Typography>
							</CardContent>
							<CardActions style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: "12px", marginLeft: "12px" }}>
								<div>
									<h1>For Rent</h1>
								</div>
								<button
									onMouseOver={(e) => (e.target.style.backgroundColor = '#d3a478')}
									onMouseOut={(e) => (e.target.style.backgroundColor = 'black')}
									style={buttonStyles}
								>
									More Details
								</button>
							</CardActions>
						</Card>
					</div>


				</div>
			</div >
		</>
	)
}