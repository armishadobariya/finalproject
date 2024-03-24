import React, { useRef } from 'react';
import './AboutSlide.css';
import { Swiper, SwiperSlide } from 'swiper/react';
// import a1 from "../../Assests/Image/About/a1.jpg"
// import a2 from "../../Assests/Image/About/a2.jpg"
// import a3 from "../../Assests/Image/About/a3.jpg"
// import a4 from "../../Assests/Image/About/a4.jpg"
// import a5 from "../../Assests/Image/About/a5.jpg"
// import a6 from "../../Assests/Image/About/a6.jpg"


import a1 from "../../Assests/Image/About/about_2.jpg"
import a2 from "../../Assests/Image/About/about_2.jpg"
import a3 from "../../Assests/Image/About/about_2.jpg"
import a4 from "../../Assests/Image/About/about_2.jpg"
import a5 from "../../Assests/Image/About/about_2.jpg"
import a6 from "../../Assests/Image/About/about_2.jpg"


import { Autoplay } from 'swiper/modules';


export const AboutSlide = () => {
	const swiperRef = useRef(null);


	// const goPrev = () => {
	// 	if (swiperRef.current) {
	// 		swiperRef.current.swiper.slidePrev();
	// 	}
	// };

	// const goNext = () => {
	// 	if (swiperRef.current) {
	// 		swiperRef.current.swiper.slideNext();
	// 	}
	// };
	return (
		<>
			<div className='tw-flex tw-justify-center'>
				<div className='tw-border-2 tw-border-white tw-mt-16 text-center slider-container'>
					<div className=' tw-items-center tw-justify-center'>
						<p className=' tw-font-[550] tw-grid tw-place-content-center' style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '40px' }}>Our Exclusive Agetns</p>
						<p className='tw-grid tw-place-content-center'>Aliquam lacinia diam quis lacus euismod</p>

					</div>



				</div>
			</div>
			<div className="tw-flex tw-place-content-center md:tw-mb-[20px] md:tw-ml-[110px] md:tw-mr-[110px]  tw-p-10 ">
				<Swiper
					pagination
					className="demo-swiper-multiple mx-auto"
					spaceBetween={0}
					slidesPerView={2}

					breakpoints={{

						640: {
							slidesPerView: 3, // 
						},

						768: {
							slidesPerView: 5,
						},
					}}
					ref={swiperRef}
					autoplay={{
						delay: 1500,
						disableOnInteraction: false,
					}}


					modules={[Autoplay]}
				>
					<SwiperSlide className='md:tw-me-[2px] md:tw-mb-10'>
						<div>
							<img src={a1} style={{ width: "230px", height: "260px", marginBottom: "10px" }} className='rounded-4' alt="" />
							<div className="middle">
								<div className="text">

									<h3 className=' tw-font-bold tw-text-lg'>Aaron shah</h3>
									<span className='text-font-[500px]'>Broker</span>
								</div>
							</div>
						</div>


					</SwiperSlide>
					<SwiperSlide className=' md:tw-me-[2px] '>
						<div>
							<img src={a2} style={{ width: "230px", height: "260px", marginBottom: "10px" }} className='rounded-4' alt="" />
							<div className="middle">
								<div className="text">

									<h3 className=' tw-font-bold tw-text-lg'>Brayden Kapoor</h3>
									<span className='text-font-[500px]'>Broker</span>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide className=' md:tw-me-[2px] '>
						<div>
							<img src={a3} style={{ width: "230px", height: "260px", marginBottom: "10px" }} className='rounded-4' alt="" />
							<div className="middle">
								<div className="text">

									<h3 className=' tw-font-bold tw-text-lg'>Devin Jain</h3>
									<span className='text-font-[500px]'>Broker</span>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide className='md:tw-me-[2px] '>
						<div>
							<img src={a4} style={{ width: "230px", height: "260px", marginBottom: "10px" }} className='rounded-4' alt="" />
							<div className="middle">
								<div className="text">

									<h3 className=' tw-font-bold tw-text-lg'>Ethan shah</h3>
									<span className='text-font-[500px]'>Broker</span>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide className=' md:tw-me-[2px]'>
						<div>
							<img src={a5} style={{ width: "230px", height: "260px", marginBottom: "10px" }} className='rounded-4' alt="" />
							<div className="middle">
								<div className="text">

									<h3 className=' tw-font-bold tw-text-lg'>Fumio Khan</h3>
									<span className='text-font-[500px]'>Broker</span>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide className=' md:tw-me-[2px]'>
						<div>
							<img src={a6} style={{ width: "230px", height: "260px", marginBottom: "10px" }} className='rounded-4' alt="" />
							<div className="middle">
								<div className="text">

									<h3 className=' tw-font-bold tw-text-lg'>Tadgh shah</h3>
									<span className='text-font-[500px]'>Broker</span>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide className='md:tw-me-[2px] '>
						<div>
							<img src={a4} style={{ width: "230px", height: "260px", marginBottom: "10px" }} className='rounded-4' alt="" />
							<div className="middle">
								<div className="text">

									<h3 className=' tw-font-bold tw-text-lg'>Ayami jain</h3>
									<span className='text-font-[500px]'>Broker</span>
								</div>
							</div>
						</div>
					</SwiperSlide>
				</Swiper>
			</div>



		</>
	)
}


export default AboutSlide;