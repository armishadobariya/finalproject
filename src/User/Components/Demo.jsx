import React from 'react';
import { Swiper as ReactSwiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Navigation } from 'swiper/modules';
import img1 from '../../Assests/Image/Admin/Dashboard/TotalProperty/h5.png';
import img2 from '../../Assests/Image/Admin/Dashboard/TotalProperty/h2.jpeg';
import img3 from '../../Assests/Image/Admin/Dashboard/TotalProperty/h3.jpg';
// import img5 from '../../Assests/Image/Admin/Dashboard/01.jpg';
// import img6 from '../../Assests/Image/Admin/Dashboard/02.jpg';
// import img7 from '../../Assests/Image/Admin/Dashboard/03.jpg';
// import img8 from '../../Assests/Image/Admin/Dashboard/04.jpg';



const Demo = () => {
	return (
		<div>
			<h1>hello</h1>

			<ReactSwiper
				slidesPerView={1}
				centeredSlides={true}
				spaceBetween={10}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}

				modules={[Autoplay, Pagination, Navigation]}
				className="mySwiper"
			>
				<SwiperSlide><img src={img1} alt="" height='400px' width='700px' /></SwiperSlide>
				<SwiperSlide><img src={img2} alt="" height='400px' width='700px' /></SwiperSlide>
				<SwiperSlide><img src={img3} alt="" height='600px' width='700px' /></SwiperSlide>
				{/* <SwiperSlide><img src={img4} alt="" height='400px' width='700px' /></SwiperSlide> */}
				{/* <SwiperSlide><img src={img5} alt="" height='400px' width='700px' /></SwiperSlide>
				<SwiperSlide><img src={img6} alt="" height='400px' width='700px' /></SwiperSlide>
				<SwiperSlide><img src={img7} alt="" height='400px' width='700px' /></SwiperSlide>
				<SwiperSlide><img src={img8} alt="" height='400px' width='700px' /></SwiperSlide> */}

			</ReactSwiper>
		</div>
	)
}

export default Demo
