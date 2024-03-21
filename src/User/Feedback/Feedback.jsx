import React, { useState } from 'react'
import './Feedback.css';
import StarIcon from '@mui/icons-material/Star';
import { Footer } from '../Footer/Footer';
import Nav from '../Nav/Nav';

const Feedback = () => {
	const [rating, setRating] = useState(0);
	const [hover, setHover] = useState(null);

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

							<div className=" md:tw-p-5">
								<h3 class="tw-text-3xl tw-font-bold  tw-text-black tw-mb-10">
									Rate Your Experience
								</h3>
								<form>
									<div>
										<div className=' tw-mb-4'>
											<h2>We highly  value Your Feedback! Kindly Take  a moment to  rate your experienc and provide  us with your valuable feedback.</h2>
										</div>

									</div>
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
											/>
										</div>
										<button type="button" class="tw-bg-black  tw-w-full tw-text-center tw-text-white tw-text-lg tw-font-semibold tw-h-11 tw-mb-3 tw-mt-2 tw-rounded-sm " >
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