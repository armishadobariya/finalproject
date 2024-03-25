import React, { useEffect, useRef, useState } from 'react';
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
import { addUserQueryUrl, userProfileUrl } from '../Components/Api';
import axios from 'axios';


const Contact = () => {

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [subject, setSubject] = useState('');
	const [message, setMessage] = useState('');
	const [userData, setUserData] = useState([]);




	const sendUserQuery = async (e, name, email) => {
		try {


			const reqData = {
				name: name,
				email: email,
				subject: subject,
				message: message,
			}

			console.log("feedback login:", email);
			console.log(reqData);

			const token = localStorage.getItem("token");
			const responseData = await axios.post(addUserQueryUrl, reqData, {

				headers: {
					"Authorization": `Bearer ${token}`,

				}
			});


			console.log("response:", responseData);

		}
		catch (error) {

			console.log('error');

		}
	}

	const getUserData = async () => {
		try {
			const token = localStorage.getItem('token');
			const response = await axios.get(userProfileUrl, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});

			if (response.status === 200) {
				const data = response.data;
				console.log('data: ', data);

				// setUserEmail(data.userData.email);
				// setUserMobile(data.userData.mobileNo);
				// setIsLogin(data.isLogin);
				setUserData(data.userData);
			}
		} catch (error) {
			console.error("fetch user data:", error.message);
		}
	}


	useEffect(() => {
		getUserData();
	}, []);





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

					{/* <ContactSlide /> */}

				</div>
			</div>


			<div className=' tw-flex tw-place-content-center '>
				<div className="faq-contact tw-m-5 shadow tw-p-10 tw-bg-white tw-rounded-md md:tw-w-[700px] md:tw-top-18 ">
					<h3 className=' tw-text-2xl tw-font-bold tw-text-center'>Ask Your Question</h3>
					<form id="contactForm ">
						<div className="row tw-mt-4">
							<div className="col-lg-6 col-md-12">
								<div className="form-group">
									<h1
										type="text"
										name="name"
										id="name"
										className="form-control"
										required=""
										data-error="Please enter your name"
										placeholder="Name"


									>

										{userData.name}
									</h1>
									<br />
									<div className="help-block with-errors" />
								</div>
							</div>
							<div className="col-lg-6 col-md-12">
								<div className="form-group">
									<h1
										type="text"
										name="name"
										id="name"
										className="form-control"
										required=""
										data-error="Please enter your name"
										placeholder="Name"


									>

										{userData.email}
									</h1>
									<br />
									<div className="help-block with-errors" />
								</div>
							</div>

							<div className="col-lg-12 col-md-12">
								<div className="form-group">
									<input
										type="text"
										required=""
										data-error="Please enter your subject"
										className="form-control"
										placeholder="Subject"
										onChange={(e) => setSubject(e.target.value)}

									/>
									<br />
									<div className="help-block with-errors" />
								</div>
							</div>
							<div className="col-lg-12 col-md-12 tw-mt-4 tw-mb-4">
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
										onChange={(e) => setMessage(e.target.value)}

									/>
									<div className="help-block with-errors" />
								</div>
							</div>

							<div className="col-lg-12 col-md-12">
								<button type="submit" className='  tw-border-2 tw-p-2 tw-bg-black tw-text-white tw-font-semibold'
									onClick={() => { sendUserQuery(userData.name, userData.email) }}>
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