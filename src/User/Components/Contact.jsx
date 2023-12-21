import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Swiper.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ContactImg from '../../Assests/Image/Contact/contact.jpg';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Contact.css';
import GitHubIcon from '@mui/icons-material/GitHub';

const Contact = () => {
	return (
		<>
			<div className="relative mb-10">
				<div className="" style={{ position: 'relative' }}>

					<img className=' bg-cover w-full  md:h-full' src={ContactImg} alt="" />
					<div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0, 0, 0, 0.5)' }}></div>
				</div>
				<div className=" absolute top-0 left-0 w-full h-full bg-cover  text-center text-white grid place-content-center ">
					<h2 className=' text-3xl font-bold '>Contact</h2>
					<h5 className=' text-2xl font-semibold '>Home >> Contact </h5>
				</div>
			</div >
			<div className='mt-10'>
				<div className=' text-black'>
					<h1 className=' font-bold text-2xl  flex justify-center'>Team</h1>
					<h3 className=' font-semibold text-3xl  flex justify-center mt-1'>Meet Our Team</h3>
				</div>
				<div className=' mt-4'>
					<Swiper
						slidesPerView={3}
						centeredSlides={true}
						spaceBetween={10}
						// grabCursor={true}
						autoplay={{
							delay: 2500,
							disableOnInteraction: false,
						}}
						// pagination={{
						//     clickable: true,
						// }}
						navigation={true}
						modules={[Autoplay, Pagination, Navigation]}
						className="mySwiper"
					>
						<SwiperSlide><div className="col-lg-8 col-md-8  flex place-content-center">
							<div className="container">
								<img
									src="https://images.unsplash.com/photo-1554080353-a576cf803bda?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG98ZW58MHx8MHx8fDA%3D"
									alt="Avatar"
									className="image"

								/>
								<div className="middle">
									<div className="text">
										<ul className=' flex'>
											<li className='p-2'>
												<a href="https://web.whatsapp.com/">
													<WhatsAppIcon />
												</a>
											</li>
											<li className='p-2'>
												<a href="https://web.whatsapp.com/">
													<WhatsAppIcon />
												</a>
											</li>
											<li className='p-2'>
												<a href="https://web.whatsapp.com/">
													<WhatsAppIcon />
												</a>
											</li>

										</ul>
										<h3 className=' font-bold text-2xl'> Demo</h3>
										<span className=' text-lg font-semibold'>Founder</span>
									</div>
								</div>
							</div>
						</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="col-lg-8 col-md-8  flex place-content-center">
								<div className="container">
									<img
										src="https://images.unsplash.com/photo-1554080353-a576cf803bda?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG98ZW58MHx8MHx8fDA%3D"
										alt="Avatar"
										className="image"

									/>
									<div className="middle">
										<div className="text">
											<ul className=' flex'>
												<li className='p-2'>
													<a href="https://web.whatsapp.com/">
														<WhatsAppIcon />
													</a>
												</li>
												<li className='p-2'>
													<a href="https://web.whatsapp.com/">
														<WhatsAppIcon />
													</a>
												</li>
												<li className='p-2'>
													<a href="https://web.whatsapp.com/">
														<WhatsAppIcon />
													</a>
												</li>

											</ul>
											<h3 className=' font-bold text-2xl'> Demo</h3>
											<span className=' text-lg font-semibold'>Founder</span>
										</div>
									</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide><div className="col-lg-8 col-md-8   flex place-content-center">
							<div className="container">
								<img
									src="https://images.unsplash.com/photo-1554080353-a576cf803bda?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG98ZW58MHx8MHx8fDA%3D"
									alt="Avatar"
									className="image"

								/>
								<div className="middle">
									<div className="text">
										<ul className=' flex'>
											<li className='p-2'>
												<a href="https://web.whatsapp.com/">
													<WhatsAppIcon />
												</a>
											</li>
											<li className='p-2'>
												<a href="https://web.whatsapp.com/">
													<WhatsAppIcon />
												</a>
											</li>
											<li className='p-2'>
												<a href="https://web.whatsapp.com/">
													<WhatsAppIcon />
												</a>
											</li>

										</ul>
										<h3 className=' font-bold text-2xl'> Demo</h3>
										<span className=' text-lg font-semibold'>Founder</span>
									</div>
								</div>
							</div>
						</div>
						</SwiperSlide>
						<SwiperSlide><div className="col-lg-8 col-md-8  flex place-content-center">
							<div className="container">
								<img
									src="https://images.unsplash.com/photo-1554080353-a576cf803bda?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG98ZW58MHx8MHx8fDA%3D"
									alt="Avatar"
									className="image"

								/>
								<div className="middle">
									<div className="text">
										<ul className=' flex'>
											<li className='p-2'>
												<a href="https://web.whatsapp.com/">
													<WhatsAppIcon />
												</a>
											</li>
											<li className='p-2'>
												<a href="https://web.whatsapp.com/">
													<WhatsAppIcon />
												</a>
											</li>
											<li className='p-2'>
												<a href="https://web.whatsapp.com/">
													<WhatsAppIcon />
												</a>
											</li>

										</ul>
										<h3 className=' font-bold text-2xl'> Demo</h3>
										<span className=' text-lg font-semibold'>Founder</span>
									</div>
								</div>
							</div>
						</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="col-lg-8 col-md-8  ">
								<div className="container">
									<img
										src="https://images.unsplash.com/photo-1554080353-a576cf803bda?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG98ZW58MHx8MHx8fDA%3D"
										alt="Avatar"
										className="image"

									/>
									<div className="middle">
										<div className="text">
											<ul className=' flex'>
												<li className='p-2'>
													<a href="https://github.com/">
														<GitHubIcon />
													</a>
												</li>
												<li className='p-2'>
													<a href="https://web.whatsapp.com/">
														<InstagramIcon />
													</a>
												</li>
												<li className='p-2'>
													<a href="https://web.whatsapp.com/">
														<LinkedInIcon />
													</a>
												</li>

											</ul>
											<h3 className=' font-bold text-2xl'> Demo</h3>
											<span className=' text-lg font-semibold'>Founder</span>
										</div>
									</div>
								</div>

							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="col-lg-8 col-md-8  ">
								<div className="container">
									<img
										src="https://images.unsplash.com/photo-1554080353-a576cf803bda?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG98ZW58MHx8MHx8fDA%3D"
										alt="Avatar"
										className="image"

									/>
									<div className="middle">
										<div className="text">
											<ul className=' flex'>
												<li className='p-2'>
													<a href="https://github.com/">
														<GitHubIcon />
													</a>
												</li>
												<li className='p-2'>
													<a href="https://web.whatsapp.com/">
														<InstagramIcon />
													</a>
												</li>
												<li className='p-2'>
													<a href="https://web.whatsapp.com/">
														<LinkedInIcon />
													</a>
												</li>

											</ul>
											<h3 className=' font-bold text-2xl'> Demo</h3>
											<span className=' text-lg font-semibold'>Founder</span>
										</div>
									</div>
								</div>

							</div>
						</SwiperSlide>
					</Swiper>
				</div>
			</div>


			<div className=' flex place-content-center'>
				<div className="faq-contact  m-5 shadow-lg p-3 bg-white rounded-md md:w-[700px]   md:-top-18">
					<h3 className=' text-2xl font-bold text-center'>Ask Your Question</h3>
					<form id="contactForm ">
						<div className="row  mt-4">
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
							<div className="col-lg-12 col-md-12 mt-4">
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
									<div className="form-check mt-4">
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
								<button type="submit" className='border-2 p-2 bg-black text-white font-semibold'>
									Send Message
								</button>
								<div id="msgSubmit" className="h3 text-center hidden" />
								<div className="clearfix" />
							</div>
						</div>
					</form>
				</div>

			</div>
		</>
	)
}



export default Contact;