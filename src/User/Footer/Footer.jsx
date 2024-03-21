import React from 'react';
import './footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import footerImg from '../../Assests/Image/Footer/footerlogo.svg'

export const Footer = () => {
	return (
		<>
			<div>
				<footer style={{ backgroundColor: '#191919' }}>
					<div className=' tw-place-content-center tw-grid tw-pt-12'>
						<div className='tw-flex'>
							<div className='lg:tw-w-[500px] md:tw-w-[300px] tw-w-20 tw-border-b-2 tw-ml-6 tw-mb-20 tw-border-slate-400 '></div>
							<img src={footerImg} alt="" className='tw-h-[120px] tw-w-30 ' />
							<div className='lg:tw-w-[500px] md:tw-w-[300px] tw-w-20 tw-border-b-2 tw-mr-6 tw-mb-20 tw-border-slate-400 '></div>


						</div>
					</div>
					<div className=' md:tw-flex  tw-flex tw-flex-col tw-flex-wrap tw-item-center  tw-text-center  tw-justify-evenly tw-p-12  tw-text-white tw-mb-10'>

						<div class="tw-w-full tw-flex tw-flex-col tw-flex-wrap tw-item-center  "></div>

						<div class="tw-flex tw-flex-wrap tw-justify-around">
							<div class="tw-flex tw-flex-col tw-item-center tw-mb-5">
								<h3 className=' tw-text-xl  tw-font-semibold ' style={{ color: "#d3a478" }}>In touch 24/7</h3>
								<p className=' tw-text-2xl tw-mt-4'>Reservation</p>
								<div className=' tw-mt-8'>
									<p>+91 9876543210</p>
									<p>project@gmail.com</p>
								</div>
							</div>

							<div class="tw-flex tw-flex-col tw-item-cente tw-mb-5">
								<h3 className=' tw-text-xl  tw-font-semibold ' style={{ color: "#d3a478" }}>Location</h3>
								<h2 className=' tw-text-2xl tw-mt-4'>Address</h2>
								<div className=' tw-mt-8'>
									<p>121 King Street, Melbourne <br />
										Victoria 3000 Australia
									</p>
								</div>
							</div>


							<div class="tw-flex tw-flex-col tw-item-center tw-mb-2">
								<h3 className=' tw-text-xl  tw-font-semibold ' style={{ color: "#d3a478" }}>Follow</h3>
								<h2 className=' tw-text-2xl tw-mt-4'>Social</h2>
								<div className=' tw-mt-8 tw-flex tw-space-x-3'>
									<p><FacebookIcon className='  hover:tw-text-blue-600 tw-cursor-pointer' /></p>
									<p><TwitterIcon className='  hover:tw-text-blue-600 tw-cursor-pointer' /></p>
									<p><LinkedInIcon className='  hover:tw-text-blue-600 tw-cursor-pointer' /></p>
									<p><InstagramIcon className='  hover:tw-text-blue-600 tw-cursor-pointer' /></p>
								</div>
							</div>


							<div class="tw-flex tw-flex-col tw-item-center tw-mb-2">
								<h3 className=' tw-text-xl  tw-font-semibold ' style={{ color: "#d3a478" }}>Sign up for</h3>
								<h2 className=' tw-text-2xl tw-mt-4'>Newsletter</h2>
								<div className=' tw-mt-8'>

									<input type="text" placeholder='Enter Your Email' className=' tw-h-11  tw-p-2 tw-w-[160px]  tw-md:w-40' style={{ backgroundColor: "#191919", border: "2px solid #d3a478" }} /><EmailIcon className=' tw-mb-[2px] tw-text-black' style={{ height: "44px", width: "42px", backgroundColor: "#d3a478" }} />
								</div>
							</div>


						</div>


					</div>

					<div style={{ backgroundColor: " rgb(41, 43, 43) " }}>
						<div className='  tw-text-white tw-h-16 tw-grid tw-place-content-center '>
							<p class="tw-ml-2 tw-mr-2"> Â© 2020 All rights reserved. Developed at SecretLab, theme Royalux. Build with Atiframe.
							</p>
						</div>

					</div>


				</footer>
			</div>
		</>
	)
}