import React from 'react';
import "./Buy.css";
import img from '../../Assests/Image/Buy/reg_bg.avif';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SquareFootIcon from '@mui/icons-material/SquareFoot';
import LivingIcon from '@mui/icons-material/Living';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import liftt from "../../Assests/Image/Buy/liftt.png";
import pipeline from "../../Assests/Image/Buy/pipeline.png";
import garden from "../../Assests/Image/Buy/garden.png";
import security from "../../Assests/Image/Buy/security.png";
import inverter from "../../Assests/Image/Buy/inverter.png";
import parking from "../../Assests/Image/Buy/parking.png";
import Nav from '../Nav/Nav';
import { Footer } from '../Footer/Footer';
import { useNavigate } from 'react-router-dom';
import Demo from '../Components/Demo';



const ReadMoreDetails = () => {

	const navigate = useNavigate();
	return (
		<>

			<Nav />
			{/* <Demo /> */}

			<div className='container tw-flex tw-place-content-center tw-mt-4'>
				<div className='tw-p-4'>
					<div className="row">
						<h1 className=' tw-font-bold text-3xl' >Independent House</h1>
						<div className='tw-mt-4'>

							<h5 class=" tw-text-gray-500 tw-flex"><h4 className='tw-cursor-pointer' onClick={() => navigate('/Buy')}>Buy </h4>
								<span class="tw-text-gray-500 tw-ml-[5px] tw-mr-[2px]">  {' >'} </span>
								<h4 className=' tw-cursor-pointer' onClick={() => navigate('/Buy/ReadMoreDetails')}>More Details</h4>
							</h5>
						</div>
					</div>

					<div className='row tw-mt-10 '>
						<div className="col-lg-7">
							{/* <img src={img} alt="" className='tw-w-[700px] tw-h-[400px] tw-rounded-sm' /> */}
							<Demo className="" />
						</div>


						<div className="col-lg-5 md:w-full shadow-lg tw-p-6 tw-flex  tw-place-content-center tw-rounded-sm">
							<div className=' tw-ml-3 place-content-center'>
								<h1 className='tw-font-semibold text-2xl mt-2'>₹34.45L</h1>
								<div className="col-sm-3">
									<h1 className='border-1 w-full flex items-center justify-center p-2 rounded-2 mt-3 tw-font-semibold tw-border-black'>For Rent</h1>
								</div>
								<div className="row tw-mt-4">
									<div className='tw-flex'>
										<LocationOnIcon style={{ color: "gray", height: "30px", width: "40px" }} />
										<div className='tw-font-semibold tw-text-lg tw-ml-2'>123 Main Street, Anytown, CA 12345, United States Surat</div>
									</div>
									<div className='row tw-mt-6 tw-ml-[1px] tw-justify-evenly'>
										<h1 className='tw-text-lg font-semibold tw-mb-4 tw-mt-1'>Facilities</h1>
										<div className="col-md-4 flex tw-justify-center border-1 p-2 ">
											<img src={parking} alt="" className='tw-h-5 tw-w-7' />
											<div className='tw-ml-1'>Parking</div>
										</div>
										<div className="col-md-4 flex  tw-justify-center border-1 p-2 ">
											<img src={liftt} alt="" className='tw-h-5 tw-w-7' />
											<div className='tw-ml-1'>Lift</div>
										</div>
										<div className="col-md-4 flex tw-justify-center border-1 p-2 ">
											<img src={pipeline} alt="" className='tw-h-5 tw-w-7 ' />
											<div className='tw-ml-1'>Gas Pipeline</div>
										</div>
									</div>
									<div className='row tw-mt-4 tw-flex tw-ml-[1px] tw-justify-evenly'>
										<div className="col-md-4 flex tw-justify-center border-1 p-2 ">
											<img src={garden} alt="" className='tw-h-5 tw-w-7' />
											<div className='tw-ml-1'>Garden</div>
										</div>
										<div className="col-md-4 flex tw-justify-center border-1 p-2 ">
											<img src={security} alt="" className='tw-h-5 tw-w-7' />
											<div className='tw-ml-1'>24 X 7 security</div>
										</div>
										<div className="col-md-4 flex tw-justify-center border-1 p-2 ">
											<img src={inverter} alt="" className='tw-h-5 tw-w-7' />
											<div className='tw-ml-1'>Inverter</div>
										</div>
									</div>
								</div>
							</div>
						</div>


					</div>

					<div className="row shadow-lg tw-ml-2 tw-mt-20 tw-p-6 tw-mb-20">
						<h1 className=' tw-font-semibold tw-text-xl'>Description</h1>
						<p className='  tw-mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum modi dicta nobis similique, odio, iure magnam possimus, accusamus eum saepe delectus ab eius? Eum minima totam consectetur quaerat ratione dignissimos distinctio, pariatur ab explicabo sunt, sit molestias fuga quam accusantium.
						</p>
					</div>
				</div>
			</div>

			{/* <div className="row  flex place-content-center"> */}

			{/* </div> */}

			<Footer />
		</>
	)
}

export default ReadMoreDetails;