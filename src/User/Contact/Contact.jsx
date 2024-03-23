import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import './Swiper.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import ContactImg from '../../Assests/Image/Contact/contact.jpg';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Contact.css';
import { Footer } from '../Footer/Footer';
import Nav from '../Nav/Nav';
import { useNavigate } from 'react-router-dom';
import ContactSlide from './ContactSlide';


const Contact = () => {

	const navigate = useNavigate();
	return (
		<>
			<Nav />
			<div className="tw-relative tw-mb-10">
				<div className="" style={{ position: 'relative' }}>

					<img className=' tw-bg-cover tw-w-full  md:tw-h-full' src={ContactImg} alt="" />
					<div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0, 0, 0, 0.5)' }}></div>
				</div>
				<div className=" tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-bg-cover  tw-text-center tw-text-white tw-grid tw-place-content-center ">
					<h2 className=' tw-text-3xl tw-mt-[-120px] tw-font-bold '>Contact</h2>
					<h5 className=' tw-text-2xl tw-font-semibold tw-cursor-pointer  tw-mt-[-70px] ' ><span onClick={() => navigate('/')} >Home</span> {'>>'} Contact </h5>
				</div>
			</div >
			<div className='tw-mt-10'>
				<div className=' tw-text-black'>
					<h1 className=' tw-font-bold tw-text-2xl  tw-flex tw-justify-center'>Team</h1>
					<h3 className=' tw-font-semibold tw-text-3xl  tw-flex tw-justify-center tw-mt-1'>Meet Our Team</h3>
				</div>
				<div className=' tw-mt-4'>

					<ContactSlide />

				</div>
			</div>


			<div className=' tw-flex tw-place-content-center'>
				<div className="faq-contact tw-m-5 tw-shadow-lg tw-p-3 tw-bg-white tw-rounded-md md:tw-w-[700px] md:tw-top-18">
					<h3 className=' tw-text-2xl tw-font-bold tw-text-center'>Ask Your Question</h3>
					<form id="contactForm ">
						<div className="row tw-mt-4">
							<div className="col-lg-6 col-md-12">
								<div className="form-group">
									<input
										type="text"
										name="name"
										id="name"
										className="form-control"
										required=""
										data-error="Please enter your name"
										placeholder="Name"

									/>
									<br />
									<div className="help-block with-errors" />
								</div>
							</div>
							<div className="col-lg-6 col-md-12">
								<div className="form-group">
									<input
										type="email"
										name="email"
										id="email"
										className="form-control"
										required=""
										data-error="Please enter your email"
										placeholder="Email"
									/>
									<br />
									<div className="help-block with-errors" />
								</div>
							</div>
							<div className="col-lg-6 col-md-6">
								<div className="form-group">
									<input
										type="number"
										name="phone"
										id="phone_number"
										required=""
										data-error="Please enter your number"
										className="form-control"
										placeholder="Phone"
									/>
									<br />
									<div className="help-block with-errors" />
								</div>
							</div>
							<div className="col-lg-6 col-md-6">
								<div className="form-group">
									<select
										name="subject"
										id="phone_number"
										required=""
										data-error="Please enter your number"
										className="form-control"
										placeholder="Phone"
									>
										<option value="" disabled>Subject</option>
										<option value="Issue" >Issue</option>
										<option value="Service" >Service</option>
										<option value="Other" >Other</option>
									</select>
									<div className="help-block with-errors" />
								</div>
							</div>
							<div className="col-lg-12 col-md-12 tw-mt-4">
								<div className="form-group">
									<textarea
										name="message"
										className="form-control"
										id="message"
										cols={30}
										rows={6}
										required=""
										data-error="Write your message"
										placeholder="Your Message"
										defaultValue={""}
									/>
									<div className="help-block with-errors" />
								</div>
							</div>
							<div className="col-lg-12 col-md-12">
								<div className="form-group">
									<div className="form-check tw-mt-4">
										<input
											name="gridCheck"
											defaultValue="I agree to the terms and privacy policy."
											className="form-check-input"
											type="checkbox"
											id="gridCheck"
											required=""
										/>
										<label className="form-check-label " htmlFor="gridCheck">
											I agree to the <a href="#">terms</a> and{" "}
											<a href="#">privacy policy</a>
										</label>
										<br /> <br />

										<div className="help-block with-errors gridCheck-error" />
									</div>
								</div>
							</div>
							<div className="col-lg-12 col-md-12">
								<button type="submit" className='  tw-border-2 tw-p-2 tw-bg-black tw-text-white tw-font-semibold'>
									Send Message
								</button>
								<div id="msgSubmit" className="h3 tw-text-center tw-hidden" />
								<div className="clearfix" />
							</div>
						</div>
					</form>
				</div>

			</div>
			<Footer />
		</>
	)
}



export default Contact;