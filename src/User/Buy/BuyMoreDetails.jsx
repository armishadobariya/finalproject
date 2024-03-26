import React from 'react';
import "./Buy.css";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Nav from '../Nav/Nav';
import { Footer } from '../Footer/Footer';
import { useNavigate } from 'react-router-dom';
import Demo from '../Components/Demo';
import { useLocation } from 'react-router-dom';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';






const BuyMoreDetails = () => {
	const { state } = useLocation();
	const propertyData = state?.propertyData;
	const navigate = useNavigate();

	const validatePrice = (currentBalance) => {
		try {
			// suffix = {' ', 'k', 'M', 'B', 'T', 'P', 'E'};
			let number = currentBalance;

			if (number < 1000) {
				return number.toString();
			} else if (number < 1000000) {
				return `${(number / 1000).toFixed(1)} K`;
			} else if (number < 10000000) {
				return `${(number / 100000).toFixed(1)} Lakh`;
			} else {
				return `${(number / 10000000).toFixed(1)} Crore`;
			}
		} catch (e) {
			console.log(e)
		}
		return currentBalance;

	}

	return (
		<>

			<Nav />
			{/* <Demo /> */}

			<div className='container tw-flex tw-place-content-center tw-mt-4'>
				<div className='tw-p-4'>
					<div className="row">
						<h1 className=' tw-font-bold text-3xl' >{propertyData.propertyType}</h1>
						<div className='tw-mt-4'>

							<h5 class=" tw-text-gray-500 tw-flex"><h4 className='tw-cursor-pointer' onClick={() => navigate('/')}>Home</h4>
								<span class="tw-text-gray-500 tw-ml-[5px] tw-mr-[2px]">  {' >'} </span>
								<h4 className=' tw-cursor-pointer' onClick={() => navigate('/Buy')}>Buy</h4>
							</h5>
						</div>
					</div>

					<div className='row tw-mt-10 '>
						{/* <div className="col-lg-7">
							<img src={img} alt="" className='tw-w-[700px] tw-h-[400px] tw-rounded-sm' />
							<Demo className="" />
						</div> */}
						<div className="col-lg-7">
							<Swiper
								slidesPerView={1}
								centeredSlides={true}
								spaceBetween={10}
								autoplay={{
									delay: 2500,
									disableOnInteraction: false,
								}}
								modules={[Autoplay, Pagination, Navigation]}
								className="mySwiper"
								style={{ width: '700px', height: '400px' }}
							>


								{propertyData.propertyImage.map((image) => (
									<SwiperSlide>
										<img src={image} height='400px' width='700px' />
									</SwiperSlide>
								))}


							</Swiper>
						</div>


						<div className="col-lg-5 md:w-full shadow-lg tw-p-6 tw-flex  tw-place-content-center tw-rounded-sm">
							<div className=' tw-ml-3 place-content-center'>
								<h1 className='tw-font-semibold text-2xl mt-2'>₹ {validatePrice(propertyData.price)}</h1>
								<div className="col-sm-3">
									<h1 className='border-1 w-full flex items-center justify-center p-2 rounded-2 mt-3 tw-font-semibold tw-border-black'>For Buy</h1>
								</div>
								<div className="row tw-mt-4">
									<div className='tw-flex'>
										<LocationOnIcon style={{ color: "gray", height: "30px", width: "40px" }} />
										<div className='tw-font-semibold tw-text-lg tw-ml-2'>{propertyData.address}</div>
									</div>
									<div className='row tw-mt-6 tw-ml-[1px] tw-justify-evenly'>
										<h1 className='tw-text-lg font-semibold tw-mb-4 tw-mt-1'>Facilities</h1>

										<div className="tw-ml-[-18px] tw-grid tw-grid-cols-3">
											{propertyData.facility.map((feature, index) => (

												<h1 key={index} className='tw-mr-4 tw-border-2  tw-mt-2 tw-p-3 tw-text-[16px]'>{feature} </h1>
											))}
										</div>
									</div>
								</div>
							</div>
						</div>


					</div>

					<div className="row shadow-lg tw-ml-2 tw-mt-20 tw-p-6 tw-mb-20">
						<h1 className=' tw-font-semibold tw-text-xl'>Description</h1>
						<p className='  tw-mt-3'>{propertyData.description}
						</p>
					</div>
				</div>
			</div >



			<Footer />
		</>
	)
}

export default BuyMoreDetails;