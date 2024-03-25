import React, { useState } from 'react'
import './Feedback.css';
import StarIcon from '@mui/icons-material/Star';
import { Footer } from '../Footer/Footer';
import Nav from '../Nav/Nav';
import axios from 'axios';
import { addFeedbackUrl } from '../Components/Api';

const Feedback = () => {
	const [hover, setHover] = useState(null);

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [rating, setRating] = useState(0);
	const [message, setMessage] = useState('');

	const addFeedback = async (e) => {
		try {

			e.preventDefault();

			const reqData = {
				name: name,
				email: email,
				rating: rating,
				message: message,
			}

			console.log("feedback login:", email);


			const token = localStorage.getItem('user');
			const tokenArray = JSON.parse(token);
			const responseData = await axios.post(addFeedbackUrl, reqData, {

				headers: {
					"Authorization": `Bearer ${tokenArray[0]}`,
					"Content-Type": "application/json",
				}
			});


			console.log("response:", responseData);

		}
		catch (error) {

			console.log('error');

		}
	}

	const handleRatingClick = (clickedRating) => {
		setRating(clickedRating);
	};
	console.log(rating);

	return (
		<>
			<Nav />
			<div>
				<div className=' '>
					<div className='gradient_background tw-grid tw-h-screen tw-place-content-center'>
						<section className="tw-grid tw-content-center tw-bg-white tw-rounded-sm tw-text-center tw-border-2 md:tw-w-[600px] tw-h-auto tw-p-2 tw-m-3 tw-shadow-md ">
							<h3 class="tw-text-3xl tw-font-bold  tw-text-black tw-mb-6 tw-mt-10">
								Rate Your Experience
							</h3>

							<div>
								<div className=' tw-p-6'>
									<h2>We highly  value Your Feedback! Kindly Take  a moment to  rate your experienc and provide  us with your valuable feedback.</h2>
								</div>

							</div>
							<div className=" md:tw-p-5">
								<div>
									<div className='tw-mb-3'>
										<input type='text'
											className='form-control'
											rows='3'
											placeholder='Name'
											value={name}
											onChange={(e) => { setName(e.target.value) }}
										/>
									</div>

									<div className='tw-mb-7'>
										<input type='email'
											className='form-control'
											rows='3'
											placeholder='Email'
											value={email}
											onChange={(e) => { setEmail(e.target.value) }}
										/>
									</div>
								</div>


								<form>

									<div>

										{[1, 2, 3, 4, 5].map((value) => (
											<StarIcon
												key={value}
												className='rating_star'
												style={{ height: "60px", width: "60px", marginBottom: "30px", color: value <= (hover || rating) ? "#ffc107" : "#e4e5e9" }}
												onClick={() => handleRatingClick(value)}
												onMouseEnter={() => setHover(value)}
												onMouseLeave={() => setHover(null)}
											/>
										))}
									</div>
									<div >
										<div className='rate ' style={{ display: 'flex', flexDirection: 'row' }} >

										</div>
										<div className='tw-mb-3'>
											<textarea
												className='form-control'
												rows='3'
												placeholder='Tell us about your experience!'
												value={message}
												onChange={(e) => { setMessage(e.target.value) }}
											/>
										</div>
										<button type="button" class="tw-bg-black  tw-w-full tw-text-center tw-text-white tw-text-lg tw-font-semibold tw-h-11 tw-mb-3 tw-mt-2 tw-rounded-sm "

											onClick={addFeedback}
										>
											Send
										</button>

									</div>

								</form>
							</div>
						</section>
					</div>
				</div>
			</div>
			<Footer />
		</>
	)
}

export default Feedback;